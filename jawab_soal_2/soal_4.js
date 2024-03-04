const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Meminta pengguna untuk memasukkan nama
rl.question('Masukkan nama Anda: ', (name) => {
  // Menampilkan pesan sapaan
  console.log(`Halo, ${name}! Selamat datang.`);
  
  // Menutup interface pembacaan
  rl.close();
});
