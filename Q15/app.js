// List of people to invite to dinner
var guestList = ['maliha', 'alishba', 'laiba'];
// Someone can't make it
var cannotAttend = guestList.splice(1, 1)[0];
console.log("Unfortunately," + cannotAttend + "" + "can't make it to dinner.\n");
// Replace with new guest
var newGuest = 'uroj';
guestList.splice(1, 0, newGuest);
// Second set of invitation messages
for (var i = 0; i < guestList.length; i++) {
    console.log(guestList[i] + " - " + "i am inviting you at my house for dinner" + "<br>");
}
;
