let guestList: string[] = ["Hamza", "Usman", "Ayesha", "Areeba"];
let cantMakeIt = guestList[1];
console.log(cantMakeIt, "can't make it to dinner.");

guestList.splice(1, 1, "Ali");
guestList.forEach(guest =>{
    console.log(`Assalam 0 Alaikum Dear ${guest}, I would like to invite you to dinner with me`)
});