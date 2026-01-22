// typeConversion.js
// Demonstrates type conversion in JavaScript

// ================== Number Conversion ==================

let score = "25abc";

// console.log(typeof score);        // string
// console.log(typeof (score));      // string

let valueInNumber = Number(score);
// console.log(typeof valueInNumber); // number
// console.log(valueInNumber);        // NaN (Not a Number)

// Examples:
// "33"      => 33
// "33abc"   => NaN
// true      => 1
// false     => 0
// null      => 0
// undefined => NaN

// ================== Boolean Conversion ==================

let isLoggedIn = 1;

let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn); // true

// Boolean conversions:
// 1         => true
// 0         => false
// ""        => false
// "Rohit"   => true

// ================== String Conversion ==================

let someNumber = 33;

let stringNumber = String(someNumber);
// console.log(stringNumber);        // "33"
// console.log(typeof stringNumber); // string


// ********************* Operations ******************


let value = 3
let negValue = -value
console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2);
// console.log(2/2);
// console.log(2%2);


let str1 ="hello"
let str2 = " Pahasp"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" +2);
// console.log(1 +"2");
// console.log("1" +"2");
// console.log("1" +2+2);
// console.log(1 +2+"2");

// console.log(+true);
// console.log(+"");


// let num1, num2, num3

// num1 = num = num3 = 2+2


let gameCounter = 100
gameCounter++;
console.log(gameCounter);

