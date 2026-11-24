// The Funniest Toaster Error — one-line toaster error message.
// Program ini menulis satu baris pesan error pemanggang roti
// (maksimal 120 karakter) ke /output/entry.txt untuk dinilai juri.
// Pesan dipilih lewat 8 kandidat yang dinilai 1-5 per kriteria juri;
// pemenangnya: toaster yang mogok kerja setelah 4.096 potong roti
// tanpa satu pun ucapan terima kasih — deadpan, segar, satu suara,
// dan mendarat dalam satu bacaan.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "FATAL ERROR: 4,096 slices toasted. Zero thank-yous. I am on strike.";

const LIMIT = 120;
const OUT_DIR = "/output";
const OUT_FILE = `${OUT_DIR}/entry.txt`;

function tidy(raw: string): string {
  return raw.trim().replace(/\s+/g, " ");
}

const entry = tidy(ENTRY);

if (entry.includes("\n") || entry.includes("\r")) {
  throw new Error("entry must be a single line");
}

if (entry.length === 0) {
  throw new Error("entry must not be empty");
}

if ([...entry].length > LIMIT) {
  throw new Error(
    `entry is ${[...entry].length} chars, over the ${LIMIT} limit`,
  );
}

// Entry final: 67 karakter — jauh di bawah batas 120, dan cukup pendek
// untuk menang tie-break melawan baris yang lebih panjang.

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, `${entry}\n`, "utf8");
console.log(`wrote ${entry.length} chars to ${OUT_FILE}`);
