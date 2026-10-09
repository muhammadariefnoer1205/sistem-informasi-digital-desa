import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import AppLayout from './components/AppLayout';
import KependudukanPage from './pages/KependudukanPage';
import LayananWargaPage from './pages/LayananWargaPage';
import TransparansiPortalPage from './pages/TransparansiPortalPage';
import KeamananAuditPage from './pages/KeamananAuditPage';

function ComingSoon({ title }) {
  return (
    <div className="w-full bg-surface-container-lowest rounded-xl shadow-sm p-space-lg flex flex-col gap-space-sm">
      <span className="text-[11px] uppercase tracking-wider text-primary font-bold">Modul SatuDesa</span>
      <h1 className="text-[22px] font-semibold text-on-surface">{title}</h1>
      <p className="text-[14px] text-on-surface-variant">Halaman ini mengikuti desain berikutnya. Navigasi kembali tersedia melalui sidebar.</p>
    </div>
  );
}

function App() {
  return (
    <HashRouter>
      <AppLayout>
        <Routes>
          <Route path="/" element={<KependudukanPage />} />
          <Route path="/Layanan-Warga" element={<LayananWargaPage />} />
          <Route path="/Transparansi-&-Portal" element={<TransparansiPortalPage />} />
          <Route path="/Keamanan-Audit" element={<KeamananAuditPage />} />
          <Route path="/Keamanan-&-Audit-Trail" element={<KeamananAuditPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AppLayout>
    </HashRouter>
  );
}

export default App;


