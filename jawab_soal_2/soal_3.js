const readline = require('readline');
const { clearScreenDown } = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Daftar menu makanan
const menu = [
  { id: 1, name: 'Nasi Goreng', price: 15000 },
  { id: 2, name: 'Mie Goreng', price: 12000 },
  { id: 3, name: 'Ayam Goreng', price: 20000 },
  { id: 4, name: 'Soto Ayam', price: 18000 },
  { id: 5, name: 'Es Teh', price: 5000 },
  { id: 6, name: 'Es Jeruk', price: 6000 }
];

// Variabel untuk menyimpan pesanan
let order = [];

// Fungsi untuk menampilkan menu
function displayMenu() {
  console.log("Menu Makanan:");
  menu.forEach((item) => {
    console.log(`${item.id}. ${item.name} - Rp ${item.price}`);
  });
}

// Fungsi untuk menambahkan pesanan
function addOrder(id, quantity) {
  const menuItem = menu.find(item => item.id === id);
  if (menuItem) {
    const subtotal = menuItem.price * quantity;
    order.push({ id: menuItem.id, name: menuItem.name, price: menuItem.price, quantity, subtotal });
    console.log(`${menuItem.name} (${quantity}x) telah ditambahkan ke pesanan.`);
  } else {
    console.log('Menu tidak ditemukan.');
  }
}

// Fungsi untuk menampilkan pesanan
function displayOrder() {
  console.log("Pesanan Anda:");
  let total = 0;
  order.forEach((item, index) => {
    console.log(`${index + 1}. ${item.name} - Rp ${item.price} x ${item.quantity} = Rp ${item.subtotal}`);
    total += item.subtotal;
  });
  console.log(`Total: Rp ${total}`);
}

// Fungsi untuk membersihkan layar
function clearScreen() {
  // Jika dijalankan di terminal
  if (process.stdout.isTTY) {
    process.stdout.write('\x1Bc');
  }
}

// Main function
function main() {
  clearScreen();
  displayMenu();

  rl.question('Pilih menu yang ingin Anda pesan (masukkan nomor menu): ', (id) => {
    const menuItem = menu.find(item => item.id === parseInt(id));
    if (menuItem) {
      rl.question(`Masukkan jumlah ${menuItem.name} yang ingin Anda pesan: `, (quantity) => {
        addOrder(menuItem.id, parseInt(quantity));
        rl.question('Apakah Anda ingin memesan lagi? (ya/tidak): ', (answer) => {
          if (answer.toLowerCase() === 'ya') {
            main();
          } else {
            displayOrder();
            rl.close();
          }
        });
      });
    } else {
      console.log('Menu tidak valid.');
      main();
    }
  });
}

// Memanggil main function untuk memulai program
main();
