// Make an array of three favorite fruits
const favorite_fruits: string[] = ['apple', 'banana', 'orange'];

// Iterate through each fruit in the array
for (const fruit of favorite_fruits) {
    // Check if the current fruit is 'apple' and print a message accordingly
    if (fruit === 'apple') {
        console.log("You really like apples!");
    }
    // Check if the current fruit is 'banana' and print a message accordingly
    if (fruit === 'banana') {
        console.log("You really like bananas!");
    }
    // Check if the current fruit is 'orange' and print a message accordingly
    if (fruit === 'orange') {
        console.log("You really like oranges!");
    }
    // These conditions are redundant as 'Strawberry' and 'Cherry' are not in the original array
    // Thus, these blocks will never execute
    if (fruit === 'Strawberry') {
        console.log("You really like Strawberry!");
    } 
    if (fruit === 'Cherry') {
        console.log("You really like Cherry!");
    } 
}
