import { TRACKER_STEPS } from '../../data/layanan';

function StepCircle({ step }) {
  if (step.state === 'done') {
    return (
      <div className="w-9 h-9 rounded-full bg-primary text-on-primary flex items-center justify-center shadow-sm">
        <span className="material-symbols-outlined text-[18px]">{step.icon}</span>
      </div>
    );
  }
  if (step.state === 'active') {
    return (
      <div className="w-9 h-9 rounded-full bg-primary-container text-on-primary flex items-center justify-center shadow-sm ring-4 ring-primary-fixed">
        <span className="material-symbols-outlined text-[18px]">{step.icon}</span>
      </div>
    );
  }
  return (
    <div className="w-9 h-9 rounded-full bg-surface-container-high text-on-surface-variant flex items-center justify-center">
      <span className="material-symbols-outlined text-[18px]">{step.icon}</span>
    </div>
  );
}

export default function SuratTracker() {
  return (
    <section className="w-full bg-surface-container-lowest rounded-xl shadow-sm p-space-lg flex flex-col gap-space-md" id="pelacak-surat">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm">
        <div className="flex items-center gap-space-sm">
          <div className="p-2.5 rounded-lg bg-surface-container text-primary">
            <span className="material-symbols-outlined text-[24px]">verified_user</span>
          </div>
          <div>
            <div className="flex items-center gap-space-xs">
              <span className="text-[11px] uppercase tracking-wide text-primary font-bold">Dokumen Terbitan Terkini</span>
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
            </div>
            <h2 className="text-[18px] font-semibold text-on-surface">Surat Keterangan Usaha (SKU) • Warung Sembako Berkah</h2>
          </div>
        </div>
        <span className="font-mono-tabular text-[13px] px-3 py-1 rounded-lg bg-surface-container-low text-on-surface-variant self-start sm:self-auto">
          No. Reg: 470/124/Desa/X/2024
        </span>
      </div>

      <div className="w-full bg-surface-container-low/60 rounded-xl p-space-md sm:p-space-lg">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-space-md relative">
          {TRACKER_STEPS.map((s, i) => (
            <div key={s.title} className="flex md:flex-col items-center md:items-start gap-space-sm relative">
              <div className="flex items-center gap-space-sm w-full">
                <StepCircle step={s} />
                {i < TRACKER_STEPS.length - 1 && (
                  <div className={`hidden md:block flex-1 h-1.5 rounded-full ${i < 2 ? 'bg-primary' : 'bg-surface-container-high'}`}></div>
                )}
              </div>
              <div className="flex flex-col">
                <span className={`text-[13px] ${s.state === 'active' ? 'text-on-surface font-bold' : s.state === 'done' ? 'text-on-surface font-semibold' : 'text-on-surface-variant font-semibold'}`}>{s.title}</span>
                <span className="font-mono-tabular text-[11px] text-on-surface-variant">{s.time}</span>
                <span className={`text-[12px] mt-0.5 ${s.state === 'todo' ? 'text-on-surface-variant' : 'text-primary font-medium'}`}>{s.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-between gap-space-md p-space-md rounded-xl bg-surface-container">
        <div className="flex items-center gap-space-md w-full lg:w-auto">
          <div className="w-12 h-12 rounded-lg bg-surface-container-lowest flex items-center justify-center text-primary shadow-sm flex-shrink-0">
            <span className="material-symbols-outlined text-[28px]">qr_code_2</span>
          </div>
          <div>
            <div className="text-[13px] font-semibold text-on-surface">Validasi Berbasis QR-Code Resmi</div>
            <div className="text-[12px] text-on-surface-variant">Dokumen terproteksi enkripsi kriptografi desa. Verifikasi keaslian dapat dipindai oleh instansi perbankan atau dinas terkait.</div>
          </div>
        </div>
        <div className="flex items-center gap-space-xs sm:gap-space-sm w-full lg:w-auto justify-end">
          <button className="px-space-md py-2 rounded-lg bg-surface-container-lowest text-on-surface text-[13px] font-semibold hover:bg-surface-container-high transition-colors shadow-sm flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[18px]">visibility</span>
            <span>Pratinjau Draf</span>
          </button>
          <button className="px-space-md py-2 rounded-lg bg-primary text-on-primary text-[13px] font-semibold hover:bg-secondary transition-colors shadow-sm flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[18px]">download</span>
            <span>Unduh E-Surat Resmi (PDF)</span>
          </button>
        </div>
      </div>
    </section>
  );
}
