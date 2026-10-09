import { useState } from 'react';
import IdentitasSection from './IdentitasSection';
import BiodataSection from './BiodataSection';

const EMPTY = {
  nik: '', no_kk: '', nama_lengkap: '', dusun: 'krajan', rw: 'rw01', rt: '',
  tempat_lahir: '', tanggal_lahir: '', jenis_kelamin: 'Laki-laki', agama: 'Islam',
  pendidikan: '', gol_darah: '', status_sipil: '', kategori: 'reguler',
  mutasi_type: 'tetap', mutasi_label: 'Tetap',
};

const MUTASI_LABEL = { tetap: 'Tetap', datang: 'Datang', lahir: 'Lahir Baru' };

export default function TambahWargaModal({ open, saving, error, onClose, onSubmit }) {
  const [form, setForm] = useState(EMPTY);

  if (!open) return null;

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => (name === 'mutasi_type'
      ? { ...f, mutasi_type: value, mutasi_label: MUTASI_LABEL[value] ?? 'Tetap' }
      : { ...f, [name]: value }));
  };

  const submit = (e) => {
    e.preventDefault();
    onSubmit(form, () => setForm(EMPTY));
  };

  return (
    <div className="fixed inset-0 z-50 bg-inverse-surface/50 backdrop-blur-sm flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-surface-container-lowest rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-space-lg shadow-2xl flex flex-col gap-space-md" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-[24px]">person_add</span>
            <h3 className="text-[18px] font-semibold text-on-surface">Tambah Data Warga Baru</h3>
          </div>
          <button className="p-1 rounded-lg hover:bg-surface-container text-on-surface-variant" onClick={onClose}>
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>
        <p className="text-[12px] text-on-surface-variant">Data tersimpan ke tabel <span className="font-mono-tabular font-semibold">public.warga</span> di Supabase dan langsung tampil di Buku Induk.</p>
        {error && (
          <div className="p-space-sm rounded-lg bg-error-container/40 text-on-error-container text-[13px] font-semibold flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px]">warning</span>{error}
          </div>
        )}
        <form onSubmit={submit} className="flex flex-col gap-space-md">
          <IdentitasSection form={form} onChange={onChange} />
          <BiodataSection form={form} onChange={onChange} />
          <div className="flex justify-end gap-space-sm pt-space-xs">
            <button type="button" onClick={onClose} className="px-space-md py-2 rounded-lg bg-surface-container text-primary text-[13px] font-semibold hover:bg-surface-container-high transition-colors">
              Batal
            </button>
            <button type="submit" disabled={saving} className="px-space-md py-2 rounded-lg bg-primary text-on-primary text-[13px] font-semibold hover:bg-secondary transition-colors disabled:opacity-50 flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[18px]">save</span>
              {saving ? 'Menyimpan…' : 'Simpan ke Supabase'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
