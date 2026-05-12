// ini adalah library boleh diimport oleh file .js yang lain - teknikl commonJS

function sayHello(nama){
    return "Hello " + nama; 
}

module.exports = sayHello;