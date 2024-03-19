// Define a function named make_shirt with parameters for size and message, assigning default values if not provided
function make_shirt(size, message) {
    if (size === void 0) { size = 'Large'; }
    if (message === void 0) { message = 'I love TypeScript'; }
    // Print a message indicating the selected size and message for the shirt
    console.log("You selected \"".concat(size, "\" size shirt with \"").concat(message, "\" prints on it."));
}
// Call the make_shirt function with default arguments
make_shirt();
// Call the make_shirt function with medium size and a default message
make_shirt('Medium');
// Call the make_shirt function with small size and a different message
make_shirt('Small', 'I Love also JavaScript');
