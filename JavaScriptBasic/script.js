// AND, OR, NOT

// AND &&
// console.log(true && true); //true
// console.log(true && false); //false
// console.log(false && false); // false

// OR ||
// console.log(true || true); //true
// console.log(true || false); //true
// console.log(false || false); //false

// NOT !
// console.log(!true); //false
// console.log(!false); //true


// const hasMoney = true;
// const isAdult = false;

// if(hasMoney && isAdult) {
//    console.log('You can buy the drink.');
// } else {
//    console.log('You can not buy the drink.');
// }


// const hasMoney = false;
// const withParent = false;

// if(hasMoney || withParent) {
//    console.log('You can buy the orange.');
// } else {
//    console.log('You can not buy the orange.');
// }


const hasMoney = true;
const isAdult = true;
const isCompletelyDrunk = true;

if(hasMoney && isAdult && !isCompletelyDrunk) {
   console.log('You can buy the drink.');
} else {
   console.log('You can not buy the drink.');
}