const color1 = 'red';
const color2 = 'orange';
const color3 = 'yellow';
const color4 = 'green';
const color5 = 'blue';
const color6 = 'indigo';
const color7 = 'violet';
console.log(color2);


const rainbowColors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

rainbowColors[5] = 'dark blue';
rainbowColors[rainbowColors.length] = 'indigo';
console.log(rainbowColors);
console.log(`The sky is ` + rainbowColors[4]);


const stringNumbers = [];
stringNumbers[0] = 'one';
stringNumbers[1] = 'two';
stringNumbers[2] = 'three';
console.log(stringNumbers);


const stringNumbers2 = new Array('one', 'two', 'three');
console.log(stringNumbers2);



const numbers = [32, 2, 65, 123];
console.log(numbers);



const anyItems = [4, true, new Date(), 'something'];
console.log(anyItems);