// Declare an array named guestList of type string[], containing a list of guest names
var guestList = ["Hamza", "Usman", "Ayesha", "Areeba"];
// Retrieve the name of the guest who can't make it to dinner and assign it to the variable cantMakeIt
var cantMakeIt = guestList[1];
// Output a message indicating that the guest who can't make it to dinner
console.log(cantMakeIt, "can't make it to dinner.\n");
// Remove the guest who can't make it from the array and replace with "Ali"
guestList.splice(0, 1, "Ali");
// Iterate over each element of the guestList array using the forEach method
// For each guest in the array, log an invitation message to the console using string interpolation
guestList.forEach(function (guest) {
    console.log("Assalam 0 Alaikum Dear ".concat(guest, ", I would like to invite you to dinner with me"));
});
// Output a message indicating that a bigger dinner table has been found
console.log("\nGood news! We found a bigger dinner table!\n");
// Add one new guest to the beginning of the array
guestList.unshift("Osama");
// Add one new guest to the end of the array
guestList.push("Sherry");
// Calculate the middle index of the guestList array
var middleIndex = Math.floor(guestList.length / 2);
// Add one new guest to the middle of the array
guestList.splice(middleIndex, 0, "Zain");
// Output a message indicating the updated list of guests
console.log("Updated List of Guests:\n");
// Iterate over each element of the updated guestList array using the forEach method
// For each guest in the array, log an invitation message to the console using string interpolation
guestList.forEach(function (guest) {
    console.log("Assalam 0 Alaikum Dear ".concat(guest, ", I would like to invite you to dinner with me"));
});
