// List of people to invite to dinner
const guestList: string[] = ['maliha', 'alishba', 'laiba'];
// Someone can't make it
const cannotAttend: string = guestList.splice(1, 1)[0];
console.log("Unfortunately,"+ cannotAttend +"" +"can't make it to dinner.\n");
// Replace with new guest
const newGuest: string = 'uroj';
guestList.splice(1, 0, newGuest);
// Second set of invitation messages
for (var i = 0; i < guestList.length; i++) {
    console.log(guestList[i] + " - " + "i am inviting you at my house for dinner" + "<br>");
}
;
