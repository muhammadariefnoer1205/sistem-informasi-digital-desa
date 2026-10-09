import { PROYEK_FISIK } from '../../data/transparansi';

export default function ProyekTable({ tahun }) {
  return (
    <div className="lg:col-span-7 bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-space-sm">
          <div>
            <h3 className="text-[18px] font-bold text-on-surface">Daftar Proyek Fisik &amp; Bantuan Langsung</h3>
            <p className="text-[12px] text-on-surface-variant">Laporan lapangan berkala dengan pelibatan Padat Karya Tunai (PKT).</p>
          </div>
          <span className="px-space-sm py-1 rounded bg-surface-container text-primary text-[11px] font-semibold">Tahun {tahun}</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-[12px] min-w-[560px]">
            <thead className="bg-surface-container-low text-on-surface-variant text-[11px] font-semibold uppercase">
              <tr>
                <th className="py-2.5 px-3 rounded-l-lg">Kegiatan &amp; Lokasi</th>
                <th className="py-2.5 px-3">Anggaran</th>
                <th className="py-2.5 px-3">Sumber Dana</th>
                <th className="py-2.5 px-3">Progres</th>
                <th className="py-2.5 px-3 rounded-r-lg text-right">Status</th>
              </tr>
            </thead>
            <tbody>
              {PROYEK_FISIK.map((p) => (
                <tr key={p.nama} className="hover:bg-surface-container/50 transition-colors">
                  <td className="py-3 px-3">
                    <div className="font-semibold text-on-surface">{p.nama}</div>
                    <div className="text-[11px] text-on-surface-variant">{p.lokasi}</div>
                  </td>
                  <td className="py-3 px-3 font-mono-tabular text-[11px] font-medium">{p.anggaran}</td>
                  <td className="py-3 px-3"><span className={`px-1.5 py-0.5 rounded text-[11px] font-semibold ${p.sumberCls}`}>{p.sumber}</span></td>
                  <td className="py-3 px-3 font-mono-tabular text-[11px]">{p.progres}</td>
                  <td className="py-3 px-3 text-right">
                    <span className={`inline-flex items-center gap-1 text-[11px] font-bold bg-surface-container px-2 py-0.5 rounded-full ${p.statusCls}`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${p.dotCls}`}></span> {p.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="pt-space-sm flex justify-end">
        <button className="text-primary hover:text-secondary text-[13px] font-semibold flex items-center gap-1">
          Lihat Seluruh 24 Rincian Kegiatan Fisik
          <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
        </button>
      </div>
    </div>
  );
}
