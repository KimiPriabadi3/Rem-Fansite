# Rem — situs penggemar Re:Zero

Situs statis satu halaman tentang **Rem** dari *Re:Zero kara Hajimeru Isekai
Seikatsu*. Dibuat 8 Juli 2026 sebagai proyek pertama saya waktu mulai belajar
memakai Claude Code.

**HTML, CSS, dan JavaScript polos.** Tanpa framework, tanpa pustaka, tanpa
tahap build — cukup buka `index.html` di peramban.

```
index.html    188 baris
style.css     496 baris
script.js      21 baris
```

## Isinya

Lima bagian: **hero**, **"Siapa Itu Rem?"**, **galeri**, **adegan Rem & Ram**,
dan **kutipan favorit**.

## Yang saya pelajari dari proyek ini

**Palet warna ditetapkan sekali, dipakai di mana-mana.** Delapan warnanya
didefinisikan sebagai variabel CSS di `:root`, bukan disebar sebagai nilai
lepas di setiap aturan. Kalau satu warna mau diubah, cukup satu baris.

```css
--rem-blue: #29b6f6;   /* biru rambut Rem — aksen utama   */
--blossom:  #e8a6c7;   /* pink rambut Ram — aksen kedua   */
--gold:     #e3c578;
--navy:     #071021;
```

Temanya biru mengikuti Rem, tapi sengaja **tidak** biru semua — aksen pink Ram
dan emas dipakai supaya halamannya tidak terbaca monoton.

**Lightbox galeri ditulis sendiri, 21 baris.** Menekan gambar membuat elemen
overlay baru, menaruh versi besarnya di dalam, lalu menghapus dirinya sendiri
saat ditekan lagi. Tidak perlu pustaka untuk sesuatu sesederhana ini.

**Media yang gagal dimuat tidak meninggalkan kotak rusak.** Tiap `<video>`
mendengarkan kejadian `error`; kalau berkasnya tidak ada, induknya diberi kelas
`placeholder` supaya tampil sebagai kotak kosong yang rapi, bukan ikon rusak.
Galeri juga menolak membuka lightbox untuk gambar yang berstatus placeholder.

## Menjalankannya

```bash
git clone https://github.com/KimiPriabadi3/Rem-Fansite.git
cd Rem-Fansite
# lalu buka index.html di peramban
```

## Catatan

Gambar dan video Re:Zero adalah milik pemegang hak ciptanya. Repo ini proyek
penggemar non-komersial untuk belajar.

Berkas video tidak ikut disertakan (lihat `videos/BACA_INI.txt`); bagian adegan
akan tampil sebagai placeholder sampai berkasnya ditaruh sendiri.
