// Event bus ringan: SubHeader (di AppLayout, tanpa akses state halaman)
// memicu aksi milik halaman aktif (saat ini: KependudukanPage).
const handlers = { onExportExcel: null, onExportPdf: null, onTambah: null };

export function registerSubHeaderActions(next) {
  Object.assign(handlers, next);
  return () => {
    Object.keys(next).forEach((k) => {
      if (handlers[k] === next[k]) handlers[k] = null;
    });
  };
}

export function triggerSubHeaderAction(name) {
  handlers[name]?.();
}
