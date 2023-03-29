"use strict";

///////////////////////////////////////////////////////////////////////////

// Functions-constructor and Operator new

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

///////////////////////////////////////////////////////////////////////////

// Prototypes

console.log(Person.prototype);

Person.prototype.printAge = function () {
	console.log(2023 - this.birthYear);
};

nikita.printAge();
mary.printAge();
john.printAge();

console.log(nikita.__proto__);
console.log(nikita.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(mary));
console.log(Person.prototype.isPrototypeOf(john));
console.log(Person.prototype.isPrototypeOf(Person));

Person.prototype.creatureClass = "Mammal";
console.log(mary, john);
console.log(mary.hasOwnProperty("birthYear"));
console.log(mary.hasOwnProperty("creatureClass"));

///////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
