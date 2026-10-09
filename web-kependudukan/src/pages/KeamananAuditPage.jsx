import { useMemo, useState } from 'react';
import KeamananBanner from '../components/keamanan/KeamananBanner';
import SecurityMetrics from '../components/keamanan/SecurityMetrics';
import RbacTable from '../components/keamanan/RbacTable';
import TteCard from '../components/keamanan/TteCard';
import AuditTable from '../components/keamanan/AuditTable';
import DiffModal from '../components/keamanan/DiffModal';
import { AUDIT_EVENTS } from '../data/audit';

export default function KeamananAuditPage() {
  const [filter, setFilter] = useState('all');
  const [diff, setDiff] = useState(null);
  const [bannerNotice, setBannerNotice] = useState('');
  const [tableNotice, setTableNotice] = useState('');
  const [rbacNotice, setRbacNotice] = useState('');
  const [tteNotice, setTteNotice] = useState('');
  const [modalNotice, setModalNotice] = useState('');

  const rows = useMemo(
    () => (filter === 'all' ? AUDIT_EVENTS : AUDIT_EVENTS.filter((e) => e.kategori === filter)),
    [filter],
  );

  const handleForensik = (e) => {
    if (e.forensik?.type === 'diff' && e.diff) {
      setModalNotice('');
      setDiff(e.diff);
    } else if (e.forensik?.type === 'alert') {
      setTableNotice(e.forensik.msg);
    }
  };

  return (
    <div className="flex flex-col w-full gap-space-lg">
      <KeamananBanner
        notice={bannerNotice}
        onWorm={() => setBannerNotice('Log Audit Trail telah dikunci dalam snapshot WORM. Hash integritas diarsip ke server Pemkab.')}
        onTambah={() => setBannerNotice('Wizard registrasi perangkat desa baru dibuka dengan integrasi Google Authenticator / TOTP.')}
      />
      <SecurityMetrics />
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-space-lg items-start">
        <div className="xl:col-span-8 flex flex-col gap-space-md">
          <RbacTable
            notice={rbacNotice}
            onAudit={() => setRbacNotice('Audit kebijakan RBAC selesai: pemisahan tugas dan isolasi spasial tervalidasi.')}
          />
        </div>
        <div className="xl:col-span-4 flex flex-col gap-space-md">
          <TteCard
            notice={tteNotice}
            onUji={() => setTteNotice('Uji validitas: hash SHA-256 cocok, sertifikat BSrE valid hingga 14 Nov 2026.')}
            onSync={() => setTteNotice('Sertifikat TTE disinkronkan ulang via OCSP. Status tetap Valid.')}
          />
        </div>
      </div>
      <AuditTable
        rows={rows}
        filter={filter}
        setFilter={setFilter}
        notice={tableNotice}
        onAction={handleForensik}
        onLock={() => setTableNotice('Log WORM dikunci: snapshot Merkle-root diarsip dan tidak dapat diubah.')}
      />
      <DiffModal
        diff={diff}
        notice={modalNotice}
        onClose={() => setDiff(null)}
        onUnduh={() => setModalNotice('Berita Acara Perubahan disiapkan untuk diunduh (PDF).')}
      />
    </div>
  );
}
