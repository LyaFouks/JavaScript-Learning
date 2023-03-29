"use strict";

const Person = function (firstName, birthYear) {
	// Instance properties - свойство экземпляра
	this.firstName = firstName;
	this.birthYear = birthYear;

	// // Never do it!!!
	// this.printAge = function () {
	// 	console.log(2023 - this.birthYear);
	// };
};

const nikita = new Person("Nikita", 1991);
console.log(nikita);

// 1. Creating new empty object {}
// 2. Function is called, this = {}
// 3. {} connects with prototype
// 4. The function automatically returns {}

const mary = new Person("Mary", 2000);
const john = new Person("John", 1995);
console.log(mary, john);

const jack = "Jack";

console.log(mary instanceof Person);
console.log(jack instanceof Person);
