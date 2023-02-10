"use strict";

const japaneseRestaurant = {
	name: "Banzai",
	location: "108 Markham Woods Rd, Longwood, USA",
	categories: ["Japanese", "Sushi", "Vegetarian", "Organic"],
	appetizers: ["Seaweed salad", "Tempura shrimp", "Edamame", "Sushi rice"],
	mainMenu: ["Sushi", "Ramen", "Tempura"],
	workingHours: {
		wed: {
			open: 10,
			close: 23,
		},
		fri: {
			open: 10,
			close: 23,
		},
		sun: {
			open: 12,
			close: 23,
		},
	},
	ordeFood: function (appetizersIndex, mainMenuIndex) {
		return [this.appetizers[appetizersIndex], this.mainMenu[mainMenuIndex]];
	},
	foodDelivery: function ({
		mainMenuIndex = 0,
		appetizersIndex = 0,
		adress,
		deliveryTime = "18:00",
	}) {
		console.log(
			`Your order on the way to you! ${this.appetizers[appetizersIndex]} and ${this.mainMenu[mainMenuIndex]} will be arrived to ${adress} at ${deliveryTime}`
		);
	},
	orderSushi: function (ing1, ing2, ing3) {
		console.log(`You have order sushi with ${ing1}, ${ing2}, ${ing3}`);
	},
};

/************************************************************************************************************************************************* */

// // Spread operator

// // Old bad approach
// const arr = [1, 3, 5];
// const newArr = [7, 9, arr[0], arr[1], arr[2]];
// console.log(newArr);

// // New approach with spread operator
// const newArrSpread = [7, 9, ...arr];
// console.log(newArrSpread);
// console.log(...newArrSpread);

// const newMenu = [...japaneseRestaurant.mainMenu, "Miso Salmon"];
// console.log(newMenu);

// // Array copying
// const categoriesCopy = [...japaneseRestaurant.categories];

// // Merge arrays
// const bothMenu = [
// 	...japaneseRestaurant.appetizers,
// 	...japaneseRestaurant.mainMenu,
// ];
// console.log(bothMenu);

// // Iterable - arrays, strings, maps, sets. OBJECTS AREN'T ITERABLE.

// // Spread operator with strings
// const greeting = "Hey";
// const greetingLetters = [...greeting, " ", "!"];
// console.log(greetingLetters);
// console.log(...greetingLetters);
// // console.log(`${...greeting}`); // Can't do this!!!

// const ingridients = [
// 	prompt(`Ingridient 1 for your sushi?`),
// 	prompt(`Ingridient 2 for your sushi?`),
// 	prompt(`Ingridient 3 for your sushi?`),
// ];
// console.log(ingridients);

// japaneseRestaurant.orderSushi(...ingridients);

// Objects
const newJapaneseRestaurant = {
	foundationDate: 2011,
	...japaneseRestaurant,
	owner: "Suzuki",
};
console.log(newJapaneseRestaurant);

const japaneseRestaurantCopy = { ...japaneseRestaurant };
japaneseRestaurantCopy.name = "Suzuki Sushi";
console.log(japaneseRestaurant.name);
console.log(japaneseRestaurantCopy.name);

/************************************************************************************************************************************************* */

// // Destructuring Objects

// japaneseRestaurant.foodDelivery({
// 	deliveryTime: "12:30",
// 	adress: "10 Markham Woods Rd",
// 	mainMenuIndex: 0,
// 	appetizersIndex: 1,
// });

// japaneseRestaurant.foodDelivery({
// 	adress: "10 Markham Woods Rd",
// });

// const { workingHours: hours, name: resName, categories } = japaneseRestaurant;
// console.log(hours, resName, categories);

// // Default values
// const { menu = [], appetizers: starterMenu = [] } = japaneseRestaurant;
// console.log(menu, starterMenu);

// // Mutating variables
// let x = 3;
// let y = 5;
// const object = { x: 11, y: 22, z: 33 };

// ({ x, y } = object);
// console.log(x, y);

// // Nested objects
// const {
// 	sun: { open: openHours, close: closeHours },
// } = hours;
// console.log(openHours, closeHours);

/************************************************************************************************************************************************* */

// // Destructuring Arrays

// const arr = [3, 5, 7];
// const x1 = arr[0];
// const x2 = arr[1];
// const x3 = arr[2];

// const [y1, y2, y3] = arr;
// console.log(y1, y2, y3);

// const [category1, , category3] = japaneseRestaurant.categories;
// console.log(category1, category3);

// let [main, , secondary] = japaneseRestaurant.categories;
// console.log(main, secondary);

// // Swaping variables
// // const temp = main;
// // main = secondary;
// // secondary = temp;
// // console.log(main, secondary);

// [secondary, main] = [main, secondary];
// console.log(main, secondary);

// // Returning 2 values from function
// const [appetizer, mainFood] = japaneseRestaurant.ordeFood(2, 1);
// console.log(appetizer, mainFood);

// // Nested distructuring
// // const nestedArr = [1, 2, [7, 9]];
// // const [first, , third] = nestedArr;
// // const [one, two] = third;
// // console.log(first, third);
// // console.log(one, two);

// const nestedArr = [1, 2, [7, 9]];
// const [f, , [e, j]] = nestedArr;
// console.log(f, e, j);

// // Default values
// const unknownArr = [3, 5];

// const [s = 0, i = 0, g = 0] = unknownArr;
// console.log(s, i, g);

/************************************************************************************************************************************************* */
