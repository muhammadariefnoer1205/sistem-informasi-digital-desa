import { useMemo, useState } from 'react';
import StatsGrid from '../components/StatsGrid';
import Toolbar from '../components/Toolbar';
import RegistryTable from '../components/RegistryTable';
import BukuMutasi from '../components/BukuMutasi';
import BansosPanel from '../components/BansosPanel';
import { WARGAS } from '../data/warga';

export default function KependudukanPage() {
  const [query, setQuery] = useState('');
  const [dusun, setDusun] = useState('all');
  const [rw, setRw] = useState('all');
  const [category, setCategory] = useState('semua');
  const [masked, setMasked] = useState(true);

  const rows = useMemo(() => {
    const q = query.toLowerCase().trim();
    return WARGAS.filter((w) => {
      if (dusun !== 'all' && w.dusun !== dusun) return false;
      if (rw !== 'all' && w.rw !== rw) return false;
      if (category === 'bansos' && w.kategori !== 'bansos') return false;
      if (category === 'lansia' && w.kategori !== 'lansia') return false;
      if (category === 'disabilitas' && w.kategori !== 'disabilitas') return false;
      if (category === 'mutasi' && w.kategori !== 'mutasi') return false;
      if (!q) return true;
      const hay = `${w.nik} ${w.kk} ${w.nama} ${w.alamat}`.toLowerCase();
      return hay.includes(q);
    });
  }, [query, dusun, rw, category]);

  return (
    <div className="flex flex-col w-full gap-space-lg">
      <StatsGrid />
      <Toolbar
        query={query} setQuery={setQuery}
        dusun={dusun} setDusun={setDusun}
        rw={rw} setRw={setRw}
        category={category} setCategory={setCategory}
      />
      <RegistryTable rows={rows} masked={masked} onToggleMask={() => setMasked((m) => !m)} />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-md">
        <BukuMutasi />
        <BansosPanel />
      </div>
    </div>
  );
}
