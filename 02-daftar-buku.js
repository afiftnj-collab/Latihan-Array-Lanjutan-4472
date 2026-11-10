const daftarBuku = [
    "HTML Dasar",
    "CSS Dasar",
    "JavaScript Dasar",
    "PHP Dasar"
];

console.log("=== DAFTAR BUKU AWAL ===");
console.log(daftarBuku);

const indeksCSS = daftarBuku.indexOf("CSS Dasar");

if (indeksCSS !== -1) {
    daftarBuku.splice(indeksCSS, 1, "CSS Modern");
    console.log("CSS Dasar berhasil diganti menjadi CSS Modern.");
}
const indeksJS = daftarBuku.indexOf("JavaScript Dasar");

if (indeksJS !== -1) {
    daftarBuku.splice(indeksJS + 1, 0, "Git Dasar");
    console.log("Git Dasar berhasil ditambahkan.");
}

const indeksPHP = daftarBuku.indexOf("PHP Dasar");

if (indeksPHP !== -1) {
    daftarBuku.splice(indeksPHP, 1);
    console.log("PHP Dasar berhasil dihapus.");
}
console.log("=== DAFTAR BUKU AKHIR ===");
console.log(daftarBuku);
console.log("Jumlah buku tersisa:", daftarBuku.length);