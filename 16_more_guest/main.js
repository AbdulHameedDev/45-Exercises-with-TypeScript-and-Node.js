var guestList = ["Hamza", "Usman", "Ayesha", "Areeba"];
var cantMakeIt = guestList[1];
console.log(cantMakeIt, "can't make it to dinner.\n");
// Removed guest who cant make it from the array
guestList.splice(1, 1, "Ali");
guestList.forEach(function (guest) {
    console.log("Assalam 0 Alaikum Dear ".concat(guest, ", I would like to invite you to dinner with me"));
});
console.log("\nGood news! We found a bigger dinner table!\n");
// Add one new guest to the beginning of the array
guestList.unshift("Osama");
// Add one new guest to the middle of the array
var middleIndex = Math.floor(guestList.length / 2);
guestList.splice(middleIndex, 0, "Zain");
// Add one new guest to the end of the array
guestList.push("Sherry");
console.log("Updated List of Guests:\n");
guestList.forEach(function (guest) {
    console.log("Assalam 0 Alaikum Dear ".concat(guest, ", I would like to invite you to dinner with me"));
});
