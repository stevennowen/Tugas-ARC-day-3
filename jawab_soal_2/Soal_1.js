const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Fungsi untuk menyapa pengguna
function greeting(name, callback) {
  callback(`Halo, ${name}! Selamat datang.`);
}

// Meminta pengguna untuk memasukkan nama
rl.question('Masukkan nama Anda: ', (name) => {
  // Memanggil fungsi greeting dengan nama yang dimasukkan
  greeting(name, (message) => {
    // Menampilkan pesan sapaan
    console.log(message);
    // Menutup interface pembacaan
    rl.close();
  });
});
