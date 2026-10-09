import AuditRow from './AuditRow';
import { AUDIT_FILTERS } from '../../data/audit';

export default function AuditTable({ rows, filter, setFilter, notice, onAction, onLock }) {
  return (
    <div className="bg-surface-container-lowest rounded-xl shadow-sm p-space-lg flex flex-col gap-space-md">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md pb-space-xs">
        <div>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-[22px]">history_edu</span>
            <h2 className="text-[18px] font-semibold text-on-surface">Audit Trail &amp; Forensik Mutasi Data Real-Time</h2>
          </div>
          <p className="text-[12px] text-on-surface-variant mt-0.5">
            Pencatatan tak terhapuskan (Immutable Log) untuk mematuhi kewajiban audit pemrosesan data pribadi penduduk.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-space-xs">
          <div className="flex items-center bg-surface-container-low rounded-lg px-2.5 py-1.5 gap-1.5">
            <span className="material-symbols-outlined text-on-surface-variant text-[16px]">filter_list</span>
            <select value={filter} onChange={(e) => setFilter(e.target.value)} className="bg-transparent text-on-surface text-[11px] font-semibold focus:outline-none cursor-pointer">
              {AUDIT_FILTERS.map((f) => (<option key={f.id} value={f.id}>{f.label}</option>))}
            </select>
          </div>
          <button onClick={() => onAction({ forensik: { type: 'diff' }, diff: rows[0]?.diff })} className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-surface-container text-primary text-[11px] font-semibold hover:bg-surface-container-high transition-colors">
            <span className="material-symbols-outlined text-[16px]">difference</span>
            <span>Bandingkan Diff (Old vs New)</span>
          </button>
          <button onClick={onLock} className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-primary text-on-primary text-[11px] font-semibold hover:bg-secondary transition-colors">
            <span className="material-symbols-outlined text-[16px]">lock_reset</span>
            <span>Kunci Log WORM</span>
          </button>
        </div>
      </div>
      {notice && (
        <div className="p-space-sm rounded-lg bg-surface-variant text-primary text-[13px] font-semibold flex items-center gap-2">
          <span className="material-symbols-outlined text-[18px]">check_circle</span>{notice}
        </div>
      )}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[1000px]">
          <thead>
            <tr className="bg-surface-container/60 text-on-surface-variant text-[11px] font-semibold">
              <th className="py-3 px-3 rounded-l-lg">Timestamp Presisi</th>
              <th className="py-3 px-3">Operator &amp; Peran</th>
              <th className="py-3 px-3">Terminal &amp; Alamat IP</th>
              <th className="py-3 px-3">Deskripsi Aksi / Mutasi Terinci</th>
              <th className="py-3 px-3">Tingkat Risiko</th>
              <th className="py-3 px-3 rounded-r-lg text-right">Forensik Diff</th>
            </tr>
          </thead>
          <tbody className="text-[12px] text-on-surface">
            {rows.map((e) => (<AuditRow key={e.id} e={e} onAction={onAction} />))}
            {rows.length === 0 && (
              <tr><td colSpan={6} className="py-space-lg px-3 text-center text-on-surface-variant">Tidak ada event pada kategori risiko ini.</td></tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm pt-space-xs text-on-surface-variant text-[12px]">
        <div className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-primary"></span>
          <span>Menampilkan {rows.length} dari 14.820 log transaksi (Filter: {AUDIT_FILTERS.find((f) => f.id === filter)?.label})</span>
        </div>
        <div className="flex items-center gap-space-xs text-[11px] font-semibold">
          <button className="px-3 py-1 rounded bg-surface-container text-on-surface-variant disabled:opacity-50" disabled>Sebelumnya</button>
          <span className="px-2.5 py-1 rounded bg-primary text-on-primary font-semibold">1</span>
          <button className="px-2.5 py-1 rounded bg-surface-container text-on-surface-variant hover:bg-surface-container-high transition-colors">2</button>
          <button className="px-2.5 py-1 rounded bg-surface-container text-on-surface-variant hover:bg-surface-container-high transition-colors">3</button>
          <span className="px-1 text-on-surface-variant">•••</span>
          <button className="px-2.5 py-1 rounded bg-surface-container text-on-surface-variant hover:bg-surface-container-high transition-colors">371</button>
          <button className="px-3 py-1 rounded bg-surface-container text-on-surface hover:bg-surface-container-high transition-colors">Berikutnya</button>
        </div>
      </div>
    </div>
  );
}
