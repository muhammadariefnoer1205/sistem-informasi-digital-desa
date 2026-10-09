export default function StatsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">
      <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col justify-between">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-semibold text-on-surface-variant uppercase tracking-wider">Total Penduduk Aktif</span>
          <span className="p-space-xs rounded-lg bg-surface-container text-primary flex items-center justify-center">
            <span className="material-symbols-outlined text-[18px]">group</span>
          </span>
        </div>
        <div className="my-space-xs">
          <div className="text-[28px] leading-[36px] font-bold text-primary">3.428 <span className="text-[16px] font-normal text-on-surface-variant">Jiwa</span></div>
        </div>
        <div className="flex items-center justify-between pt-space-xs bg-surface-container-low px-space-sm py-1 rounded-lg">
          <div className="flex items-center gap-1 font-mono-tabular text-[11px] text-on-surface">
            <span className="w-1.5 h-1.5 rounded-full bg-primary"></span><span>L: 1.740</span>
          </div>
          <div className="text-on-surface-variant font-mono-tabular text-[11px]">|</div>
          <div className="flex items-center gap-1 font-mono-tabular text-[11px] text-on-surface">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span><span>P: 1.688</span>
          </div>
          <span className="text-[11px] text-secondary font-semibold">100% Valid Dukcapil</span>
        </div>
      </div>

      <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col justify-between">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-semibold text-on-surface-variant uppercase tracking-wider">Total Kepala Keluarga</span>
          <span className="p-space-xs rounded-lg bg-tertiary-fixed text-tertiary flex items-center justify-center">
            <span className="material-symbols-outlined text-[18px]">home_work</span>
          </span>
        </div>
        <div className="my-space-xs">
          <div className="text-[28px] leading-[36px] font-bold text-tertiary">1.012 <span className="text-[16px] font-normal text-on-surface-variant">KK</span></div>
        </div>
        <div className="flex items-center justify-between pt-space-xs bg-surface-container-low px-space-sm py-1 rounded-lg">
          <span className="text-[12px] text-on-surface-variant">Rata-rata 3,38 Jiwa/KK</span>
          <span className="font-mono-tabular text-[11px] text-primary font-medium">98,2% Kartu Baru (Barcode)</span>
        </div>
      </div>

      <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col justify-between">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-semibold text-on-surface-variant uppercase tracking-wider">Mutasi Bulan Ini</span>
          <span className="p-space-xs rounded-lg bg-surface-container text-primary flex items-center justify-center">
            <span className="material-symbols-outlined text-[18px]">sync_alt</span>
          </span>
        </div>
        <div className="my-space-xs flex items-baseline gap-space-sm">
          <span className="text-[28px] leading-[36px] font-bold text-primary">+12</span>
          <span className="text-[11px] text-secondary font-semibold">Netto Dinamika</span>
        </div>
        <div className="grid grid-cols-4 gap-1 text-center bg-surface-container-low p-1 rounded-lg">
          {[
            { l: 'Lahir', v: '+8', c: 'text-primary' },
            { l: 'Wafat', v: '-3', c: 'text-error' },
            { l: 'Masuk', v: '+12', c: 'text-primary' },
            { l: 'Keluar', v: '-5', c: 'text-error' },
          ].map((m) => (
            <div key={m.l} className="bg-surface-container-lowest rounded py-0.5">
              <span className="block text-[10px] font-semibold text-on-surface-variant">{m.l}</span>
              <span className={`font-mono-tabular text-[11px] font-semibold ${m.c}`}>{m.v}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col justify-between">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-semibold text-on-surface-variant uppercase tracking-wider">Warga Rentan &amp; Bansos</span>
          <span className="p-space-xs rounded-lg bg-surface-variant text-on-surface flex items-center justify-center">
            <span className="material-symbols-outlined text-[18px]">shield_with_heart</span>
          </span>
        </div>
        <div className="my-space-xs">
          <div className="text-[28px] leading-[36px] font-bold text-on-surface">214 <span className="text-[16px] font-normal text-on-surface-variant">Jiwa Terdata</span></div>
        </div>
        <div className="flex items-center justify-between pt-space-xs bg-surface-container-low px-space-sm py-1 rounded-lg font-mono-tabular text-[11px] text-on-surface">
          <span>Pra-Sej: <b className="text-tertiary">118</b></span>
          <span>•</span>
          <span>Lansia: <b className="text-primary">64</b></span>
          <span>•</span>
          <span>Difabel: <b className="text-secondary">32</b></span>
        </div>
      </div>
    </div>
  );
}
