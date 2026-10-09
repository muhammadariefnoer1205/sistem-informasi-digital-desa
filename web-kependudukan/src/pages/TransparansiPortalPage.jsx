import { useState } from 'react';
import TransparansiBanner from '../components/transparansi/TransparansiBanner';
import ApbdesCards from '../components/transparansi/ApbdesCards';
import SektorBelanja from '../components/transparansi/SektorBelanja';
import ProyekTable from '../components/transparansi/ProyekTable';
import GisSection from '../components/transparansi/GisSection';
import DemografiSection from '../components/transparansi/DemografiSection';
import PengumumanPanel from '../components/transparansi/PengumumanPanel';
import DokumenPanel from '../components/transparansi/DokumenPanel';
import { APBDES } from '../data/transparansi';

export default function TransparansiPortalPage() {
  const [tahun, setTahun] = useState('2024');
  const data = APBDES[tahun];
  return (
    <div className="flex flex-col w-full gap-space-lg">
      <TransparansiBanner tahun={tahun} setTahun={setTahun} />

      <section className="flex flex-col gap-space-md">
        <div className="flex items-center justify-between flex-wrap gap-space-xs">
          <div className="flex items-center gap-space-xs">
            <span className="material-symbols-outlined text-primary text-[24px]">account_balance</span>
            <h2 className="text-[22px] font-bold text-on-surface">Papan Transparansi APBDes Real-Time TA {tahun}</h2>
          </div>
          <div className="flex items-center gap-space-xs text-on-surface-variant text-[11px] font-semibold">
            <span className="inline-block w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span>{data.sinkron}</span>
          </div>
        </div>
        <ApbdesCards data={data} />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-md">
          <SektorBelanja />
          <ProyekTable tahun={tahun} />
        </div>
      </section>

      <GisSection />
      <DemografiSection />

      <section className="grid grid-cols-1 lg:grid-cols-12 gap-space-md">
        <PengumumanPanel />
        <DokumenPanel />
      </section>

      <footer className="pt-space-md pb-space-lg flex flex-col sm:flex-row items-center justify-between gap-space-sm text-on-surface-variant text-[11px] font-semibold">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-primary"></span>
          <span>Pemerintah Desa Sukamaju • Kecamatan Cimaung • Kabupaten Bandung</span>
        </div>
        <div className="flex items-center gap-space-md">
          <span>Standar Satu Data Indonesia</span>
          <span>•</span>
          <span>Dikelola oleh Tim PPID Desa</span>
        </div>
      </footer>
    </div>
  );
}
