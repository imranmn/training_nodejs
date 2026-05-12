// library JS - originally datang dengan v8 engine
// boleh rujuk https://developer.mozilla.org/en-US/docs/Web/JavaScript

// contoh gunakan math lib 
let rand = Math.random();
console.log(rand);

// jana random number antara 1-100
let randNum = Math.floor(Math.random() * 100);
console.log(randNum);

// convert string kepada number
let str = "123";
let num = Number.parseInt(str);
console.log(num, typeof num);