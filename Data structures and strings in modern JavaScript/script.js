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

// STRINGS

const airLine = "SkyUp AirLine";
const airplane = "Boeing 737";

console.log(airplane[0]);
console.log(airplane[1]);
console.log(airplane[2]);
console.log("SkyUp"[0]);

console.log(airLine.length);
console.log("Boeing 737".length);

// Methods indexOf, lastIndexOf
console.log(airplane.indexOf(" "));
console.log(airplane.indexOf("7"));
console.log(airplane.lastIndexOf("7"));
console.log(airLine.indexOf("Up"));
console.log(airLine.indexOf("up"));

// Method slice
console.log(airplane.slice(7));
console.log(airplane);
console.log(airplane.slice(0, 6));
console.log(airLine.slice(0, airLine.indexOf(" ")));
console.log(airLine.slice(airLine.lastIndexOf(" ") + 1));

console.log(airLine.slice(-2));
console.log(airLine.slice(2, -2));

const checkMiddleSeat = function (seat) {
	// B and E are middle seats
	const seatLetter = seat.slice(-1);
	if (seatLetter === "B" || seatLetter === "E") {
		console.log("This is a middle seat");
	} else {
		console.log("This is not a middle seat");
	}
};

checkMiddleSeat("21A");
checkMiddleSeat("7B");
checkMiddleSeat("14E");

const x = new String("Hello!");
console.log(typeof x);
console.log(typeof x.slice(2));

// Fix the passenger name (Methods toLowerCase, toUpperCase)
console.log(airLine.toLowerCase());
console.log(airLine.toUpperCase());
const passengerName = "liNDa"; // Linda
const passengerNameLower = passengerName.toLowerCase();
const passengerNameFixed =
	passengerNameLower[0].toUpperCase() + passengerNameLower.slice(1);
console.log(passengerNameFixed);

// Email validation (Trim method)
const email = "someemail@gmail.com";
const loginEmail = "   SomeEmail@Gmail.com \n";

const emailLower = loginEmail.toLowerCase();
const emailTrimde = emailLower.trim();
console.log(emailTrimde);

const emailNormalized = loginEmail.toLowerCase().trim();
console.log(emailNormalized);
console.log(email === emailNormalized);

// Replacing (Replace method)
const ticketPriceEU = "197,23#";
const ticketPriceUS = ticketPriceEU.replace(",", ".").replace("#", "$");
console.log(ticketPriceUS);

const announcement =
	"All pasengers of flights EG234 come to boarding door 18. Boarding door 18!";
console.log(announcement.replaceAll("door", "gate")); // New approach

console.log(announcement.replace(/door/g, "gate")); // Old approach

// Methods return boolean (startsWith, endsWith, includes)
console.log(airplane);
console.log(airplane.includes("737"));
console.log(airplane.includes("739"));

console.log(airplane.startsWith("Bo"));
console.log(airplane.startsWith("Bt"));
console.log(airplane.startsWith("737"));

console.log(airplane.endsWith("737"));
console.log(airplane.endsWith(" 737"));
console.log(airplane.endsWith("Boeing"));

const airplane1 = "AirBus";

if (airplane.startsWith("Boeing")) {
	console.log("You gonna fly on Boeing");
}

if (airplane1.startsWith("Boeing")) {
	console.log("You gonna fly on Boeing");
} else {
	console.log("You gonna fly on AirBus");
}

// Example
const checkLuggage = function (luggage) {
	const luggageLower = luggage.toLowerCase();
	if (luggageLower.includes("knife") || luggageLower.includes("gun")) {
		console.log("You are not allowed on board!");
	} else {
		console.log("Welcome to the board!");
	}
};

checkLuggage("Food, jeans, sokcs and Swiss Knife");
checkLuggage("Laptop and food");
checkLuggage("Camera, food, Gun for protection");

// Split method
console.log("My+name+is+Nikita!".split("+"));
console.log("Nikita Lyhovskiy".split(" "));

const [firsName, lastName] = "Nikita Lyhovskiy".split(" ");
console.log(firsName, lastName);

// Join method
console.log(["Mr.", firsName, lastName.toUpperCase()].join(" "));

const capitalizeName = function (name) {
	const names = name.split(" ");
	const namesCapitalize = [];
	for (const n of names) {
		// namesCapitalize.push(n[0].toUpperCase() + n.slice(1));
		namesCapitalize.push(n.replace(n[0], n[0].toUpperCase()));
	}
	const capitalizedFullName = namesCapitalize.join(" ");
	return capitalizedFullName;
};

