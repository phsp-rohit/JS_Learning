"use strict"; // Treat all JavaScript code as newer (ES6+) version

// alert(3 + 3); 
// ❌ alert works in browser, not in Node.js

console.log(3 + 3); // Code readability should be high
console.log("Rohit");

// ================== Variables ==================

let name = "Lakha";       // string data type
let age = 18;             // number data type
let isLoggedIn = true;    // boolean data type
let state;                // undefined

// ================== Data Types ==================

/*
Primitive Data Types:

number      => Range: 2^53 - 1
bigint      => For very large numbers
string      => "text"
boolean     => true / false
null        => standalone value (intentional empty)
undefined   => value not assigned
symbol      => unique value
*/

// Non-Primitive Data Type:
// object

// ================== Type Checking ==================

console.log(typeof "Lakha");     // string
console.log(typeof age);         // number
console.log(typeof isLoggedIn);  // boolean
console.log(typeof state);       // undefined

console.log(typeof null);        // object (JS bug / historical reason)
console.log(typeof undefined);   // undefined
