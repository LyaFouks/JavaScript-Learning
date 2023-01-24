// Don't Repeat yourself ||  DRY

'use strict';

// function printText() {
//    console.log('Hello to everyone!');
// }

// printText(111);
// printText();
// printText();
// printText();
// printText();

function colorizer(item, color, colorCode) {
   // console.log(item, color);
   const colorizedItem = `The ${item} is ${color}. The code of color is ${colorCode}`;
   // console.log(colorizedItem);
   return colorizedItem;
}


const messageFromColorizer = colorizer('desk', 'red', 99);
console.log(`We have the following message: ${messageFromColorizer}`);

const messageFromColorizer2 = colorizer('hand', 'green', 10);
console.log(`We have the following message: ${messageFromColorizer2}`);
