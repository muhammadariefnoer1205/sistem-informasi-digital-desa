const inputCls =
  'w-full px-3 py-2 rounded-lg bg-surface-container-low text-[13px] text-on-surface placeholder:text-on-surface-variant/70 focus:outline-none focus:ring-2 focus:ring-primary';
const labelCls = 'text-[12px] font-semibold text-on-surface';

export function Field({ label, children }) {
  return (
    <label className="flex flex-col gap-1">
      <span className={labelCls}>{label}</span>
      {children}
    </label>
  );
}
export { inputCls };
