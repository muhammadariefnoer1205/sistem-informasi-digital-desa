import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import SubHeader from '../components/SubHeader';

export default function AppLayout({ children }) {
  return (
    <div className="bg-background text-on-surface min-h-screen">
      <Sidebar />
      <div className="pl-0 lg:pl-64">
        <Header />
        <div className="pt-16">
          <SubHeader />
          <main className="w-full px-space-lg py-space-md bg-background">{children}</main>
        </div>
      </div>
    </div>
  );
}
