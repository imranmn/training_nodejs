// function - 1st class citizen
function sum(a, b) {
    return a + b;
}

let tolak = function(a, b) {
    return a - b;
}

// function parameter adalah function
function info(callback) {
    callback(); // panggil function callback
}

// function yang tiada nama
info(function() {
    console.log("Hello from callback!");
});

// function as object
let person = function(){
    this.name = "John";
    this.age = 30;
    this.sayHello = function() {
        console.log("Hello, my name is " + this.name);
    }
}
let p1 = new person();
p1.sayHello();