//if
let hari = 'minggu';
if (hari === 'minggu'){
    console.log('Selamat Berlibur');
}

//else
let today = 'senin';
if (today === 'minggu'){
    console.log('Selamat Berlibur');
}else{
    console.log('Hari ini harus masuk');
}

//nested if
let depan = prompt('Masukan nama depan:');
let belakang = prompt('Masukan nama belakang:');
  if(depan == "Djaya"){
    if(belakang == "Pamungkas"){
      document.write('Selamat datang Djaya Pamungkas!');
    } else {
      document.write('Nama yang anda masukan salah, coba lagi!');
    }
  } else {
    document.write('Anda tidak terdaftar!');
  }

//switch case
let bulan = 7;
switch (bulan) {
case 1:
    console.log('Januari');
    break;
case 2:
    console.log('Februari');
    break;
case 3:
    console.log('Maret');
    break;
case 4:
    console.log('April');
    break;
case 5:
    console.log('Mei');
    break;
case 6:
    console.log('Juni');
    break;
case 7:
    console.log('Juli');
    break;
case 8:
    console.log('Agustus');
    break;
case 9:
    console.log('September');
    break;
case 10:
    console.log('Oktober');
    break;
case 11:
    console.log('November');
    break;
case 12:
    console.log('Desember');
    break;
default:
    console.log('Maaf, harus angka 1 - 12');
}

//for statement
let kota = ['Depok', 'Bogor', 'Tangerang', 'Bekasi'];
for (let urut = 1; urut < kota.length; urut++) {
  console.log(kota[urut]);
}

//While
let angka = 3;
while (angka <= 10) {
  console.log(`${angka}. Mari berhitung`);
  angka++;
}

//Do While
let urut = 2;
do {
  console.log(`${urut}. Next`);
  urut++;
} while (urut <= 5);

//Function
(function (nama){
    console.log('Selamat Datang '+ nama);
})('Djaya');


let urutan = [1, 2, 3, 4, 5];

urutan.forEach((halaman, index, urutan) => {
  console.log('Halaman = ' + halaman + ' index = ' + index);
});