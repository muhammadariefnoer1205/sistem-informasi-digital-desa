import { WargaRow } from './WargaTable';

export default function RegistryTable({ rows, masked, onToggleMask, loading, source, total, onDetail, onEdit, onPrint, onMutasi }) {
  return (
    <div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden flex flex-col">
      <div className="px-space-md py-space-sm bg-surface-container-low flex flex-wrap items-center justify-between gap-space-sm">
        <div className="flex items-center gap-space-sm flex-wrap">
          <span className="material-symbols-outlined text-primary text-[20px]">badge</span>
          <span className="text-[18px] font-semibold text-on-surface">Buku Induk Kependudukan Desa (Master Registry)</span>
          <span className="bg-surface-container text-primary font-mono-tabular text-[11px] px-2 py-0.5 rounded-full">
            Record Aktif: {total ?? rows.length}{source === 'supabase' ? ' • Supabase' : source === 'local' ? ' • Lokal' : ''}
          </span>
        </div>
        <div className="flex items-center gap-space-sm flex-wrap">
          <button onClick={onToggleMask} className="flex items-center gap-1 px-space-sm py-1 rounded-lg bg-surface-container-lowest text-on-surface-variant hover:text-on-surface text-[11px] font-semibold shadow-sm transition-colors">
            <span className="material-symbols-outlined text-[16px]">{masked ? 'visibility_off' : 'visibility'}</span>
            <span>{masked ? 'Sensor NIK/KK Aktif' : 'Sensor Dimatikan'}</span>
          </button>
          <span className="text-on-surface-variant text-[11px] font-semibold">
            {loading ? 'Memuat dari Supabase…' : `Menampilkan ${rows.length} dari ${total ?? rows.length}`}
          </span>
        </div>
      </div>
      <div className="overflow-x-auto w-full">
        <table className="w-full text-left min-w-[1100px]">
          <thead>
            <tr className="bg-surface-container text-on-surface text-[11px] font-semibold uppercase tracking-wider">
              <th className="py-space-sm px-space-md">Identitas (NIK &amp; KK)</th>
              <th className="py-space-sm px-space-md">Nama Lengkap &amp; Dusun</th>
              <th className="py-space-sm px-space-md">Kelahiran / Usia</th>
              <th className="py-space-sm px-space-md">Agama / Pend. / Gol</th>
              <th className="py-space-sm px-space-md">Status Sipil</th>
              <th className="py-space-sm px-space-md">Klasifikasi Khusus</th>
              <th className="py-space-sm px-space-md">Mutasi</th>
              <th className="py-space-sm px-space-md text-center">Menu Aksi</th>
            </tr>
          </thead>
          <tbody className="text-on-surface text-[12px]">
            {loading && (
              <tr><td colSpan={8} className="py-space-lg px-space-md text-center text-on-surface-variant">Memuat data warga dari Supabase…</td></tr>
            )}
            {!loading && rows.map((w) => (<WargaRow key={w.id} w={w} masked={masked} onDetail={onDetail} onEdit={onEdit} onPrint={onPrint} onMutasi={onMutasi} />))}
            {!loading && rows.length === 0 && (
              <tr><td colSpan={8} className="py-space-lg px-space-md text-center text-on-surface-variant">Tidak ada warga yang cocok dengan pencarian / filter.</td></tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="px-space-md py-space-sm bg-surface-container-low flex flex-wrap items-center justify-between gap-space-sm">
        <div className="flex items-center gap-space-sm text-[12px] text-on-surface-variant">
          <span>Baris per halaman:</span>
          <select className="bg-surface-container-lowest px-2 py-1 rounded text-on-surface focus:outline-none">
            <option>10 Baris</option><option>25 Baris</option><option>50 Baris</option><option>100 Baris</option>
          </select>
        </div>
        <div className="flex items-center gap-1">
          <button className="px-2 py-1 rounded bg-surface-container-lowest text-on-surface-variant disabled:opacity-50" disabled><span className="material-symbols-outlined text-[18px]">chevron_left</span></button>
          <button className="px-3 py-1 rounded bg-primary-container text-on-primary text-[11px] font-semibold">1</button>
          <button className="px-3 py-1 rounded bg-surface-container-lowest text-on-surface hover:bg-surface-container text-[11px] font-semibold">2</button>
          <button className="px-3 py-1 rounded bg-surface-container-lowest text-on-surface hover:bg-surface-container text-[11px] font-semibold">3</button>
          <span className="px-2 text-on-surface-variant">...</span>
          <button className="px-3 py-1 rounded bg-surface-container-lowest text-on-surface hover:bg-surface-container text-[11px] font-semibold">343</button>
          <button className="px-2 py-1 rounded bg-surface-container-lowest text-on-surface-variant hover:text-on-surface"><span className="material-symbols-outlined text-[18px]">chevron_right</span></button>
        </div>
      </div>
    </div>
  );
}
