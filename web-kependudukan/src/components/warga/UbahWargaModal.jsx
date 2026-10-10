import { useEffect, useState } from 'react';
import IdentitasSection from './IdentitasSection';
import BiodataSection from './BiodataSection';

const MUTASI_LABEL = { tetap: 'Tetap', datang: 'Datang', lahir: 'Lahir Baru' };

function toForm(w) {
  return {
    nik: w.nik ?? '',
    no_kk: w.kk ?? '',
    nama_lengkap: w.nama ?? '',
    dusun: w.dusun ?? 'krajan',
    rw: w.rw ?? 'rw01',
    rt: w.rt ?? '',
    tempat_lahir: w.tempat_lahir ?? '',
    tanggal_lahir: w.tanggal_lahir ?? '',
    jenis_kelamin: w.jenis_kelamin ?? 'Laki-laki',
    agama: w.agama ?? 'Islam',
    pendidikan: w.pendidikan ?? '',
    gol_darah: (w.golDarah ?? '').replace(/^Gol\. Darah:\s*/, ''),
    status_sipil: w.statusSipil ?? '',
    kategori: w.kategori ?? 'reguler',
    mutasi_type: w.mutasi?.type ?? 'tetap',
    mutasi_label: w.mutasi?.label ?? 'Tetap',
    klasifikasi: w.klasifikasi ?? [],
  };
}

export default function UbahWargaModal({ warga, open, saving, error, onClose, onSubmit }) {
  const [form, setForm] = useState(() => (warga ? toForm(warga) : null));

  // Sinkronkan form setiap kali warga yang diedit berganti.
  useEffect(() => {
    if (warga) setForm(toForm(warga));
  }, [warga]);

  if (!open || !warga || !form) return null;

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => (name === 'mutasi_type'
      ? { ...f, mutasi_type: value, mutasi_label: MUTASI_LABEL[value] ?? 'Tetap' }
      : { ...f, [name]: value }));
  };

  return (
    <div className="fixed inset-0 z-50 bg-inverse-surface/50 backdrop-blur-sm flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-surface-container-lowest rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-space-lg shadow-2xl flex flex-col gap-space-md" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-[24px]">edit_note</span>
            <h3 className="text-[18px] font-semibold text-on-surface">Ubah Data Warga</h3>
          </div>
          <button className="p-1 rounded-lg hover:bg-surface-container text-on-surface-variant" onClick={onClose}>
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>
        <p className="text-[12px] text-on-surface-variant">
          NIK <span className="font-mono-tabular font-semibold">{warga.nik}</span> tidak dapat diubah (kunci unik). Perubahan tersimpan ke Supabase.
        </p>
        {error && (
          <div className="p-space-sm rounded-lg bg-error-container/40 text-on-error-container text-[13px] font-semibold flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px]">warning</span>{error}
          </div>
        )}
        <form onSubmit={(e) => { e.preventDefault(); onSubmit(warga, form); }} className="flex flex-col gap-space-md">
          <IdentitasSection form={form} onChange={onChange} />
          <BiodataSection form={form} onChange={onChange} />
          <div className="flex justify-end gap-space-sm pt-space-xs">
            <button type="button" onClick={onClose} className="px-space-md py-2 rounded-lg bg-surface-container text-primary text-[13px] font-semibold hover:bg-surface-container-high transition-colors">
              Batal
            </button>
            <button type="submit" disabled={saving} className="px-space-md py-2 rounded-lg bg-primary text-on-primary text-[13px] font-semibold hover:bg-secondary transition-colors disabled:opacity-50 flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[18px]">save</span>
              {saving ? 'Menyimpan…' : 'Simpan Perubahan'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
