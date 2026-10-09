import { Link } from 'react-router-dom';
import { BERITA_UTAMA, AGENDA } from '../../data/transparansi2';

export default function PengumumanPanel() {
  return (
    <div className="lg:col-span-8 bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col justify-between gap-space-md">
      <div>
        <div className="flex items-center justify-between mb-space-md flex-wrap gap-space-xs">
          <div className="flex items-center gap-space-xs">
            <span className="material-symbols-outlined text-primary text-[24px]">campaign</span>
            <h2 className="text-[22px] font-bold text-on-surface">Pengumuman &amp; Agenda Resmi Desa</h2>
          </div>
          <span className="px-space-sm py-1 rounded bg-surface-container text-primary text-[11px] font-semibold">Siaran Terkini</span>
        </div>
        <div className="bg-surface-container-low rounded-xl overflow-hidden flex flex-col md:flex-row gap-space-md p-space-md items-center">
          <img className="w-full md:w-56 h-40 object-cover rounded-lg shrink-0" alt="Forum warga Balai Desa" src={BERITA_UTAMA.foto} />
          <div className="flex flex-col gap-space-xs">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-primary text-on-primary uppercase">{BERITA_UTAMA.badge}</span>
              <span className="text-on-surface-variant font-mono-tabular text-[11px]">{BERITA_UTAMA.tanggal}</span>
            </div>
            <h3 className="text-[18px] font-bold text-on-surface leading-snug">{BERITA_UTAMA.judul}</h3>
            <p className="text-[12px] text-on-surface-variant">{BERITA_UTAMA.isi}</p>
          </div>
        </div>
        <div className="mt-space-md flex flex-col gap-space-xs">
          {AGENDA.map((a) => (
            <div key={a.judul} className="flex items-center justify-between gap-space-sm p-space-sm rounded-lg hover:bg-surface-container-low transition-colors flex-wrap">
              <div className="flex items-center gap-space-sm">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold font-mono-tabular text-[11px] ${a.box}`}>{a.tgl}</div>
                <div>
                  <div className="text-[13px] font-bold text-on-surface">{a.judul}</div>
                  <div className="text-[12px] text-on-surface-variant">{a.desc}</div>
                </div>
              </div>
              <span className="text-[11px] text-primary font-semibold">{a.jam}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="pt-space-sm flex justify-between items-center gap-space-sm text-on-surface-variant text-[12px] flex-wrap">
        <span>Ada aduan atau aspirasi warga?</span>
        <Link to="/Layanan-Warga" className="text-primary font-semibold hover:underline flex items-center gap-1 text-[13px]">
          Kirim Aspirasi / Lapor Kades <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
        </Link>
      </div>
    </div>
  );
}
