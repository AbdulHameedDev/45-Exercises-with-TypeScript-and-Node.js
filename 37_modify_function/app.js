function make_shirt(size, message) {
    if (size === void 0) { size = 'Large'; }
    if (message === void 0) { message = 'I love TypeScript'; }
    console.log("You selected \"".concat(size, "\" size shirt with \"").concat(message, "\" prints on it."));
}
//Call function with default size & message
make_shirt();
// Call function with medium size & different message
make_shirt('Medium', 'I Love Governor Sindh');
// Call function with small size & different message
make_shirt('Small', 'I Love also JavaScript');
