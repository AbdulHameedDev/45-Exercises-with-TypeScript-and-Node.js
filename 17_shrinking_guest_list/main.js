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
// Inform that only two people can be invited for dinner
console.log("\nUnfortunately, the new dinner table won't arrive in time, so I can only invite two people for dinner.\n");
// Using While-loop to remove guests from the list until only two names remain
while (guestList.length > 2) {
    var removedGuest = guestList.pop();
    console.log("Sorry ".concat(removedGuest, ", I can't invite you to dinner."));
}
// Print invitations to the two people still on the list
console.log("\nInvitations to the Last 2 guests:\n");
guestList.forEach(function (person) { return console.log("Dear ".concat(person, ", you're still invited to dinner.")); });
// Removing last two elements
guestList.pop();
guestList.pop();
// Print the empty list to confirm
console.log("\nEmpty list:", guestList);
