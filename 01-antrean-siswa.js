const antreanSiswa = ["Andi", "Budi", "Citra"];

console.log("=== ANTREAN SISWA ===");
console.log("Antrean awal:", antreanSiswa);
console.log("Jumlah siswa:", antreanSiswa.length);

antreanSiswa.push("Deni");
console.log("Setelah push Deni:", antreanSiswa);


antreanSiswa.unshift("Eka");
console.log("Setelah unshift Eka:", antreanSiswa);


const siswaPertama = antreanSiswa.shift();
console.log("Siswa pertama dihapus:", siswaPertama);
console.log("Antrean sekarang:", antreanSiswa);


const siswaTerakhir = antreanSiswa.pop();
console.log("Siswa terakhir dihapus:", siswaTerakhir);
console.log("Antrean sekarang:", antreanSiswa);


console.log("= ANTREAN AKHIR =");
console.log("Antrean:", antreanSiswa);
console.log("Jumlah siswa tersisa:", antreanSiswa.length);