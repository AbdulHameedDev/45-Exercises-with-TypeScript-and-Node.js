// Declare an array named guestList of type string[], containing a list of guest names
var guestList = ["Hamza", "Usman", "Ayesha", "Areeba"];
// Iterate over each element of the guestList array using the forEach method
// For each guest in the array, log an invitation message to the console using string interpolation
guestList.forEach(function (guest) {
    console.log("Assalam 0 Alaikum Dear ".concat(guest, ", I would like to invite you to dinner with me"));
});
