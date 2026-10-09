import { SEKTOR_BELANJA } from '../../data/transparansi';

export default function SektorBelanja() {
  return (
    <div className="lg:col-span-5 bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col justify-between">
      <div className="flex flex-col gap-space-xs">
        <h3 className="text-[18px] font-bold text-on-surface">Distribusi Belanja Berdasarkan Sektor</h3>
        <p className="text-[12px] text-on-surface-variant">Persentase alokasi dana untuk 5 pilar pembangunan desa mandiri.</p>
      </div>
      <div className="my-space-md flex flex-col gap-space-sm">
        {SEKTOR_BELANJA.map((s) => (
          <div key={s.label} className="flex flex-col gap-1">
            <div className="flex justify-between text-[13px] font-semibold text-on-surface">
              <span>{s.label}</span>
              <span className={`font-mono-tabular text-[13px] font-bold ${s.text}`}>{s.pct}%</span>
            </div>
            <div className="w-full h-2 rounded-full bg-surface-container">
              <div className={`h-full rounded-full ${s.bar}`} style={{ width: `${s.pct}%` }}></div>
            </div>
          </div>
        ))}
      </div>
      <div className="pt-space-sm flex items-center justify-between text-on-surface-variant text-[11px] font-semibold bg-surface-container-low px-space-md py-space-xs rounded-lg">
        <span>Standar Permendagri No. 20/2018</span>
        <span className="text-primary font-semibold">Status: Patuh Regulasi</span>
      </div>
    </div>
  );
}
