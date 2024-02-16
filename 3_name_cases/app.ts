let personName = "Hamza Mirza,";
console.log("Hello", personName.toLowerCase() , "would you like to learn some Python today?");
console.log("Hello", personName.toUpperCase() , "would you like to learn some Python today?");
console.log("Hello", personName.replace(/\b\w/g, (char) => char.toUpperCase()) , "would you like to learn some Python today?");