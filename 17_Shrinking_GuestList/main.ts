// Declare an array named guestList of type string[], containing a list of guest names
let guestList: string[] = ["Hamza", "Usman", "Ayesha", "Areeba"];

// Retrieve the name of the guest who can't make it to dinner and assign it to the variable cantMakeIt
let cantMakeIt = guestList[1];

// Output a message indicating the guest who can't make it to dinner
console.log(cantMakeIt, "can't make it to dinner.\n");

// Replace the guest who can't make it with "Ali"
guestList.splice(1, 1, "Ali");

// Output invitations to each guest in the guestList array using string interpolation
guestList.forEach(guest =>{
    console.log(`Assalam 0 Alaikum Dear ${guest}, I would like to invite you to dinner with me`);
});

// Output a message indicating that a bigger dinner table has been found
console.log("\nGood news! We found a bigger dinner table!\n");

// Add one new guest to the beginning of the array
guestList.unshift("Osama");

// Calculate the middle index of the guestList array
let middleIndex: number = Math.floor(guestList.length / 2);

// Add one new guest to the middle of the array
guestList.splice(middleIndex, 0, "Zain");

// Add one new guest to the end of the array
guestList.push("Sherry");

// Output a message indicating the updated list of guests
console.log("Updated List of Guests:\n");

// Output invitations to each guest in the updated guestList array using string interpolation
guestList.forEach(guest =>{
    console.log(`Assalam 0 Alaikum Dear ${guest}, I would like to invite you to dinner with me`);
});

// Output a message indicating that only two people can be invited for dinner
console.log("\nUnfortunately, the new dinner table won't arrive in time, so I can only invite two people for dinner.\n");

// Using a while-loop to remove guests from the list until only two names remain
while (guestList.length > 2) {
    let removedGuest = guestList.pop(); // Remove the last guest from the list
    console.log(`Sorry ${removedGuest}, I can't invite you to dinner.`);
}

// Print invitations to the two people still on the list
console.log("\nInvitations to the Last 2 guests:\n");
guestList.forEach(person => console.log(`Dear ${person}, you're still invited to dinner.`));

// Remove the last two elements from the list
guestList.pop();
guestList.pop();

// Output the empty list to confirm
console.log("\nEmpty list:", guestList);
