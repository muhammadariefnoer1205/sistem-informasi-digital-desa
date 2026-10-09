export default function AuditRow({ e, onAction }) {
  return (
    <tr className={`hover:bg-surface-container-high/30 transition-colors ${e.striped ? 'bg-surface-container-low/20' : ''}`}>
      <td className="py-3.5 px-3 font-mono-tabular text-[11px] text-on-surface whitespace-nowrap">{e.time}</td>
      <td className="py-3.5 px-3 whitespace-nowrap">
        <div className={`text-[13px] font-semibold ${e.operatorCls}`}>{e.operator}</div>
        <div className="text-[11px] text-on-surface-variant font-mono-tabular">{e.peran}</div>
      </td>
      <td className="py-3.5 px-3 whitespace-nowrap">
        <div className={`font-mono-tabular text-[11px] ${e.ipCls}`}>{e.ip}</div>
        <div className="text-[11px] text-on-surface-variant">{e.terminal}</div>
      </td>
      <td className="py-3.5 px-3">
        <div className="text-[12px]">
          <span className={`font-bold ${e.aksiBoldCls}`}>{e.aksiBold}</span> {e.aksi}{' '}
          {e.nik && <span className="font-mono-tabular text-primary font-bold">{e.nik}</span>} {e.suffix}
        </div>
        <div className="text-[11px] text-on-surface-variant mt-0.5">{e.sub}</div>
      </td>
      <td className="py-3.5 px-3 whitespace-nowrap">
        <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold ${e.risikoCls}`}>
          <span className={`w-1.5 h-1.5 rounded-full ${e.dotCls}`}></span>{e.risiko}
        </span>
      </td>
      <td className="py-3.5 px-3 text-right whitespace-nowrap">
        <button onClick={() => onAction(e)} className={`px-2.5 py-1 rounded text-[11px] font-semibold transition-colors ${e.forensik.cls}`}>
          {e.forensik.label}
        </button>
      </td>
    </tr>
  );
}
