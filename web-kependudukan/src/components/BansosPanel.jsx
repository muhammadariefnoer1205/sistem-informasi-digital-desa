export default function BansosPanel() {
  return (
    <div className="lg:col-span-5 bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col justify-between">
      <div className="flex flex-col gap-space-sm">
        <div className="flex items-center justify-between flex-wrap gap-space-xs">
          <div className="flex items-center gap-space-xs">
            <span className="material-symbols-outlined text-secondary text-[20px]">volunteer_activism</span>
            <span className="text-[18px] font-semibold text-on-surface">Validasi Bantuan Sosial (DTKS)</span>
          </div>
          <span className="bg-surface-variant text-primary text-[11px] font-semibold px-2 py-0.5 rounded">Tepat Sasaran: 96,4%</span>
        </div>
        <div className="bg-surface-container-low p-space-sm rounded-lg flex flex-col gap-space-xs">
          <div className="flex items-center justify-between text-[11px] font-semibold flex-wrap gap-1">
            <span className="text-on-surface">Kemiskinan Ekstrem Terverifikasi Lapangan</span>
            <span className="font-mono-tabular font-semibold text-primary">118 / 122 KK (96,7%)</span>
          </div>
          <div className="w-full bg-surface-container h-2 rounded-full overflow-hidden">
            <div className="bg-primary h-full rounded-full" style={{ width: '96.7%' }}></div>
          </div>
          <span className="text-[11px] text-on-surface-variant">Sisa 4 KK dalam jadwal peninjauan musyawarah desa khusus (Musdesus).</span>
        </div>
        <div className="flex flex-col gap-space-xs">
          <span className="text-[11px] font-semibold text-on-surface-variant uppercase tracking-wider">Kuota Penyaluran Aktif TA 2024</span>
          <div className="grid grid-cols-2 gap-space-xs">
            <div className="p-space-sm rounded-lg bg-surface-container-low flex flex-col justify-between">
              <span className="text-[11px] font-semibold text-on-surface-variant">Program Keluarga Harapan</span>
              <div className="text-[18px] font-semibold text-primary mt-1">78 <span className="text-[12px] font-normal text-on-surface-variant">KPM</span></div>
              <span className="font-mono-tabular text-[11px] text-secondary font-medium">100% Tersalurkan Tahap 1</span>
            </div>
            <div className="p-space-sm rounded-lg bg-surface-container-low flex flex-col justify-between">
              <span className="text-[11px] font-semibold text-on-surface-variant">BLT Dana Desa (APBDes)</span>
              <div className="text-[18px] font-semibold text-tertiary mt-1">32 <span className="text-[12px] font-normal text-on-surface-variant">KPM</span></div>
              <span className="font-mono-tabular text-[11px] text-on-surface-variant">Rp 300.000 / Bulan / KPM</span>
            </div>
          </div>
        </div>
        <div className="p-space-sm rounded-lg bg-error-container/40 flex items-start gap-space-sm">
          <span className="material-symbols-outlined text-error text-[20px] shrink-0 mt-0.5">warning</span>
          <div className="flex flex-col">
            <span className="text-[11px] text-on-error-container font-semibold">2 Peringatan Data Ganda Bansos Ditemukan</span>
            <span className="text-[12px] text-on-error-container">NIK 330214****0088 tercatat ganda pada usulan PKH Kemensos dan BLT-DD. Perlu penghapusan di Musdesus.</span>
          </div>
        </div>
      </div>
      <div className="pt-space-sm">
        <button className="w-full flex items-center justify-center gap-1 py-2 rounded-lg bg-surface-container-high hover:bg-surface-variant text-primary text-[13px] font-semibold transition-colors shadow-sm">
          <span className="material-symbols-outlined text-[18px]">fact_check</span>
          <span>Buka Modul Musdesus &amp; Audit Bansos</span>
        </button>
      </div>
    </div>
  );
}
