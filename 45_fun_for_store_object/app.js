function createCar(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        model: model
    };
    // Add additional options to the car object
    options.forEach(function (option) {
        var _a = option.split(':'), key = _a[0], value = _a[1];
        car[key.trim()] = value.trim();
    });
    return car;
}
// Call the function with required information and additional name-value pairs
var myCar = createCar('Toyota', 'Camry', 'color: blue', 'year: 2022', 'sunroof: true');
// Print the object to ensure all information was stored correctly
console.log(myCar);
