"use strict";

const currencies = new Map([
	["USD", "United States dollar"],
	["EUR", "Euro"],
	["CNY", "Chinese yuan"],
]);

const transactions = [300, 250, -500, 5000, -750, -100, 50, 1400, -350, -120];

//////////////////////////////////////////////////////////////////////////

// // SIMPLE ARRAYS METHODS

// let letters = ["a", "b", "c", "d", "e", "f"];
// let letters1 = ["g", "h", "i"];

// // slice() Method  // Does not change the original array, returns a new array
// console.log(letters.slice(1));
// console.log(letters.slice(1, 4));
// console.log(letters.slice(-1));
// console.log(letters.slice(-3));
// console.log(letters.slice(-3, -1));
// console.log(letters.slice(3, -1));
// console.log(letters.slice());
// console.log(...letters);

// // splice() Method  // Change the original array
// console.log(letters.splice(1));
// letters.splice(-1);
// letters.splice(1, 3);

// // reverse() Method  // Change the original array
// console.log(letters.reverse());

// // concat() Method  // Does not change the original array, returns a new array
// console.log(letters.concat(letters1));
// console.log([...letters, ...letters1]);

// // join() Method
// console.log(letters.join(", "));

// console.log(letters);
