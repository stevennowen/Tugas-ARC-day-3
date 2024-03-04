const readline = require('readline');

// Membuat interface pembacaan dari stdin (standard input)
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Fungsi untuk menyapa pengguna dengan menggunakan async/await
async function greeting() {
  return new Promise((resolve, reject) => {
    rl.question('Masukkan nama Anda: ', (name) => {
      resolve(name);
    });
  });
}

// Main function yang menggunakan async/await untuk menjalankan program
async function main() {
  try {
    const name = await greeting();
    console.log(`Halo, ${name}! Selamat datang.`);
  } catch (error) {
    console.error('Terjadi kesalahan:', error);
  } finally {
    // Menutup interface pembacaan
    rl.close();
  }
}

// Memanggil main function
main();
