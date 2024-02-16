// Array
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Loop 
for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
    var number = numbers_1[_i];
    // Make Empty Variable
    var ordinalSuffix = void 0;
    // if-else chain to determine the proper ordinal ending
    if (number === 1) {
        ordinalSuffix = 'st';
    }
    else if (number === 2) {
        ordinalSuffix = 'nd';
    }
    else if (number === 3) {
        ordinalSuffix = 'rd';
    }
    else {
        ordinalSuffix = 'th';
    }
    // Print the ordinal number with the proper suffix
    console.log("".concat(number).concat(ordinalSuffix));
}
