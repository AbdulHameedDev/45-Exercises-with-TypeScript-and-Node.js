// Declare an array named guestList of type string[], containing a list of guest names
var guestList = ["Hamza", "Usman", "Ayesha", "Areeba"];
// Retrieve the second guest from the guestList array and assign it to the variable "cantMakeIt"
var cantMakeIt = guestList[1];
// Output a message indicating that the second guest can't make it to dinner
console.log(cantMakeIt, "can't make it to dinner.");
// Replace the first element of the guestList array with the name "Ali"
guestList.splice(0, 1, "Ali");
// Iterate over each element of the guestList array using the forEach method
// For each guest in the array, log an invitation message to the console using string interpolation
guestList.forEach(function (guest) {
    console.log("Assalam 0 Alaikum Dear ".concat(guest, ", I would like to invite you to dinner with me"));
});
