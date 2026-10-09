import WargaBanner from '../components/layanan/WargaBanner';
import SuratTracker from '../components/layanan/SuratTracker';
import SuratCatalog from '../components/layanan/SuratCatalog';
import AspirasiPanel from '../components/layanan/AspirasiPanel';
import PembaruanData from '../components/layanan/PembaruanData';

export default function LayananWargaPage() {
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col gap-space-lg w-full max-w-[1520px] mx-auto pb-space-xl">
        <WargaBanner />
        <SuratTracker />
        <SuratCatalog />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg">
          <AspirasiPanel />
          <PembaruanData />
        </div>
      </div>
    </div>
  );
}
