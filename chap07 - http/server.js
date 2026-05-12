// nak create HTTP server dengan node.js, kita boleh guna modul http yang sudah tersedia dalam node.js. Kita akan buat server yang akan memaparkan teks "Hello World. This is my first HTTP server in node.js" di browser bila kita akses localhost:3000.
// buku node.js page 153 (152 dalam text pdf)

import { createServer } from 'node:http'; // import modul http

const port = 3000;

const server = createServer(); // create HTTP server as object
server.on('request', (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' }); // set header response
  response.end('<h1>Hello World. This is my first HTTP server in node.js</h1>'); // teks yang akan dipaparkan di browser
});

server.listen(port, () => {
  console.log(`Server running at port ${port}`);
});

// buka terminal, pergi ke directory projek dan run `node server.js`