function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Making a sandwich with the following items:");
    items.forEach(function (item) { return console.log("- " + item); });
}
// Call the function with different numbers of arguments
makeSandwich('chicken', 'cheese', 'butter');
makeSandwich('egg', 'butter', "ketchup", "chicken");
makeSandwich('peanut butter', 'sauce');
