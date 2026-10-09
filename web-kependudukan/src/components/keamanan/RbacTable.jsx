import { RBAC_ROLES } from '../../data/keamanan';

export default function RbacTable({ notice, onAudit }) {
  return (
    <div className="bg-surface-container-lowest rounded-xl shadow-sm p-space-lg">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-space-md gap-space-sm">
        <div>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-[22px]">manage_accounts</span>
            <h2 className="text-[18px] font-semibold text-on-surface">Matriks Hak Akses Peran (RBAC)</h2>
          </div>
          <p className="text-[12px] text-on-surface-variant mt-0.5">
            Kebijakan pemisahan tugas (Separation of Duty) &amp; perbatasan wilayah spasial aparatur desa.
          </p>
        </div>
        <span className="px-2.5 py-1 rounded bg-surface-container text-[11px] font-semibold text-primary self-start sm:self-auto">
          Multi-Faktor (2FA TOTP): Wajib Perangkat
        </span>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[860px]">
          <thead>
            <tr className="bg-surface-container/60 text-on-surface-variant text-[11px] font-semibold">
              <th className="py-3 px-3 rounded-l-lg">Jabatan &amp; Peran Sistem</th>
              <th className="py-3 px-3">Cakupan Data Spasial</th>
              <th className="py-3 px-3">CRUD Kependudukan</th>
              <th className="py-3 px-3">Validasi &amp; TTE Dokumen</th>
              <th className="py-3 px-3">Audit Trail / Log</th>
              <th className="py-3 px-3 rounded-r-lg text-right">Status Akun</th>
            </tr>
          </thead>
          <tbody className="text-on-surface text-[12px]">
            {RBAC_ROLES.map((r) => (
              <tr key={r.jabatan} className={`hover:bg-surface-container-high/30 transition-colors ${r.striped ? 'bg-surface-container-low/30' : ''}`}>
                <td className="py-3.5 px-3">
                  <div className={`text-[13px] font-semibold ${r.jabatanCls}`}>{r.jabatan}</div>
                  <div className="text-[11px] text-on-surface-variant font-mono-tabular">{r.role}</div>
                </td>
                <td className="py-3.5 px-3">
                  <span className={`px-2 py-0.5 rounded text-[11px] ${r.spasialCls}`}>{r.spasial}</span>
                </td>
                <td className="py-3.5 px-3">
                  <div className={`inline-flex items-center gap-1 ${r.crud.cls}`}>
                    {r.crud.icon && <span className={`material-symbols-outlined text-[16px] ${r.crud.iconCls}`}>{r.crud.icon}</span>}
                    <span>{r.crud.label}</span>
                  </div>
                </td>
                <td className="py-3.5 px-3">
                  <div className={`inline-flex items-center gap-1 ${r.validasi.cls}`}>
                    {r.validasi.icon && <span className="material-symbols-outlined text-[16px]">{r.validasi.icon}</span>}
                    <span>{r.validasi.label}</span>
                  </div>
                </td>
                <td className="py-3.5 px-3"><span className={r.auditCls}>{r.audit}</span></td>
                <td className="py-3.5 px-3 text-right">
                  <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold ${r.statusCls}`}>
                    {r.dotCls && <span className={`w-1.5 h-1.5 rounded-full ${r.dotCls}`}></span>}
                    {r.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {notice && (
        <div className="mt-space-sm p-space-sm rounded-lg bg-surface-variant text-primary text-[13px] font-semibold flex items-center gap-2">
          <span className="material-symbols-outlined text-[18px]">check_circle</span>{notice}
        </div>
      )}
      <div className="mt-space-md p-space-md bg-surface-container-low rounded-xl flex items-center justify-between gap-space-md flex-wrap">
        <div className="flex items-center gap-space-sm">
          <span className="material-symbols-outlined text-primary text-[22px]">policy</span>
          <div className="text-[12px] text-on-surface">
            <strong className="font-semibold text-primary">Prinsip Least-Privilege Berjalan:</strong> Operator pelayanan tidak memiliki otoritas melihat log audit mutasi master ataupun mengubah parameter sistem KMS kriptografi.
          </div>
        </div>
        <button onClick={onAudit} className="px-space-md py-1.5 bg-primary text-on-primary rounded-lg text-[11px] font-semibold shrink-0 shadow-sm hover:bg-secondary transition-colors">
          Audit Kebijakan RBAC
        </button>
      </div>
    </div>
  );
}
