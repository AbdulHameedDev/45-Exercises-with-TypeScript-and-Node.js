// Define a function that takes an array of magician names as input and prints each name.
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
// Define an array
var magician_names = ["Hamza", "Mirza", "Usman", "Areeba"];
// Call the show_magicians function with the array
show_magicians(magician_names);
