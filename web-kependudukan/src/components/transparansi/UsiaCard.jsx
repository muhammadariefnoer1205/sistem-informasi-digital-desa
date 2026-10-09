import { KELOMPOK_USIA } from '../../data/transparansi2';

export default function UsiaCard() {
  return (
    <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col justify-between gap-space-md">
      <div>
        <div className="flex items-center justify-between mb-space-xs">
          <span className="text-[18px] font-bold text-on-surface">Struktur Kelompok Usia</span>
          <span className="material-symbols-outlined text-on-surface-variant text-[20px]">group</span>
        </div>
        <p className="text-[12px] text-on-surface-variant">Komposisi potensi tenaga kerja dan kelompok rentan desa.</p>
      </div>
      <div className="flex flex-col gap-space-sm">
        {KELOMPOK_USIA.map((k) => (
          <div key={k.label}>
            <div className="flex justify-between text-[13px] font-semibold text-on-surface mb-1">
              <span>{k.label}</span>
              <span className={`font-mono-tabular text-[13px] font-bold ${k.text}`}>{k.nilai}</span>
            </div>
            <div className="w-full h-2 rounded-full bg-surface-container">
              <div className={`h-full rounded-full ${k.bar}`} style={{ width: `${k.pct}%` }}></div>
            </div>
          </div>
        ))}
      </div>
      <div className="p-space-sm bg-surface-container-low rounded-lg text-[11px] text-on-surface-variant flex items-center gap-2">
        <span className="material-symbols-outlined text-primary text-[18px]">info</span>
        <span>Rasio Ketergantungan: 57.7% (Kategori Bonus Demografi Menguntungkan).</span>
      </div>
    </div>
  );
}
