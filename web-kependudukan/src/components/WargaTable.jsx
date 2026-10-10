import { maskNik } from '../data/warga';

export function MutasiBadge({ mutasi }) {
  if (mutasi.type === 'datang') {
    return (
      <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-secondary bg-surface-variant px-2 py-0.5 rounded">
        <span className="material-symbols-outlined text-[14px]">{mutasi.icon}</span>
        <span>{mutasi.label}</span>
      </span>
    );
  }
  if (mutasi.type === 'lahir') {
    return (
      <span className="inline-flex items-center gap-1 text-[11px] text-primary font-semibold bg-surface-container px-2 py-0.5 rounded">
        <span className="material-symbols-outlined text-[14px]">{mutasi.icon}</span>
        <span>{mutasi.label}</span>
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-primary">
      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
      <span>{mutasi.label}</span>
    </span>
  );
}

export function WargaRow({ w, masked, onDetail, onEdit, onPrint, onMutasi }) {
  return (
    <tr className={`hover:bg-surface-container-low transition-colors ${w.striped ? 'bg-surface-container-low/40' : ''}`}>
      <td className="py-space-sm px-space-md">
        <div className="flex flex-col font-mono-tabular text-[11px]">
          <span className="font-semibold text-primary">{masked ? maskNik(w.nik) : w.nik}</span>
          <span className="text-on-surface-variant">KK: {masked ? maskNik(w.kk) : w.kk}</span>
        </div>
      </td>
      <td className="py-space-sm px-space-md">
        <div className="text-[13px] font-semibold text-on-surface">{w.nama}</div>
        <div className="text-[12px] text-on-surface-variant">{w.alamat}</div>
      </td>
      <td className="py-space-sm px-space-md">
        <div className="text-[12px]">{w.lahir}</div>
        <div className="font-mono-tabular text-[11px] text-on-surface-variant">{w.usia}</div>
      </td>
      <td className="py-space-sm px-space-md">
        <div>{w.agamaPendidikan}</div>
        <div className="font-mono-tabular text-[11px] text-on-surface-variant">{w.golDarah}</div>
      </td>
      <td className="py-space-sm px-space-md">
        <span className="inline-block px-2 py-0.5 rounded-full bg-surface-container text-on-surface-variant text-[11px] font-semibold">{w.statusSipil}</span>
      </td>
      <td className="py-space-sm px-space-md">
        <div className="flex flex-wrap gap-1">
          {w.klasifikasi.map((k) => (
            <span key={k.label} className={`px-2 py-0.5 rounded text-[11px] flex items-center gap-1 ${k.cls}`}>
              {k.icon && <span className="material-symbols-outlined text-[14px]">{k.icon}</span>}
              <span>{k.label}</span>
            </span>
          ))}
        </div>
      </td>
      <td className="py-space-sm px-space-md"><MutasiBadge mutasi={w.mutasi} /></td>
      <td className="py-space-sm px-space-md">
        <div className="flex items-center justify-center gap-1">
          <button onClick={() => onDetail?.(w)} className="p-1 rounded hover:bg-surface-container text-primary" title="Detail Profil Warga"><span className="material-symbols-outlined text-[18px]">account_box</span></button>
          <button onClick={() => onEdit?.(w)} className="p-1 rounded hover:bg-surface-container text-on-surface-variant" title="Ubah Data"><span className="material-symbols-outlined text-[18px]">edit_note</span></button>
          <button onClick={() => onPrint?.(w)} className="p-1 rounded hover:bg-surface-container text-on-surface-variant" title="Cetak"><span className="material-symbols-outlined text-[18px]">print</span></button>
          <button onClick={() => onMutasi?.(w)} className="p-1 rounded hover:bg-surface-container text-error" title="Catat Mutasi"><span className="material-symbols-outlined text-[18px]">swap_horiz</span></button>
        </div>
      </td>
    </tr>
  );
}
