// sample guna node.js core library
// import {readFileSync} from 'node:fs'; // teknik ESM

let fs = require('node:fs'); // teknik commonJS
let path = __dirname; // direktori semasa
let content = fs.readFileSync(path + '/content.txt', 'utf-8'); // baca fail secara sinkron
console.log(content);