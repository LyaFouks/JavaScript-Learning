"use strict";

const japaneseRestaurant = {
	name: "Banzai",
	location: "108 Markham Woods Rd, Longwood, USA",
	categories: ["Japanese", "Sushi", "Vegetarian", "Organic"],
	appetizers: ["Seaweed salad", "Tempura shrimp", "Edamame", "Sushi rice"],
	mainMenu: ["Sushi", "Ramen", "Tempura"],

	ordeFood: function (appetizersIndex, mainMenuIndex) {
		return [this.appetizers[appetizersIndex], this.mainMenu[mainMenuIndex]];
	},
};

const arr = [3, 5, 7];
const x1 = arr[0];
const x2 = arr[1];
const x3 = arr[2];

const [y1, y2, y3] = arr;
console.log(y1, y2, y3);

const [category1, , category3] = japaneseRestaurant.categories;
console.log(category1, category3);

let [main, , secondary] = japaneseRestaurant.categories;
console.log(main, secondary);

// Swaping variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[secondary, main] = [main, secondary];
console.log(main, secondary);

// Returning 2 values from function
const [appetizer, mainFood] = japaneseRestaurant.ordeFood(2, 1);
console.log(appetizer, mainFood);

// Nested distructuring
// const nestedArr = [1, 2, [7, 9]];
// const [first, , third] = nestedArr;
// const [one, two] = third;
// console.log(first, third);
// console.log(one, two);

const nestedArr = [1, 2, [7, 9]];
const [f, , [e, j]] = nestedArr;
console.log(f, e, j);

// Default values
const unknownArr = [3, 5];

const [s = 0, i = 0, g = 0] = unknownArr;
console.log(s, i, g);
