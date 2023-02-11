"use strict";

const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

const workingHours = {
	[weekdays[2]]: {
		open: 10,
		close: 23,
	},
	[weekdays[4]]: {
		open: 10,
		close: 23,
	},
	[weekdays[5]]: {
		open: 0,
		close: 24,
	},
	[weekdays[6]]: {
		open: 12,
		close: 23,
	},
};

const japaneseRestaurant = {
	name: "Banzai",
	location: "108 Markham Woods Rd, Longwood, USA",
	categories: ["Japanese", "Sushi", "Vegetarian", "Organic"],
	appetizers: ["Seaweed salad", "Tempura shrimp", "Edamame", "Sushi rice"],
	mainMenu: ["Sushi", "Ramen", "Tempura"],

	// Enhanced syntax of ES6 object literals
	workingHours,

	ordeFood(appetizersIndex, mainMenuIndex) {
		return [this.appetizers[appetizersIndex], this.mainMenu[mainMenuIndex]];
	},

	foodDelivery({
		mainMenuIndex = 0,
		appetizersIndex = 0,
		adress,
		deliveryTime = "18:00",
	}) {
		console.log(
			`Your order on the way to you! ${this.appetizers[appetizersIndex]} and ${this.mainMenu[mainMenuIndex]} will be arrived to ${adress} at ${deliveryTime}`
		);
	},

	orderSushi(ing1, ing2, ing3) {
		console.log(`You have order sushi with ${ing1}, ${ing2}, ${ing3}`);
	},

	orderRamen(noodle, ...otherIngr) {
		console.log(noodle);
		console.log(otherIngr);
	},
};

/************************************************************************************************************************************************* */

// // CYCLES AND OBJECTS

// // Property names
// const props = Object.keys(workingHours);
// console.log(props);
// console.log(`"Banzai" opens ${props.length} days in a week.`);

// for (const day of props) {
// 	console.log(day);
// }

// // Property values
// const values = Object.values(workingHours);
// console.log(values);

// // Property names and values
// const entries = Object.entries(workingHours);
// console.log(entries);

// for (const [day, { open, close }] of entries) {
// 	console.log(
// 		`Restaurant 'Banzai' on ${day} opens at ${open} and closes at ${close}`
// 	);
// }

/************************************************************************************************************************************************* */

// SET

const orders = new Set([
	"Sushi",
	"Ramen",
	"Sushi",
	"Tempura",
	"Ramen",
	"Sushi",
]);
console.log(orders);

console.log(new Set("Hello!"));
console.log(new Set());
console.log(orders.size);

console.log(orders.has("Sushi"));
console.log(orders.has("Pizza"));

orders.add("Edamame");
orders.add("Edamame");

orders.delete("Tempura");
// orders.clear();

console.log(orders);

for (const order of orders) {
	console.log(order);
}

// Remove duplicates
const mealIngridients = [
	"Rice",
	"Pepper",
	"Garlic",
	"Pepper",
	"Garlic",
	"Meat",
	"Meat",
	"Garlic",
];

console.log(new Set(mealIngridients).size);
console.log(new Set("Nikita Lyahovskiy").size);

const mealIngridientsSet = new Set(mealIngridients);
console.log(mealIngridientsSet);

const mealIngridientsUnique = [...mealIngridientsSet];
console.log(mealIngridientsUnique);

/************************************************************************************************************************************************* */

// // OPTIONAL CHAINING

// if (japaneseRestaurant.workingHours && japaneseRestaurant.workingHours.thu) {
// 	console.log(japaneseRestaurant.workingHours.thu.open);
// }

// // if (japaneseRestaurant.workingHours.fri) {
// // 	console.log(japaneseRestaurant.workingHours.fri.open);
// // }

// // Using optional chaining
// // Properties
// console.log(japaneseRestaurant.workingHours.thu?.open);

// console.log(japaneseRestaurant.workingHours?.thu?.open);

// const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
// for (const day of daysOfWeek) {
// 	console.log(day);
// 	const open = japaneseRestaurant.workingHours[day]?.open ?? "never";
// 	console.log(`On ${day} restaurant open at ${open}`);
// }

// // Methods
// console.log(japaneseRestaurant.ordeFood?.(1, 2) ?? "Method does not exist");

// console.log(japaneseRestaurant.order?.(1, 2) ?? "Method does not exist");

