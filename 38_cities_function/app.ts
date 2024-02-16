// Maked function with default country
function describe_city(city: string, country: string = 'Pakistan') {
    console.log(`${city} is in ${country}.`);
}

// Call the function for three different cities
describe_city('Karachi');
describe_city('Hyderabad');
describe_city('Berlin', 'Germany');