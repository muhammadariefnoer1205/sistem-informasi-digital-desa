import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import AppLayout from './AppLayout';
import LoadingScreen from './LoadingScreen';

// Penjaga rute: semua halaman di dalamnya hanya bisa diakses bila sudah login.
// Saat memeriksa sesi tampilkan loading; bila belum login alihkan ke /login
// sambil menyimpan halaman asal agar bisa dikembalikan setelah login.
export default function RequireAuth() {
  const { session, loading } = useAuth();
  const location = useLocation();

  if (loading) return <LoadingScreen />;
  if (!session) return <Navigate to="/login" replace state={{ from: location.pathname }} />;

  return (
    <AppLayout>
      <Outlet />
    </AppLayout>
  );
}
