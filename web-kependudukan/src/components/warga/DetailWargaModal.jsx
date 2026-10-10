import { MutasiBadge } from '../WargaTable';
import { maskNik } from '../../data/warga';

function Item({ label, value, mono }) {
  return (
    <div className="flex flex-col gap-0.5">
      <span className="text-[11px] font-semibold text-on-surface-variant uppercase tracking-wider">{label}</span>
      <span className={`text-[13px] font-semibold text-on-surface ${mono ? 'font-mono-tabular' : ''}`}>{value || '-'}</span>
    </div>
  );
}

export default function DetailWargaModal({ warga, masked, onClose, onEdit, onPrint }) {
  if (!warga) return null;
  return (
    <div className="fixed inset-0 z-50 bg-inverse-surface/50 backdrop-blur-sm flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-surface-container-lowest rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-space-lg shadow-2xl flex flex-col gap-space-md" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-[24px]">account_box</span>
            <h3 className="text-[18px] font-semibold text-on-surface">Detail Profil Warga</h3>
          </div>
          <button className="p-1 rounded-lg hover:bg-surface-container text-on-surface-variant" onClick={onClose}>
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        <div className="flex flex-wrap items-center gap-space-sm p-space-md rounded-xl bg-surface-container-low">
          <div className="w-12 h-12 rounded-full bg-primary-container text-on-primary flex items-center justify-center text-[18px] font-bold">
            {warga.nama?.charAt(0) ?? '?'}
          </div>
          <div className="flex flex-col flex-1 min-w-[200px]">
            <span className="text-[16px] font-bold text-on-surface">{warga.nama}</span>
            <span className="text-[12px] text-on-surface-variant">{warga.alamat}</span>
          </div>
          <MutasiBadge mutasi={warga.mutasi} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
          <Item label="NIK" value={masked ? maskNik(warga.nik) : warga.nik} mono />
          <Item label="No. Kartu Keluarga" value={masked ? `KK: ${maskNik(warga.kk)}` : `KK: ${warga.kk}`} mono />
          <Item label="Tempat, Tanggal Lahir" value={warga.lahir} />
          <Item label="Usia / Jenis Kelamin" value={warga.usia} mono />
          <Item label="Agama & Pendidikan" value={warga.agamaPendidikan} />
          <Item label="Golongan Darah" value={warga.golDarah} mono />
          <Item label="Status Sipil" value={warga.statusSipil} />
          <Item label="Kategori" value={warga.kategori} />
        </div>

        <div className="flex flex-col gap-1">
          <span className="text-[11px] font-semibold text-on-surface-variant uppercase tracking-wider">Klasifikasi Khusus</span>
          <div className="flex flex-wrap gap-1">
            {warga.klasifikasi.length === 0 && <span className="text-[12px] text-on-surface-variant">Tidak ada klasifikasi khusus.</span>}
            {warga.klasifikasi.map((k) => (
              <span key={k.label} className={`px-2 py-0.5 rounded text-[11px] flex items-center gap-1 ${k.cls}`}>
                {k.icon && <span className="material-symbols-outlined text-[14px]">{k.icon}</span>}
                <span>{k.label}</span>
              </span>
            ))}
          </div>
        </div>

        <div className="flex justify-end gap-space-sm pt-space-xs flex-wrap">
          <button onClick={onPrint} className="px-space-md py-2 rounded-lg bg-surface-container text-primary text-[13px] font-semibold hover:bg-surface-container-high transition-colors flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[18px]">print</span>Cetak Biodata
          </button>
          <button onClick={onEdit} className="px-space-md py-2 rounded-lg bg-primary text-on-primary text-[13px] font-semibold hover:bg-secondary transition-colors flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[18px]">edit_note</span>Ubah Data
          </button>
        </div>
      </div>
    </div>
  );
}
