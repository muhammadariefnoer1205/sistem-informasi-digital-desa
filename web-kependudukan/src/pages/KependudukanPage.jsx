import { useEffect, useMemo, useState } from 'react';
import StatsGrid from '../components/StatsGrid';
import Toolbar from '../components/Toolbar';
import RegistryTable from '../components/RegistryTable';
import BukuMutasi from '../components/BukuMutasi';
import BansosPanel from '../components/BansosPanel';
import TambahWargaModal from '../components/warga/TambahWargaModal';
import DetailWargaModal from '../components/warga/DetailWargaModal';
import UbahWargaModal from '../components/warga/UbahWargaModal';
import { fetchWargas, insertWarga, updateWarga, mapRowToWarga } from '../lib/wargaApi';
import { printBiodata } from '../lib/printBiodata';
import { exportRegisterExcel, printRegisterPdf } from '../lib/exportRegister';
import { registerSubHeaderActions } from '../lib/subHeaderBus';
import { isSupabaseConfigured } from '../lib/supabase';

export default function KependudukanPage() {
  const [query, setQuery] = useState('');
  const [dusun, setDusun] = useState('all');
  const [rw, setRw] = useState('all');
  const [category, setCategory] = useState('semua');
  const [masked, setMasked] = useState(true);

  const [wargas, setWargas] = useState([]);
  const [source, setSource] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [saving, setSaving] = useState(false);
  const [saveError, setSaveError] = useState('');
  const [notice, setNotice] = useState('');
  const [detailWarga, setDetailWarga] = useState(null);
  const [editWarga, setEditWarga] = useState(null);
  const [editSaving, setEditSaving] = useState(false);
  const [editError, setEditError] = useState('');

  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        const res = await fetchWargas();
        if (!alive) return;
        setWargas(res.data);
        setSource(res.source);
      } catch (err) {
        if (!alive) return;
        setLoadError(err.message ?? 'Gagal memuat data warga.');
      } finally {
        if (alive) setLoading(false);
      }
    })();
    return () => { alive = false; };
  }, []);

  const rows = useMemo(() => {
    const q = query.toLowerCase().trim();
    return wargas.filter((w) => {
      if (dusun !== 'all' && w.dusun !== dusun) return false;
      if (rw !== 'all' && w.rw !== rw) return false;
      if (category === 'bansos' && w.kategori !== 'bansos') return false;
      if (category === 'lansia' && w.kategori !== 'lansia') return false;
      if (category === 'disabilitas' && w.kategori !== 'disabilitas') return false;
      if (category === 'mutasi' && w.kategori !== 'mutasi') return false;
      if (!q) return true;
      const hay = `${w.nik} ${w.kk} ${w.nama} ${w.alamat}`.toLowerCase();
      return hay.includes(q);
    });
  }, [wargas, query, dusun, rw, category]);

  const filterInfo = useMemo(() => {
    const parts = [];
    if (query.trim()) parts.push(`cari "${query.trim()}"`);
    if (dusun !== 'all') parts.push(`dusun ${dusun}`);
    if (rw !== 'all') parts.push(rw.toUpperCase());
    if (category !== 'semua') parts.push(`kategori ${category}`);
    return parts.length ? `Filter aktif: ${parts.join(', ')}` : '';
  }, [query, dusun, rw, category]);

  const openTambah = () => { setSaveError(''); setModalOpen(true); };
  const doExportExcel = () => exportRegisterExcel(rows, masked);
  const doExportPdf = () => printRegisterPdf(rows, masked, { filterInfo });

  // Daftarkan aksi ke SubHeader global (dropdown Export + Tambah).
  // Tanpa deps array agar closure (rows/masked/filter) selalu segar.
  useEffect(() => registerSubHeaderActions({
    onExportExcel: doExportExcel,
    onExportPdf: doExportPdf,
    onTambah: openTambah,
  }));

  const handleSubmit = async (form, reset) => {
    setSaving(true);
    setSaveError('');
    try {
      if (!/^[0-9]{16}$/.test(form.nik.trim())) throw new Error('NIK harus tepat 16 digit angka.');
      if (!/^[0-9]{16}$/.test(form.no_kk.trim())) throw new Error('No. KK harus tepat 16 digit angka.');
      if (!form.nama_lengkap.trim()) throw new Error('Nama lengkap wajib diisi.');
      const saved = await insertWarga(form);
      setWargas((prev) => [...prev, mapRowToWarga(saved, prev.length)].map((w, i) => ({ ...w, striped: i % 2 === 1 })));
      reset();
      setModalOpen(false);
      setNotice(`${form.nama_lengkap} tersimpan ke Supabase dan tampil di Buku Induk.`);
    } catch (err) {
      setSaveError(err.message ?? 'Gagal menyimpan data.');
    } finally {
      setSaving(false);
    }
  };

  const applyStripes = (list) => list.map((w, i) => ({ ...w, striped: i % 2 === 1 }));

  const formToRow = (w, f) => ({
    id: w.id,
    nik: w.nik,
    no_kk: f.no_kk,
    nama_lengkap: f.nama_lengkap,
    dusun: f.dusun,
    rw: f.rw,
    rt: f.rt || w.rt,
    alamat: `Dusun ${f.dusun}, RT ${f.rt} / RW ${String(f.rw).replace('rw', '')}`,
    tempat_lahir: f.tempat_lahir,
    tanggal_lahir: f.tanggal_lahir || null,
    usia_display: w.usia?.split('•')[0]?.trim() ?? '',
    jenis_kelamin: f.jenis_kelamin,
    agama: f.agama,
    pendidikan: f.pendidikan,
    gol_darah: f.gol_darah ? `Gol. Darah: ${f.gol_darah}` : w.golDarah,
    status_sipil: f.status_sipil,
    kategori: f.kategori,
    mutasi_type: f.mutasi_type,
    mutasi_label: f.mutasi_label,
    mutasi_icon: w.mutasi?.icon ?? null,
    klasifikasi: w.klasifikasi,
  });

  const handleUpdate = async (warga, form) => {
    setEditSaving(true);
    setEditError('');
    try {
      if (!/^[0-9]{16}$/.test(form.no_kk.trim())) throw new Error('No. KK harus tepat 16 digit angka.');
      if (!form.nama_lengkap.trim()) throw new Error('Nama lengkap wajib diisi.');
      if (source === 'supabase') {
        const saved = await updateWarga(warga.id, form);
        setWargas((prev) => applyStripes(prev.map((w) => (w.id === warga.id ? mapRowToWarga(saved, 0) : w))));
      } else {
        setWargas((prev) => applyStripes(prev.map((w) => (
          w.id !== warga.id ? w : { ...mapRowToWarga(formToRow(w, form), 0), id: w.id, nik: w.nik }
        ))));
      }
      setEditWarga(null);
      setDetailWarga(null);
      setNotice(`Data ${form.nama_lengkap} berhasil diperbarui.`);
    } catch (err) {
      setEditError(err.message ?? 'Gagal menyimpan perubahan.');
    } finally {
      setEditSaving(false);
    }
  };

  return (
    <div className="flex flex-col w-full gap-space-lg">
      {!isSupabaseConfigured && (
        <div className="p-space-sm rounded-xl bg-tertiary-fixed text-on-surface text-[13px] font-semibold flex items-center gap-2">
          <span className="material-symbols-outlined text-[18px]">info</span>
          Supabase belum dikonfigurasi — tabel memakai data lokal. Isi VITE_SUPABASE_URL &amp; VITE_SUPABASE_ANON_KEY di .env, jalankan schema.sql + seed.sql, lalu restart dev server.
        </div>
      )}
      {loadError && (
        <div className="p-space-sm rounded-xl bg-error-container/40 text-on-error-container text-[13px] font-semibold flex items-center gap-2">
          <span className="material-symbols-outlined text-[18px]">warning</span>{loadError}
        </div>
      )}
      {notice && (
        <div className="p-space-sm rounded-xl bg-surface-variant text-primary text-[13px] font-semibold flex items-center gap-2">
          <span className="material-symbols-outlined text-[18px]">check_circle</span>{notice}
        </div>
      )}
      <StatsGrid />
      <Toolbar
        query={query} setQuery={setQuery}
        dusun={dusun} setDusun={setDusun}
        rw={rw} setRw={setRw}
        category={category} setCategory={setCategory}
        onTambah={openTambah} onCetakPdf={doExportPdf} onEksporExcel={doExportExcel}
      />
      <RegistryTable rows={rows} masked={masked} onToggleMask={() => setMasked((m) => !m)} loading={loading} source={source} total={wargas.length}
        onDetail={(w) => setDetailWarga(w)}
        onEdit={(w) => { setEditError(''); setEditWarga(w); }}
        onPrint={(w) => printBiodata(w, masked)}
      />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-md">
        <BukuMutasi />
        <BansosPanel />
      </div>
      <TambahWargaModal open={modalOpen} saving={saving} error={saveError} onClose={() => setModalOpen(false)} onSubmit={handleSubmit} />
      <DetailWargaModal warga={detailWarga} masked={masked} onClose={() => setDetailWarga(null)}
        onEdit={() => { setEditError(''); setEditWarga(detailWarga); }}
        onPrint={() => printBiodata(detailWarga, masked)}
      />
      <UbahWargaModal warga={editWarga} open={!!editWarga} saving={editSaving} error={editError}
        onClose={() => setEditWarga(null)} onSubmit={handleUpdate}
      />
    </div>
  );
}

