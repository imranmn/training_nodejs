// comment single line
/*
    comment multi line
*/

// create variable in JS
// '' dan "" sama dalam javasript tapi ada `` (backtick) untuk inject variable ke dalam string
// ; tak wajib
var nama = "John Doe";
console.log('nama saya ' +nama);

let umur = 30;
console.log(`umur saya ${umur}`); // inject var ke dalam string

const PI = 3.14; // untuk tak akan berubah

alamat = "Jakarta";
console.log("alamat saya ", alamat);

let ok = true;

console.log(typeof ok);

let ic;
console.log(typeof ic);

let color = null;
console.log(typeof color);

ok = 123;
console.log(ok);
console.log(typeof ok);

// object

let user = {
    nama: "John Doe",
    umur: 30,
    alamat: "Jakarta",
    info: function() {
        return `Nama: ${this.nama}, Umur: ${this.umur}, Alamat: ${this.alamat}`;
    }
};

let user2 = {
    nama: "Jone Doe",
    umur: 31,
    alamat: "Bali",
    info: () => {
        return 'nama:' + this.nama + 'umur:' + this.umur + 'alamat:' + this.alamat;
    }
};

console.log(typeof user2);
console.log(user2.info());

// function boleh diassign ke suatu variable
let info = function() {
    return 'testing';
};

console.log(info(), typeof(info));