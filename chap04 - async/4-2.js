// asynchronous / non-blocking example
// menggunakan async/await kerana proses mengambil masa yang lama
// await digunakan untuk menunggu hasil dari Promise
// express.js boleh menjalankan beberapa API yang sama pada port yang berbeza
async function getPost(){
    let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    let json = await response.json();
    console.log(json);
}

console.log("mulai proses async");
getPost(); // kalau letak await di sini, proses akan tunggu sehingga selesai
console.log("proses async selesai");