// Array of usernames
var usernames = ['admin', 'Hamza', 'Usman', 'Ayesha', 'Areeba'];
// Loop through the array and print greetings
for (var _i = 0, usernames_1 = usernames; _i < usernames_1.length; _i++) {
    var username = usernames_1[_i];
    // Check if the username is 'admin', and print a specific greeting
    if (username === 'admin') {
        console.log("Hello ".concat(username, ", would you like to see a status report?"));
    }
    else {
        // Print a generic greeting for non-admin users
        console.log("Hello ".concat(username, ", thank you for logging in again."));
    }
}
