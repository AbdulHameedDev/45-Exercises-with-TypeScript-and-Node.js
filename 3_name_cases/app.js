"use strict";
// Define a string variable called personName with value "Hamza Mirza"
let personName = "Hamza Mirza,";
// Output a greeting with personName converted to lowercase
console.log("Hello", personName.toLowerCase(), "would you like to learn some Python today?");
// Output a greeting with personName converted to uppercase
console.log("Hello", personName.toUpperCase(), "would you like to learn some Python today?");
// Output a greeting with personName where the first letter of each word is capitalized
console.log("Hello", personName.replace(/\b\w/g, (char) => char.toUpperCase()), "would you like to learn some Python today?");
