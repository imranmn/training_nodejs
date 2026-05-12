// demonstrasi programming biasa
// execute code dari top to bottom, line by line (synchronous)
let nama = "John Doe";
console.log("nama saya adalah " + nama);

// asynchronous / non-blocking
console.log("mulai proses async");
setTimeout(() => {
    console.log("Hello from asynchronous code!");
}, 2000); // 2000 milliseconds
console.log("proses async selesai");

// ada callback, ada promise, ada async/await
