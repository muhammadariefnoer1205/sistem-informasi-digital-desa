import { maskNik } from '../data/warga';

export function printBiodata(warga, masked = true) {
  const nik = masked ? maskNik(warga.nik) : warga.nik;
  const kk = masked ? maskNik(warga.kk) : warga.kk;
  const klas = (warga.klasifikasi ?? []).map((k) => k.label).join(', ') || '-';
  const win = window.open('', '_blank', 'width=720,height=900');
  if (!win) {
    alert('Popup diblokir browser. Izinkan popup untuk mencetak biodata.');
    return;
  }
  win.document.write(`<!DOCTYPE html>
<html lang="id"><head><meta charset="utf-8"/>
<title>Kartu Biodata Warga — ${warga.nama}</title>
<style>
  body{font-family:Arial,sans-serif;color:#111;padding:32px;max-width:640px;margin:auto}
  .kop{text-align:center;border-bottom:3px double #156100;padding-bottom:12px;margin-bottom:16px}
  .kop h1{font-size:18px;margin:0;color:#156100}
  .kop p{font-size:12px;margin:2px 0;color:#444}
  h2{font-size:15px;margin:0 0 8px}
  table{width:100%;border-collapse:collapse;font-size:13px}
  td{padding:6px 8px;border:1px solid #bbb;vertical-align:top}
  td:first-child{width:210px;background:#f2f7ec;font-weight:bold}
  .ttd{display:flex;justify-content:flex-end;margin-top:32px;font-size:13px;text-align:center}
  @media print{.noprint{display:none}}
</style></head><body>
<div class="kop">
  <h1>PEMERINTAH DESA SUKAMAJU</h1>
  <p>Kartu Biodata Warga — Buku Induk Kependudukan Desa (SatuDesa)</p>
</div>
<h2>${warga.nama}</h2>
<table>
  <tr><td>NIK</td><td>${nik}</td></tr>
  <tr><td>No. Kartu Keluarga</td><td>${kk}</td></tr>
  <tr><td>Alamat</td><td>${warga.alamat}</td></tr>
  <tr><td>Tempat, Tanggal Lahir</td><td>${warga.lahir}</td></tr>
  <tr><td>Usia / Jenis Kelamin</td><td>${warga.usia}</td></tr>
  <tr><td>Agama &amp; Pendidikan</td><td>${warga.agamaPendidikan}</td></tr>
  <tr><td>Golongan Darah</td><td>${warga.golDarah}</td></tr>
  <tr><td>Status Sipil</td><td>${warga.statusSipil}</td></tr>
  <tr><td>Klasifikasi Khusus</td><td>${klas}</td></tr>
  <tr><td>Status Mutasi</td><td>${warga.mutasi?.label ?? '-'}</td></tr>
</table>
<div class="ttd"><div>Sukamaju, ${new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}<br/>Operator Desa<br/><br/><br/><br/>( Bambang Hermanto )<br/>Kaur Tata Usaha</div></div>
<div class="noprint" style="margin-top:24px;text-align:center">
  <button onclick="window.print()" style="padding:10px 24px;font-size:14px;background:#156100;color:#fff;border:none;border-radius:8px;cursor:pointer">Cetak / Simpan PDF</button>
</div>
</body></html>`);
  win.document.close();
  win.focus();
}