console.log(capitalizeName("nikita lyahovskiy"));
console.log(capitalizeName("jack white tiger jr."));

// Padding (padStart, padEnd methods)
const message = "Hi there!";
console.log(message.padStart(20, "*").padEnd(30, "*"));

const maskCreditCard = function (cardNumber) {
	const strCardNumber = cardNumber + "";
	const last4 = strCardNumber.slice(-4);
	return last4.padStart(strCardNumber.length, "*");
};

console.log(maskCreditCard(1415313513513513));
console.log(maskCreditCard("7358723981537581039512462621"));

// Repeat method
const greeting = "Hi";
console.log(greeting.repeat(50));

const howMuchYouLoveSomebody = function (loveNumber) {
	console.log(`I love you ${"# ".repeat(loveNumber)}`);
};

howMuchYouLoveSomebody(100);

/************************************************************************************************************************************************** */

// // MAP. ITERATION

// const question = new Map([
// 	["question", "What is the most popular programmig language for front-end?"],
// 	[1, "JavaScript"],
// 	[2, "Java"],
// 	[3, "Python"],
// 	["correctAnswer", 1],
// 	[true, "Correct answer :D"],
// 	[false, "This is incorrect :( Try again"],
// ]);

// console.log(question);

// // Quiz app
// console.log(question.get("question"));

// for (const [key, value] of question) {
// 	if (typeof key === "number") {
// 		console.log(`${key}: ${value}`);
// 	}
// }

// // const answer = Number(prompt("Choose the option number"));
// // // console.log(answer);
// // const correctAnswer = question.get("correctAnswer");
// // // console.log(correctAnswer);
// // console.log(question.get(answer === correctAnswer));

// // Converting objects to maps
// console.log(Object.entries(workingHours));
// const workingHoursMap = new Map(Object.entries(workingHours));
// console.log(workingHoursMap);

// // Converting maps to arrays
// console.log([...question]);

// console.log(question.entries());
// console.log([...question.keys()]);
// console.log([...question.values()]);

/************************************************************************************************************************************************* */

// // MAP BASIC

// const restaurant = new Map();
// restaurant.set("name", "McDonald's");
// restaurant.set(1, "London, England");
// restaurant.set(2, "Paris, France");
// restaurant.set(3, "Kiev, Ukraine");
// console.log(restaurant);

// restaurant
// 	.set("categories", ["Japanese", "Sushi", "Vegetarian", "Organic"])
// 	.set("open", 10)
// 	.set("close", 23)
// 	.set(true, "McDonald's is open :)")
// 	.set(false, "McDonald's is closed :(");

// console.log(restaurant.get("name"));
// console.log(restaurant.get(true));
// console.log(restaurant.get(3));

// const time = 22;
// console.log(
// 	restaurant.get(
// 		time > restaurant.get("open") && time < restaurant.get("close")
// 	)
// );

// console.log(restaurant.has("categories"));
// restaurant.delete(1);
// // restaurant.clear();
// const arr = [1, 2, 3];
// restaurant.set(arr, "Hello!");
// restaurant.set(document.querySelector("h2"), "Heading");
// console.log(restaurant);
// console.log(restaurant.size);
// console.log(restaurant.get(arr));

/************************************************************************************************************************************************* */

// // SET

// const orders = new Set([
// 	"Sushi",
// 	"Ramen",
// 	"Sushi",
// 	"Tempura",
// 	"Ramen",
// 	"Sushi",
// ]);
// console.log(orders);

// console.log(new Set("Hello!"));
// console.log(new Set());
// console.log(orders.size);

// console.log(orders.has("Sushi"));
// console.log(orders.has("Pizza"));

// orders.add("Edamame");
// orders.add("Edamame");

// orders.delete("Tempura");
// // orders.clear();

// console.log(orders);

// for (const order of orders) {
// 	console.log(order);
// }

// // Remove duplicates
// const mealIngridients = [
// 	"Rice",
// 	"Pepper",
// 	"Garlic",
// 	"Pepper",
// 	"Garlic",
// 	"Meat",
// 	"Meat",
// 	"Garlic",
// ];

// console.log(new Set(mealIngridients).size);
// console.log(new Set("Nikita Lyahovskiy").size);

// const mealIngridientsSet = new Set(mealIngridients);
// console.log(mealIngridientsSet);

// const mealIngridientsUnique = [...mealIngridientsSet];
// console.log(mealIngridientsUnique);

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
