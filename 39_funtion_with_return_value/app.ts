// Function with return value
function city_country(city: string, country: string): string {
    return `${city}, ${country}`;
}

// Calling functions with city-country pairs and print the returned vaue
console.log(city_country('Karachi', 'Pakistan'));
console.log(city_country('Berlin', 'Germany'));
console.log(city_country('Tokyo', 'Japan'));