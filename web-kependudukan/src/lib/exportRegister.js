import { maskNik } from '../data/warga';

const HEADERS = [
  'No', 'NIK', 'No. KK', 'Nama Lengkap', 'Alamat (Dusun, RT/RW)',
  'Tempat, Tanggal Lahir', 'Usia / JK', 'Agama & Pendidikan',
  'Golongan Darah', 'Status Sipil', 'Klasifikasi Khusus', 'Mutasi',
];

function cell(w, masked) {
  return [
    masked ? maskNik(w.nik) : w.nik,
    masked ? maskNik(w.kk) : w.kk,
    w.nama,
    w.alamat,
    w.lahir,
    w.usia,
    w.agamaPendidikan,
    w.golDarah,
    w.statusSipil,
    (w.klasifikasi ?? []).map((k) => k.label).join('; ') || '-',
    w.mutasi?.label ?? '-',
  ];
}

const escCsv = (v) => `"${String(v ?? '').replace(/"/g, '""')}"`;

// Unduh CSV (terbuka langsung di Excel) dari baris yang sedang tampil.
export function exportRegisterExcel(rows, masked = true) {
  const lines = [HEADERS.map(escCsv).join(';')];
  rows.forEach((w, i) => lines.push([i + 1, ...cell(w, masked)].map(escCsv).join(';')));
  const blob = new Blob(['\uFEFF' + lines.join('\r\n')], { type: 'text/csv;charset=utf-8' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = `register-penduduk-${new Date().toISOString().slice(0, 10)}.csv`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(a.href);
}

const escHtml = (v) => String(v ?? '-').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

// Buka tab cetak Buku Induk format Kemendagri (landscape) + tombol PDF.
export function printRegisterPdf(rows, masked = true, meta = {}) {
  const win = window.open('', '_blank', 'width=1100,height=800');
  if (!win) {
    alert('Popup diblokir browser. Izinkan popup untuk mencetak Buku Induk.');
    return;
  }
  const bodyRows = rows.map((w, i) => {
    const c = cell(w, masked).map(escHtml);
    return `<tr><td>${i + 1}</td>${c.map((x) => `<td>${x}</td>`).join('')}</tr>`;
  }).join('');
  const tanggal = new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
  win.document.write(`<!DOCTYPE html>
<html lang="id"><head><meta charset="utf-8"/>
<title>Buku Induk Kependudukan Desa Sukamaju</title>
<style>
  @page{size:A4 landscape;margin:12mm}
  body{font-family:Arial,sans-serif;color:#111;padding:24px;font-size:11px}
  .kop{text-align:center;border-bottom:3px double #156100;padding-bottom:10px;margin-bottom:12px}
  .kop h1{font-size:17px;margin:0;color:#156100}
  .kop h2{font-size:14px;margin:2px 0}
  .kop p{font-size:11px;margin:2px 0;color:#444}
  .meta{display:flex;justify-content:space-between;margin-bottom:10px;font-size:11px}
  table{width:100%;border-collapse:collapse}
  th,td{border:1px solid #555;padding:4px 6px;vertical-align:top;text-align:left}
  th{background:#e7f2dd;font-size:10px}
  .ttd{display:flex;justify-content:flex-end;margin-top:24px;font-size:12px;text-align:center}
  @media print{.noprint{display:none}body{padding:0}}
</style></head><body>
<div class="kop">
  <h1>PEMERINTAH KABUPATEN BANDUNG — KECAMATAN CIMAUNG</h1>
  <h2>BUKU INDUK KEPENDUDUKAN DESA SUKAMAJU</h2>
  <p>Format Standar Kemendagri (Permendagri No. 47/2016) • Dicetak dari SatuDesa</p>
</div>
<div class="meta">
  <span>Jumlah record: <b>${rows.length}</b>${meta.filterInfo ? ` • ${meta.filterInfo}` : ''}</span>
  <span>Dicetak: ${tanggal} • Operator: Bambang Hermanto</span>
</div>
<table><thead><tr><th>No</th>${['NIK', 'No. KK', 'Nama Lengkap', 'Alamat', 'Tempat, Tgl Lahir', 'Usia / JK', 'Agama & Pendidikan', 'Gol. Darah', 'Status Sipil', 'Klasifikasi', 'Mutasi'].map((h) => `<th>${h}</th>`).join('')}</tr></thead>
<tbody>${bodyRows || '<tr><td colspan="12" style="text-align:center">Tidak ada data.</td></tr>'}</tbody></table>
<div class="ttd"><div>Sukamaju, ${tanggal}<br/>Kaur Tata Usaha<br/><br/><br/><br/>( Bambang Hermanto )</div></div>
<div class="noprint" style="margin-top:20px;text-align:center">
  <button onclick="window.print()" style="padding:10px 28px;font-size:14px;background:#156100;color:#fff;border:none;border-radius:8px;cursor:pointer">Cetak / Simpan PDF</button>
</div>
</body></html>`);
  win.document.close();
  win.focus();
}
