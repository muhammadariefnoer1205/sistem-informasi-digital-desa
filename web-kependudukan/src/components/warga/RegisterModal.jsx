import { useEffect } from 'react';
import { maskNik } from '../../data/warga';

export default function RegisterModal({ open, rows, masked, loading, onClose, onExport }) {
  useEffect(() => {
    if (!open) return;
    const close = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', close);
    return () => document.removeEventListener('keydown', close);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-inverse-surface/50 backdrop-blur-sm flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-surface-container-lowest rounded-xl max-w-5xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between p-space-md bg-surface-container-low">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-[22px]">menu_book</span>
            <div>
              <h3 className="text-[18px] font-semibold text-on-surface">Register Lengkap — Buku Induk Kependudukan</h3>
              <span className="text-[12px] text-on-surface-variant">Format Permendagri No. 47/2016 • {rows.length} record tampil</span>
            </div>
          </div>
          <div className="flex items-center gap-space-xs">
            <button onClick={onExport} className="px-space-sm py-1.5 rounded-lg bg-surface-container-lowest text-primary text-[12px] font-semibold hover:bg-surface-container-high transition-colors flex items-center gap-1">
              <span className="material-symbols-outlined text-[16px]">picture_as_pdf</span>Cetak
            </button>
            <button className="p-1 rounded-lg hover:bg-surface-container text-on-surface-variant" onClick={onClose}>
              <span className="material-symbols-outlined text-[20px]">close</span>
            </button>
          </div>
        </div>
        <div className="overflow-auto flex-1">
          <table className="w-full text-left text-[12px] min-w-[900px]">
            <thead className="sticky top-0">
              <tr className="bg-surface-container text-on-surface text-[11px] font-semibold uppercase">
                <th className="py-2 px-3">No</th>
                <th className="py-2 px-3">NIK / No. KK</th>
                <th className="py-2 px-3">Nama &amp; Alamat</th>
                <th className="py-2 px-3">Lahir / Usia</th>
                <th className="py-2 px-3">Agama / Pend. / Gol</th>
                <th className="py-2 px-3">Status Sipil</th>
                <th className="py-2 px-3">Mutasi</th>
              </tr>
            </thead>
            <tbody>
              {loading && <tr><td colSpan={7} className="py-space-lg text-center text-on-surface-variant">Memuat…</td></tr>}
              {!loading && rows.map((w, i) => (
                <tr key={w.id} className={i % 2 ? 'bg-surface-container-low/40' : ''}>
                  <td className="py-2 px-3 font-mono-tabular">{i + 1}</td>
                  <td className="py-2 px-3 font-mono-tabular text-[11px]">
                    <div className="font-semibold text-primary">{masked ? maskNik(w.nik) : w.nik}</div>
                    <div className="text-on-surface-variant">KK: {masked ? maskNik(w.kk) : w.kk}</div>
                  </td>
                  <td className="py-2 px-3"><div className="font-semibold">{w.nama}</div><div className="text-on-surface-variant">{w.alamat}</div></td>
                  <td className="py-2 px-3"><div>{w.lahir}</div><div className="font-mono-tabular text-[11px] text-on-surface-variant">{w.usia}</div></td>
                  <td className="py-2 px-3"><div>{w.agamaPendidikan}</div><div className="font-mono-tabular text-[11px] text-on-surface-variant">{w.golDarah}</div></td>
                  <td className="py-2 px-3">{w.statusSipil}</td>
                  <td className="py-2 px-3">{w.mutasi?.label}</td>
                </tr>
              ))}
              {!loading && rows.length === 0 && <tr><td colSpan={7} className="py-space-lg text-center text-on-surface-variant">Tidak ada data.</td></tr>}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
