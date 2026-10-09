import { MATA_PENCAHARIAN } from '../../data/transparansi2';

export default function PekerjaanCard() {
  return (
    <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col justify-between gap-space-md">
      <div>
        <div className="flex items-center justify-between mb-space-xs">
          <span className="text-[18px] font-bold text-on-surface">Mata Pencaharian Utama</span>
          <span className="material-symbols-outlined text-on-surface-variant text-[20px]">work</span>
        </div>
        <p className="text-[12px] text-on-surface-variant">Sebaran sektor ekonomi mata pencaharian warga desa.</p>
      </div>
      <div className="flex flex-col gap-space-xs">
        {MATA_PENCAHARIAN.map((m) => (
          <div key={m.label} className="flex items-center justify-between p-2 rounded-lg bg-surface-container-low/50">
            <div className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded-full ${m.dot}`}></div>
              <span className="text-[12px] text-on-surface font-medium">{m.label}</span>
            </div>
            <span className={`font-mono-tabular text-[13px] font-bold ${m.text}`}>{m.pct}</span>
          </div>
        ))}
      </div>
      <div className="p-space-sm bg-surface-container-low rounded-lg text-[11px] text-on-surface-variant flex items-center gap-2">
        <span className="material-symbols-outlined text-primary text-[18px]">eco</span>
        <span>Desa Sentra Komoditas: Kopi Arabika Rancamanyar &amp; Sayuran Daun.</span>
      </div>
    </div>
  );
}
