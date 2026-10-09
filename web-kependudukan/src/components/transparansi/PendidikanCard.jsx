import { PENDIDIKAN } from '../../data/transparansi2';

export default function PendidikanCard() {
  return (
    <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col justify-between gap-space-md">
      <div>
        <div className="flex items-center justify-between mb-space-xs">
          <span className="text-[18px] font-bold text-on-surface">Pendidikan &amp; Rasio Gender</span>
          <span className="material-symbols-outlined text-on-surface-variant text-[20px]">school</span>
        </div>
        <p className="text-[12px] text-on-surface-variant">Perbandingan rasio jenis kelamin dan jenjang pendidikan formal.</p>
      </div>
      <div className="flex flex-col gap-space-xs">
        <div className="flex justify-between text-[13px] font-semibold flex-wrap gap-1">
          <span className="flex items-center gap-1 text-primary"><span className="material-symbols-outlined text-[16px]">male</span> Laki-laki: 2.480 (50.7%)</span>
          <span className="flex items-center gap-1 text-tertiary"><span className="material-symbols-outlined text-[16px]">female</span> Perempuan: 2.412 (49.3%)</span>
        </div>
        <div className="w-full h-3 rounded-full overflow-hidden flex">
          <div className="h-full bg-primary" style={{ width: '50.7%' }}></div>
          <div className="h-full bg-tertiary-fixed-dim" style={{ width: '49.3%' }}></div>
        </div>
      </div>
      <div className="flex flex-col gap-1.5 pt-space-xs">
        {PENDIDIKAN.map((p) => (
          <div key={p.label} className="flex justify-between items-center text-[12px]">
            <span className="text-on-surface-variant">{p.label}</span>
            <span className="font-mono-tabular text-[11px] font-bold text-on-surface">{p.nilai}</span>
          </div>
        ))}
      </div>
      <div className="p-space-sm bg-surface-container-low rounded-lg text-[11px] text-on-surface-variant flex items-center gap-2">
        <span className="material-symbols-outlined text-secondary text-[18px]">policy</span>
        <span>Data diagregasi real-time. NIK dan nama warga dirahasiakan otomatis.</span>
      </div>
    </div>
  );
}
