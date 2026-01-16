// variables.js
// Demonstrates different ways to declare variables in JavaScript

// Constant variable (cannot be changed)
const accountId = 14526;

// Block-scoped variables
let accountEmail = "rohit@gmail.com";
let accountCity = "Jaipur";

// Function-scoped variable (avoid using var)
var accountPassword = "125478";

// Declared but not initialized (value = undefined)
let accountState;

// accountId = 2; // ❌ Not allowed because accountId is a constant

// Updating variable values
accountEmail = "lakha@gmail.com";
accountPassword = "212121";
accountCity = "Punjab";

/*
Prefer not to use `var`
because it has issues with block scope and function scope.
Use `let` or `const` instead.
*/

// Output single value
console.log("Account ID:", accountId);

// Output multiple values in table format
console.table({
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState
});
