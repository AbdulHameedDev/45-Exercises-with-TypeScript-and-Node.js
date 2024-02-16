var guestList = ["Hamza", "Usman", "Ayesha", "Areeba"];
var cantMakeIt = guestList[1];
console.log(cantMakeIt, "can't make it to dinner.");
guestList.splice(1, 1, "Ali");
guestList.forEach(function (guest) {
    console.log("Assalam 0 Alaikum Dear ".concat(guest, ", I would like to invite you to dinner with me"));
});
