"use strict";

// Hoisting

// Variables
// console.log(firstname);
// // console.log(job);
// // console.log(birthYear);

// var firstname = "Nikita";
// let job = "developer";
// const birthYear = 1991;

// // Functions

// console.log(decSum(1, 2));
// // console.log(exprSum(1, 2));
// // console.log(arrSum(1, 2));

// function decSum(a, b) {
// 	return a + b;
// }

// const exprSum = function (a, b) {
// 	return a + b;
// };

// var arrSum = (a, b) => a + b;

// // Example

// console.log(isUserValid);

// if (!isUserValid) {
// 	deleteUser();
// }

// var isUserValid = true;

// function deleteUser() {
// 	console.log("User is deleted");
// }

// var a = 1;
// let b = 2;
// const c = 3;

// console.log(a === window.a);
// console.log(b === window.b);
// console.log(c === window.c);

/*******************************************************************/
// // this keyword

// // console.log(this);

// const getAge = function (birthYear) {
// 	console.log(2023 - birthYear);
// 	console.log(this);
// };

// getAge(1991);

// const getAgeArr = (birthYear) => {
// 	console.log(2023 - birthYear);
// 	console.log(this);
// };

// getAgeArr(1991);

// const user187 = {
// 	birthYear: 1991,
// 	getAge: function () {
// 		console.log(this);
// 		console.log(2023 - this.birthYear);
// 	},
// };

// user187.getAge();

// const user188 = {
// 	birthYear: 1993,
// };

// user188.getAge = user187.getAge;
// user188.getAge();

// const f = user187.getAge;
// // f();

/******************************************************************/

// // Regular VS Arrow Functions

// // var firsName = "Jack";

// const user187 = {
// 	firstName: "Nikita",
// 	birthYear: 1991,
// 	getAge: function () {
// 		console.log(this);
// 		console.log(2023 - this.birthYear);

// 		// Old approach
// 		// const self = this; // self or that
// 		// const isAdult = function () {
// 		// 	console.log(self);
// 		// 	// console.log(2023 - this.birthYear >= 18);
// 		// 	console.log(2023 - self.birthYear >= 18);
// 		// };

// 		// New approach after ES6
// 		const isAdult = () => {
// 			console.log(this);
// 			console.log(2023 - this.birthYear >= 18);
// 		};

// 		isAdult();
// 	},
// 	sayGreeting: function () {
// 		// console.log(this);
// 		console.log(`Hello, I'm ${this.firsName}`);
// 	},
// };

// user187.sayGreeting();
// user187.getAge();
// // console.log(this.firsName);

// /*********************************************************************/

// // Arguments keyword
// const exprSum = function (a, b) {
// 	console.log(arguments);
// 	return a + b;
// };

// exprSum(1, 2);
// exprSum(1, 2, 3, 4, 6, 8, 51);

// var arrSum = (a, b) => {
// 	console.log(arguments);
// 	return a + b;
// };

// arrSum(7, 19, 43);

/**********************************************************************************************************************************************/

// // Primitives VS Reference Types

// let a = 1;
// let b = 1;
// a = 2;
// console.log(a);
// console.log(b);

// const x = {
// 	foo: "bar",
// 	a: 1,
// };

// const y = x;
// y.a = 2;

// console.log("Object x: ", x);
// console.log("Object y: ", y);

// Primitives
let lastName = "Brown";
let oldLastName = lastName;
lastName = "White";
console.log(lastName, oldLastName);

// Objects
const jane = {
	firstName: "Jane",
	lastName: "Brown",
	age: 21,
};

const marriedJane = jane;
marriedJane.lastName = "White";
console.log("Jane: ", jane);
console.log("Married Jane: ", marriedJane);

// marriedJane = {};

// Objects copying

const sara = {
	firstName: "Jane",
	lastName: "Brown",
	age: 21,
	familyMemebres: ["Jack", "Bob", "Greta"],
};

const saraCopy = Object.assign({}, sara);
saraCopy.lastName = "White";
saraCopy.familyMemebres.push("Bill", "Marta");

console.log("Sara: ", sara);
console.log("Married Sara: ", saraCopy);
