// Declare an array named "favoriteVehicles" of type string[], containing a list of favorite vehicles
var favoriteVehicles = ["Sports Bike", "Sports Car", "SUV", "Revo"];
// Iterate over each element of the "favoriteVehicles" array using the forEach method
// For each vehicle in the array, log a message to the console using string interpolation
favoriteVehicles.forEach(function (vehicle) {
    console.log("I would like to own a ".concat(vehicle));
});
