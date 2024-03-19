// Declare a variable named nameWithWhitespace of type string and assign it a string value with leading and trailing whitespace
let nameWithWhitespace: string = "\t\n    Hamza Mirza    \t\n";

// Output the value of nameWithWhitespace to the console
console.log(nameWithWhitespace);

// Declare a variable named strippedName of type string and assign it the result of calling the trim() method on nameWithWhitespace
// The trim() method removes leading and trailing whitespace from a string
let strippedName: string = nameWithWhitespace.trim();

// Output the value of strippedName to the console
console.log(strippedName);