// // Arrays
// const posts = [
// 	{
// 		name: "Jazz is cool",
// 		username: "Ted",
// 	},
// 	{
// 		name: "Jazz is shit",
// 		username: "Dick",
// 	},
// ];
// const users = [];

// console.log(posts[1]?.name ?? "This post does not exist");
// console.log(posts[2]?.name ?? "This post does not exist");

// // Check if array is empty
// console.log(posts[0]?.name ?? "This array is empty");
// console.log(users[0]?.name ?? "This array is empty");

/************************************************************************************************************************************************* */

// // ENHANCED OBJECT LITERALS
// // Changes in the main object above

/************************************************************************************************************************************************* */

// // CYCLE FOR OF

// const menu = [...japaneseRestaurant.appetizers, ...japaneseRestaurant.mainMenu];

// for (const food of menu) {
// 	console.log(food);
// }

// for (const food of menu.entries()) {
// 	console.log(`${food[0] + 1}. ${food[1]}`);
// }

// for (const [index, food] of menu.entries()) {
// 	console.log(`${index + 1}. ${food}`);
// }

// // console.log([...menu.entries()]);

/************************************************************************************************************************************************* */

// // Nullish Coalescing operator

// japaneseRestaurant.guestsNumber = "";

// const guests = japaneseRestaurant.guestsNumber || 5;
// console.log(guests);

// // Nullish values: null and undefined (NOT 0 or '')
// const guests1 = japaneseRestaurant.guestsNumber ?? 5;
// console.log(guests1);

/************************************************************************************************************************************************* */

// // SHORT-CIRCUIT EVALUATION

// // OR (||) operator. Use any data types, return any data types, short-circuit evaluation
// console.log(5 || "Hello!");
// console.log("" || "Hello!");
// console.log(true || 0);
// console.log(undefined || null);

// console.log(undefined || "" || 0 || "Hey!" || 23 || null);

// japaneseRestaurant.guestsNumber = 0;

// const guests = japaneseRestaurant.guestsNumber
// 	? japaneseRestaurant.guestsNumber
// 	: 5;
// console.log(guests);

// const guests1 = japaneseRestaurant.guestsNumber || 5;
// console.log(guests1);

// // AND (&&) operator. Use any data types, return any data types, short-circuit evaluation
// console.log(0 && "Hello!");
// console.log(1 && "Hello!");
// console.log("hey" && 33 && 0 && 55 && null);

// if (japaneseRestaurant.orderRamen) {
// 	japaneseRestaurant.orderRamen("Something");
// }

// japaneseRestaurant.orderRamen && japaneseRestaurant.orderRamen("Something");

/************************************************************************************************************************************************* */

// // REST PATTERN

// // 1. Rest pattern with destructuring

// // Rest pattern with arrays
// // This is spread operator, because ... are on the right side of =
// const arr = [1, 2, ...[3, 5]];

// // This is rest pattern, because ... are on the left side of =
// const [a1, a2, ...items] = [1, 2, 3, 4];
// console.log(a1, a2, items);

// const [seaweed, , edamame, ...otherFood] = [
// 	...japaneseRestaurant.appetizers,
// 	...japaneseRestaurant.mainMenu,
// ];
// console.log(seaweed, edamame, otherFood);

// // Rest pattern with objects
// const { sat, sun, ...weekdays } = japaneseRestaurant.workingHours;
// console.log(sat, sun, weekdays);

// // 2. Rest pattern with functions

// const sum = function (...nums) {
// 	let sum = 0;
// 	for (let i = 0; i < nums.length; i++) {
// 		sum += nums[i];
// 	}
// 	console.log(sum);
// };

// sum(2, 5);
// sum(1, 4, 6, 8);

// const numbers = [3, 44, 2];

// sum(...numbers);

// japaneseRestaurant.orderRamen("Color Noodle", "Meat", "Banana", "Cabage");

/************************************************************************************************************************************************* */

// // SPREAD OPERATOR

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

// // Objects
// const newJapaneseRestaurant = {
// 	foundationDate: 2011,
// 	...japaneseRestaurant,
// 	owner: "Suzuki",
// };
// console.log(newJapaneseRestaurant);

// const japaneseRestaurantCopy = { ...japaneseRestaurant };
// japaneseRestaurantCopy.name = "Suzuki Sushi";
// console.log(japaneseRestaurant.name);
// console.log(japaneseRestaurantCopy.name);

/************************************************************************************************************************************************* */

// // DESTRUCTURING OBJECTS

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

// // DESTRUCTURING ARRAYS

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
