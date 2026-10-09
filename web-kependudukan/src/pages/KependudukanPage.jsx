import { useEffect, useMemo, useState } from 'react';
import StatsGrid from '../components/StatsGrid';
import Toolbar from '../components/Toolbar';
import RegistryTable from '../components/RegistryTable';
import BukuMutasi from '../components/BukuMutasi';
import BansosPanel from '../components/BansosPanel';
import TambahWargaModal from '../components/warga/TambahWargaModal';
import { fetchWargas, insertWarga, mapRowToWarga } from '../lib/wargaApi';
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
        onTambah={() => { setSaveError(''); setModalOpen(true); }}
      />
      <RegistryTable rows={rows} masked={masked} onToggleMask={() => setMasked((m) => !m)} loading={loading} source={source} total={wargas.length} />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-md">
        <BukuMutasi />
        <BansosPanel />
      </div>
      <TambahWargaModal open={modalOpen} saving={saving} error={saveError} onClose={() => setModalOpen(false)} onSubmit={handleSubmit} />
    </div>
  );
}

