import { RIWAYAT_LAPORAN } from '../../data/layanan';

export default function RiwayatLaporan() {
  return (
    <div className="flex flex-col gap-space-sm pt-space-sm">
      <div className="flex items-center justify-between">
        <span className="text-[13px] text-on-surface font-semibold">Riwayat Aspirasi Terkini</span>
        <span className="text-[11px] font-semibold text-on-surface-variant">2 Laporan Aktif</span>
      </div>
      <div className="flex flex-col gap-space-xs">
        {RIWAYAT_LAPORAN.map((r) => (
          <div key={r.title} className="p-space-sm rounded-lg bg-surface-container-low/70 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-xs">
            <div className="flex items-center gap-space-sm">
              <span className="material-symbols-outlined text-primary text-[20px]">{r.icon}</span>
              <div className="flex flex-col">
                <span className="text-[13px] font-semibold text-on-surface">{r.title}</span>
                <span className="font-mono-tabular text-[11px] text-on-surface-variant">{r.meta}</span>
              </div>
            </div>
            {r.handling ? (
              <span className="px-2.5 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed text-[11px] font-semibold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping"></span>{r.status}
              </span>
            ) : (
              <span className="px-2.5 py-0.5 rounded-full bg-surface-container text-primary text-[11px] font-semibold flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">check</span>{r.status}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
