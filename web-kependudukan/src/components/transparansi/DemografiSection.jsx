import UsiaCard from './UsiaCard';
import PekerjaanCard from './PekerjaanCard';
import PendidikanCard from './PendidikanCard';

export default function DemografiSection() {
  return (
    <section className="flex flex-col gap-space-md">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-xs">
        <div>
          <div className="flex items-center gap-space-xs">
            <span className="material-symbols-outlined text-primary text-[24px]">analytics</span>
            <h2 className="text-[22px] font-bold text-on-surface">Infografis Demografi Agregat Warga</h2>
          </div>
          <p className="text-[12px] text-on-surface-variant">Statistik kependudukan riil tanpa membuka NIK atau privasi individual (Patuh UU No. 27/2022 PDP).</p>
        </div>
        <div className="flex items-center gap-space-sm flex-wrap">
          <div className="bg-surface-container-lowest px-space-md py-1.5 rounded-lg shadow-sm flex items-center gap-2">
            <span className="text-[12px] text-on-surface-variant">Total Penduduk:</span>
            <span className="font-mono-tabular text-[13px] font-bold text-primary">4.892 Jiwa</span>
          </div>
          <div className="bg-surface-container-lowest px-space-md py-1.5 rounded-lg shadow-sm flex items-center gap-2">
            <span className="text-[12px] text-on-surface-variant">Kepala Keluarga:</span>
            <span className="font-mono-tabular text-[13px] font-bold text-on-surface">1.412 KK</span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-md">
        <UsiaCard />
        <PekerjaanCard />
        <PendidikanCard />
      </div>
    </section>
  );
}
