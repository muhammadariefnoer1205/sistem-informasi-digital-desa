import { useEffect, useState } from 'react';
import MutasiFormFields from './MutasiFormFields';

const EMPTY = { warga_id: '', jenis: 'lahir', tanggal: new Date().toISOString().slice(0, 10), asal_tujuan: '', keterangan: '' };

export default function CatatMutasiModal({ open, wargas, initialWargaId, saving, error, onClose, onSubmit }) {
  const [form, setForm] = useState({ ...EMPTY, warga_id: initialWargaId ?? '' });

  useEffect(() => {
    if (open) setForm({ ...EMPTY, tanggal: new Date().toISOString().slice(0, 10), warga_id: initialWargaId ?? '' });
  }, [open, initialWargaId]);

  if (!open) return null;

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  return (
    <div className="fixed inset-0 z-50 bg-inverse-surface/50 backdrop-blur-sm flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-surface-container-lowest rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-space-lg shadow-2xl flex flex-col gap-space-md" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-[24px]">transfer_within_a_station</span>
            <h3 className="text-[18px] font-semibold text-on-surface">Catat Mutasi Penduduk</h3>
          </div>
          <button className="p-1 rounded-lg hover:bg-surface-container text-on-surface-variant" onClick={onClose}>
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>
        <p className="text-[12px] text-on-surface-variant">Tersimpan ke <span className="font-mono-tabular font-semibold">mutasi_log</span> dan memperbarui status warga di Supabase.</p>
        {error && (
          <div className="p-space-sm rounded-lg bg-error-container/40 text-on-error-container text-[13px] font-semibold flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px]">warning</span>{error}
          </div>
        )}
        <form onSubmit={(e) => { e.preventDefault(); onSubmit(form); }} className="flex flex-col gap-space-md">
          <MutasiFormFields wargas={wargas} form={form} onChange={onChange} />
          <div className="flex justify-end gap-space-sm pt-space-xs">
            <button type="button" onClick={onClose} className="px-space-md py-2 rounded-lg bg-surface-container text-primary text-[13px] font-semibold hover:bg-surface-container-high transition-colors">
              Batal
            </button>
            <button type="submit" disabled={saving} className="px-space-md py-2 rounded-lg bg-primary text-on-primary text-[13px] font-semibold hover:bg-secondary transition-colors disabled:opacity-50 flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[18px]">save</span>
              {saving ? 'Menyimpan…' : 'Simpan Mutasi'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
