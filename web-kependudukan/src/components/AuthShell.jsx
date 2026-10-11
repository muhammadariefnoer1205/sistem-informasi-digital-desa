const LOGO_URL =
  'https://lh3.googleusercontent.com/aida/AEtjO1VtYWUwClBn7EGj551-h9IrOw0zlPvSgUMvRRRYCvt5hhUb4wUwYy6624bPDo3_3dyXHpC8u_o7sY5bvFUMPyWBZJ6vwDCrSZh8_Gr2Vtg0S0KIhNyHv8lY8bjcp9bce0bMdj5RK4CHijy24ik7xKjeh2kDmYub09pTk7w5B6Xp4Y_4JmCr40NgKtrlSZIQ0KGSx2XagahL6J0WKx33B76ZLDfbMGHkvfQBpW-xv9Mad8HYyopUsM3jnA';

// Kerangka tampilan bersama untuk halaman publik (Login & Register).
export default function AuthShell({ title, subtitle, children, footer }) {
  return (
    <div className="min-h-screen bg-background text-on-surface flex items-center justify-center p-space-lg">
      <div className="w-full max-w-md flex flex-col gap-space-lg">
        <div className="flex items-center justify-center gap-space-sm">
          <img alt="Logo SatuDesa" className="h-10 w-auto object-contain" src={LOGO_URL} />
          <div className="flex flex-col">
            <span className="text-[20px] leading-tight font-semibold text-primary">SatuDesa</span>
            <span className="text-[11px] font-semibold text-on-surface-variant">Tata Kelola Digital</span>
          </div>
        </div>
        <div className="bg-surface-container-lowest rounded-xl shadow-lg p-space-lg flex flex-col gap-space-md">
          <div className="flex flex-col gap-space-xs">
            <h1 className="text-[20px] font-semibold text-on-surface">{title}</h1>
            {subtitle && <p className="text-[13px] text-on-surface-variant">{subtitle}</p>}
          </div>
          {children}
        </div>
        {footer}
      </div>
    </div>
  );
}
