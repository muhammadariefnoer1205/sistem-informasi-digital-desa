import { useState } from 'react';
import AspirasiFormFields from './AspirasiFormFields';
import RiwayatLaporan from './RiwayatLaporan';

export default function AspirasiPanel() {
  const [sent, setSent] = useState(null);
  return (
    <section className="lg:col-span-7 bg-surface-container-lowest rounded-xl shadow-sm p-space-lg flex flex-col gap-space-md" id="kotak-aspirasi">
      <div className="flex items-center justify-between flex-wrap gap-space-xs">
        <div>
          <span className="text-[11px] uppercase tracking-wider text-primary font-bold">Partisipasi Warga</span>
          <h2 className="text-[22px] font-semibold text-on-surface">Kotak Aspirasi &amp; Pengaduan</h2>
        </div>
        <span className="px-2.5 py-1 rounded-full bg-surface-container text-primary text-[11px] font-semibold flex items-center gap-1">
          <span className="material-symbols-outlined text-[16px]">support_agent</span> Respon Cepat &lt; 24 Jam
        </span>
      </div>
      {sent !== null && (
        <div className="p-space-sm rounded-lg bg-surface-variant text-primary text-[13px] font-semibold flex items-center gap-2">
          <span className="material-symbols-outlined text-[18px]">check_circle</span>
          Aspirasi berhasil dikirim ke Command Center Desa Sukamaju{sent ? ' secara anonim' : ''}.
        </div>
      )}
      <AspirasiFormFields onSent={setSent} />
      <RiwayatLaporan />
    </section>
  );
}
