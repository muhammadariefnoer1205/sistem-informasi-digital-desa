export default function ApbdesCards({ data }) {
  const { pendapatan, belanja, silpa } = data;
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
      <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col justify-between">
        <div className="flex flex-col gap-space-xs">
          <div className="flex items-center justify-between">
            <span className="text-[11px] uppercase tracking-wider text-secondary font-semibold">1. Pendapatan Desa</span>
            <span className="px-space-xs py-0.5 rounded font-mono-tabular text-[11px] font-semibold bg-surface-container text-primary">{pendapatan.pct}</span>
          </div>
          <div className="font-mono-tabular text-[20px] font-semibold text-on-surface tracking-tight">{pendapatan.total}</div>
          <p className="text-[12px] text-on-surface-variant">{pendapatan.target}</p>
        </div>
        <div className="mt-space-md flex flex-col gap-space-xs pt-space-sm bg-surface-container-low/60 p-space-sm rounded-lg">
          {pendapatan.rincian.map((r) => (
            <div key={r.label} className="flex justify-between items-center text-on-surface-variant text-[12px]">
              <span>{r.label}</span>
              <span className="font-mono-tabular text-[11px] font-semibold text-on-surface">{r.nilai}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col justify-between">
        <div className="flex flex-col gap-space-xs">
          <div className="flex items-center justify-between">
            <span className="text-[11px] uppercase tracking-wider text-tertiary font-semibold">2. Belanja Desa</span>
            <span className="px-space-xs py-0.5 rounded font-mono-tabular text-[11px] font-semibold bg-tertiary-fixed text-on-tertiary-fixed">{belanja.pct}</span>
          </div>
          <div className="font-mono-tabular text-[20px] font-semibold text-on-surface tracking-tight">{belanja.total}</div>
          <p className="text-[12px] text-on-surface-variant">{belanja.target}</p>
        </div>
        <div className="mt-space-md flex flex-col gap-space-xs pt-space-sm bg-surface-container-low/60 p-space-sm rounded-lg">
          {belanja.rincian.map((r) => (
            <div key={r.label} className="flex justify-between items-center text-on-surface-variant text-[12px]">
              <span>{r.label}</span>
              <span className={`font-mono-tabular text-[11px] font-semibold ${r.highlight ? 'text-primary' : 'text-on-surface'}`}>{r.nilai}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col justify-between">
        <div className="flex flex-col gap-space-xs">
          <div className="flex items-center justify-between">
            <span className="text-[11px] uppercase tracking-wider text-primary font-semibold">3. Pembiayaan / SiLPA Netto</span>
            <span className="px-space-xs py-0.5 rounded font-mono-tabular text-[11px] font-semibold bg-surface-container-highest text-primary">Tertutup Rapi</span>
          </div>
          <div className="font-mono-tabular text-[20px] font-semibold text-on-surface tracking-tight">{silpa.total}</div>
          <p className="text-[12px] text-on-surface-variant">{silpa.desc}</p>
        </div>
        <div className="mt-space-md flex flex-col gap-space-sm bg-surface-container-low/60 p-space-sm rounded-lg">
          <div className="flex justify-between text-on-surface-variant text-[12px]">
            <span>Rasio Kinerja Penyerapan</span>
            <span className="font-bold text-primary">Optimal (Tepat Waktu)</span>
          </div>
          <div className="w-full h-3 rounded-full bg-surface-variant overflow-hidden flex">
            <div className="h-full bg-primary" style={{ width: `${silpa.terserap}%` }}></div>
            <div className="h-full bg-tertiary-fixed-dim" style={{ width: `${silpa.sisa}%` }}></div>
          </div>
          <div className="flex justify-between text-[11px] font-mono-tabular text-on-surface-variant">
            <span>{silpa.terserap}% Terbelanja</span>
            <span>{silpa.sisaLabel}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
