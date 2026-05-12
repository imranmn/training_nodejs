// conditional

console.log(1 == '1'); // compare value only
console.log(1 === '1'); // compare value and type

// apa yang return false dalam js?
// 1. false & 2. null 

if(null) {
    console.log("null is true");
} else {
    console.log("null is false");
}

// 3. undefined
let result = undefined ? true : false; // shorcut if else
console.log("undefined is", result);

// 4. empty string
let emptyStr = "" ? true : false;
console.log("empty string is", emptyStr);

// 5. 0
let zero = 0 ? true : false;
console.log("zero is", zero);

// 6. NaN
let notANumber = NaN ? true : false;
console.log("NaN is", notANumber);

// nullish operator ?? - assign default value jika null
var nama = null;
let name2 = nama ?? "John Doe";
console.log("name2 is", name2);

var nama = 'azman';
let name3 = nama ?? "John Doe";
console.log("name3 is", name3);