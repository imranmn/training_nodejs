// array
const names = ["John", "Jane", "Doe"];
// read
console.log('nama kedua adalah', names[1]);
// write
names.push("Smith"); // tambah Smith dalam array
console.log(names);
// delete
// names.splice(2); // hapus mulai index 2 sampai akhir
names.splice(2,1); // hapus 1 item mulai index 2
console.log(names);

// array of objects
let arr=[{id:4, name: "Smith", umur: 22}]
const users = [
    { id: 1, name: "John", umur: 30 },
    { id: 2, name: "Jane", umur: 25 },
    { id: 3, name: "Doe", umur: 28 },
    ...arr // spread operator = copy array
];

let arr2=[{id:5, name: "Brown", umur: 26}];
users.push(...arr2); // menambahkan data dari arr2 ke users

// destructuring
let [org1, org2] = users;
console.log(org1, org2);

users.forEach(user => {
    console.log(`ID: ${user.id}, Name: ${user.name}, Umur: ${user.umur}`);
});
console.log('---');
// for of loop
for (let o of users) {
    console.log(`ID: ${o.id}, Name: ${o.name}, Umur: ${o.umur}`);
};

