import { SECURITY_METRICS } from '../../data/keamanan';

export default function SecurityMetrics() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-space-md">
      {SECURITY_METRICS.map((m) => (
        <div key={m.label} className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-semibold text-on-surface-variant">{m.label}</span>
            <div className={`w-7 h-7 rounded-lg flex items-center justify-center ${m.iconBox}`}>
              <span className="material-symbols-outlined text-[18px]">{m.icon}</span>
            </div>
          </div>
          <div className="mt-space-sm">
            <div className={`font-mono-tabular text-[20px] font-semibold ${m.valueCls}`}>{m.value}</div>
            <div className={`flex items-center gap-1 mt-0.5 text-[12px] font-medium ${m.lineCls}`}>
              <span className="material-symbols-outlined text-[14px]">{m.lineIcon}</span>
              <span>{m.line}</span>
            </div>
          </div>
          <div className="mt-space-xs pt-space-xs text-[11px] font-mono-tabular text-on-surface-variant/70">{m.foot}</div>
        </div>
      ))}
    </div>
  );
}
