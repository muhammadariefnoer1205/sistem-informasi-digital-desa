import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import RequireAuth from './components/RequireAuth';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import KependudukanPage from './pages/KependudukanPage';
import LayananWargaPage from './pages/LayananWargaPage';
import TransparansiPortalPage from './pages/TransparansiPortalPage';
import KeamananAuditPage from './pages/KeamananAuditPage';

function App() {
  return (
    <HashRouter>
      <AuthProvider>
        <Routes>
          {/* Halaman publik (auth) */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

          {/* Semua halaman aplikasi WAJIB login */}
          <Route element={<RequireAuth />}>
            <Route path="/" element={<KependudukanPage />} />
            <Route path="/Layanan-Warga" element={<LayananWargaPage />} />
            <Route path="/Transparansi-&-Portal" element={<TransparansiPortalPage />} />
            <Route path="/Keamanan-Audit" element={<KeamananAuditPage />} />
            <Route path="/Keamanan-&-Audit-Trail" element={<KeamananAuditPage />} />
          </Route>

          {/* Rute tidak dikenal: lempar ke beranda (yang dijaga auth) */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AuthProvider>
    </HashRouter>
  );
}

export default App;


