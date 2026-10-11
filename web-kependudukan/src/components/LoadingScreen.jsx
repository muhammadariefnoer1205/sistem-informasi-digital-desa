export default function LoadingScreen({ label = 'Memuat sesi…' }) {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center gap-space-sm text-on-surface-variant">
      <div className="w-9 h-9 rounded-full border-4 border-primary border-t-transparent animate-spin"></div>
      <span className="text-[13px] font-semibold">{label}</span>
    </div>
  );
}
