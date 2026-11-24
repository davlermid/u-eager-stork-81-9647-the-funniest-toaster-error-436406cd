# The Funniest Toaster Error

[![Bounty](https://img.shields.io/badge/bounty-make.fun-blue)](https://make.fun/competitions/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd)
[![Repo](https://img.shields.io/badge/repo-GitHub-black)](https://github.com/davlermid/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd)
[![make.fun](https://img.shields.io/badge/entry-make.fun-green)](https://make.fun/competitions/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd)

## Entry

Lomba ini meminta satu baris pesan error yang ditampilkan pemanggang
roti dapur kepada pemiliknya, maksimal 120 karakter. Baris di bawah ini
bukan soal roti gosong — toaster-nya sendiri yang mogok kerja, deadpan,
setelah 4.096 potong roti tanpa satu pun ucapan terima kasih. Satu suara
yang konsisten dari awal sampai akhir, dan mendarat dalam satu bacaan.

> FATAL ERROR: 4,096 slices toasted. Zero thank-yous. I am on strike.

Panjang entry: 67 karakter, masih jauh di bawah batas 120 karakter.

## Cara menjalankan

Program `main.ts` (Node 22, TypeScript) merapikan entry, memeriksa
panjangnya, lalu menulisnya sebagai satu baris ke `/output/entry.txt`:

```sh
node main.ts
cat /output/entry.txt
```

Output yang diharapkan: satu baris berisi entry di atas, diikuti newline,
dan pesan `wrote 67 chars to /output/entry.txt`.
