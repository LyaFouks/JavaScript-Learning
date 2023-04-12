"use strict";

///////////////////////////////////////////////////////////////////////////

// // Functions-constructor and Operator new

// const Person = function (firstName, birthYear) {
// 	// Instance properties - свойство экземпляра
// 	this.firstName = firstName;
// 	this.birthYear = birthYear;

// 	// // Never do it!!!
// 	// this.printAge = function () {
// 	// 	console.log(2023 - this.birthYear);
// 	// };
// };

// const nikita = new Person("Nikita", 1991);
// console.log(nikita);

// // 1. Creating new empty object {}
// // 2. Function is called, this = {}
// // 3. {} connects with prototype
// // 4. The function automatically returns {}

// const mary = new Person("Mary", 2000);
// const john = new Person("John", 1995);
// console.log(mary, john);

// const jack = "Jack";

// console.log(mary instanceof Person);
// console.log(jack instanceof Person);

///////////////////////////////////////////////////////////////////////////

// // Prototypes

// console.log(Person.prototype);

// Person.prototype.printAge = function () {
// 	console.log(2023 - this.birthYear);
// };

// nikita.printAge();
// mary.printAge();
// john.printAge();

// console.log(nikita.__proto__);
// console.log(nikita.__proto__ === Person.prototype);

// console.log(Person.prototype.isPrototypeOf(mary));
// console.log(Person.prototype.isPrototypeOf(john));
// console.log(Person.prototype.isPrototypeOf(Person));

// Person.prototype.creatureClass = "Mammal";
// console.log(mary, john);
// console.log(mary.hasOwnProperty("birthYear"));
// console.log(mary.hasOwnProperty("creatureClass"));

///////////////////////////////////////////////////////////////////////////

// // Prototype Inheritance for built-in Objectcs

// // Person.prototype
// console.log(nikita.__proto__);

// // Object.prototype - верхушка цепи прототипов
// console.log(nikita.__proto__.__proto__);

// // null
// console.log(nikita.__proto__.__proto__.__proto__);

// console.log(Person.prototype.constructor);
// console.dir(Person.prototype.constructor);

// const numbers = [3, 5, 7, 9, 4, 3, 7, 6, 7, 9];
// console.log(numbers.__proto__);
// console.log(Object.getPrototypeOf(numbers));
// console.log(numbers.__proto__ === Array.prototype);
// console.log(numbers.__proto__.__proto__);

// Array.prototype.uniqueElements = function () {
// 	return [...new Set(this)];
// };

// console.log(numbers.uniqueElements());

// const h2 = document.querySelector("h2");
// console.dir(h2);

// console.log((n) => n * 2);
///////////////////////////////////////////////////////////////////////////

// // ES6 Classes

// // // Class expression
// // const Person = class {

// // }

// // Class declaration
// class Person {
// 	constructor(firstName, birthYear) {
// 		this.firstName = firstName;
// 		this.birthYear = birthYear;
// 	}

// 	// Методы добавляются в свойство .prototype
// 	printAge() {
// 		console.log(2023 - this.birthYear);
// 	}

// 	greet() {
// 		console.log(`Hello! My name is ${this.firstName}`);
// 	}
// }

// const jack = new Person("Jack", 2000);
// console.log(jack);
// jack.printAge();
// console.log(jack.__proto__ === Person.prototype);
// console.log(Object.getPrototypeOf(jack) === Person.prototype);

// // Person.prototype.greet = function () {
// // 	console.log(`Hello! My name is ${this.firstName}`);
// // };

// jack.greet();

// // 1. Классы не поднимаются при помощи hoisting
// // 2. Классы являются "first class citizens"
// // 3. Тело класса выполняется в strict режиме

///////////////////////////////////////////////////////////////////////////

// // Setters & Getters

// // const account = {
// // 	owner: "Nikita",
// // 	transactions: [300, 500, -200, 1000],

// // 	lastTransaction() {
// // 		return this.transactions.slice(-1).pop();
// // 	},
// // };

// // console.log(account.lastTransaction());

// const account = {
// 	owner: "Nikita",
// 	transactions: [300, 500, -200, 1000],

// 	get lastTransaction() {
// 		return this.transactions.slice(-1).pop();
// 	},

// 	set lastTransaction(trans) {
// 		this.transactions.push(trans);
// 	},
// };

// console.log(account.lastTransaction);
// account.lastTransaction = 100;
// console.log(account.transactions);

// class Person {
// 	constructor(fullName, birthYear) {
// 		this.fullName = fullName;
// 		this.birthYear = birthYear;
// 	}

// 	// Методы добавляются в свойство .prototype
// 	printAge() {
// 		console.log(2023 - this.birthYear);
// 	}

// 	greet() {
// 		console.log(`Hello! My name is ${this.fulltName}`);
// 	}

// 	get age() {
// 		return 2023 - this.birthYear;
// 	}

// 	// Установить значение в уже существующее свойсвто
// 	set fullName(name) {
// 		console.log(name);
// 		if (name.includes(" ")) {
// 			this._fullName = name;
// 		} else {
// 			alert("Full name have to includes name and last name");
// 		}
// 	}

// 	get fullName() {
// 		return this._fullName;
// 	}
// }

// const jack = new Person("Jack White", 2000);
// console.log(jack);

// const jane = new Person("Jane Red", 2002);
// console.log(jane);

///////////////////////////////////////////////////////////////////////////

// // Static Methods

// // const Person = function (firstName, birthYear) {
// // 	// Instance properties - свойство экземпляра
// // 	this.firstName = firstName;
// // 	this.birthYear = birthYear;

// // 	// // Never do it!!!
// // 	// this.printAge = function () {
// // 	// 	console.log(2023 - this.birthYear);
// // 	// };
// // };

// // Person.highFive = function () {
// // 	console.log("High Five!");
// // };

// // Person.prototype.highFive = function () {
// // 	console.log("High Five!");
// // };

// class Person {
// 	constructor(firstName, birthYear) {
// 		this.firstName = firstName;
// 		this.birthYear = birthYear;
// 	}

// 	// Методы добавляются в свойство .prototype
// 	printAge() {
// 		console.log(2023 - this.birthYear);
// 	}

// 	greet() {
// 		console.log(`Hello! My name is ${this.firstName}`);
// 	}

// 	// Статический метод
// 	static highFive() {
// 		console.log("High Five!");
// 	}
// }

// Person.highFive();

// const jack = new Person("Jack", 1992);

// // jack.highFive();

///////////////////////////////////////////////////////////////////////////

// // Object.create()

// const PersonProto = {
// 	printAge() {
// 		console.log(2023 - this.birthYear);
// 	},

// 	initPerson(firstName, birthYear) {
// 		this.firstName = firstName;
// 		this.birthYear = birthYear;
// 	},
// };

// const jack = Object.create(PersonProto);
// console.log(jack);

// jack.name = "Jack";
// jack.birthYear = 2000;

// jack.printAge();

// console.log(Object.getPrototypeOf(jack) === PersonProto);

// const jane = Object.create(PersonProto);
// jane.initPerson("Jane", 2002);
// jane.printAge();

///////////////////////////////////////////////////////////////////////////

// // Inheritance of "Classes". Constructor Functions

// const Person = function (firstName, birthYear) {
// 	this.firstName = firstName;
// 	this.birthYear = birthYear;
// };

// Person.prototype.printAge = function () {
// 	console.log(2023 - this.birthYear);
// };

// const Student = function (firstName, birthYear, dept) {
// 	Person.call(this, firstName, birthYear);
// 	this.dept = dept;
// };

// // Связываем прототипы
// Student.prototype = Object.create(Person.prototype);

// Student.prototype.introduce = function () {
// 	console.log(
// 		`My name is ${this.firstName} and I study at the "${this.dept}" department`
// 	);
// };

// const jack = new Student("Jack", 2000, "Programming");
// console.log(jack);
// jack.introduce();
// jack.printAge();

// console.log(jack.__proto__);
// console.log(Object.getPrototypeOf(jack));

// console.log(jack instanceof Student);
// console.log(jack instanceof Person);
// console.log(jack instanceof Object);

// Student.prototype.constructor = Student;
// console.dir(Student.prototype.constructor);
///////////////////////////////////////////////////////////////////////////

// Inheritance of "Classes". ES6 Classes

class Person {
	constructor(fullName, birthYear) {
		this.fullName = fullName;
		this.birthYear = birthYear;
	}

	// Методы добавляются в свойство .prototype
	printAge() {
		console.log(2023 - this.birthYear);
	}

	greet() {
		console.log(`Hello! My name is ${this.fullName}`);
	}

	get age() {
		return 2023 - this.birthYear;
	}

	// Установить значение в уже существующее свойство
	set fullName(name) {
		console.log(name);
		if (name.includes(" ")) {
			this._fullName = name;
		} else {
			alert("Full name have to includes name and last name");
		}
	}

	get fullName() {
		return this._fullName;
	}

	static highFive() {
		console.log("High Five!");
	}
}

class Student extends Person {
	constructor(fullName, birthYear, dept) {
		// Обязательно записать в самом начале!
		super(fullName, birthYear);
		this.dept = dept;
	}

	introduce() {
		console.log(
			`My name is ${this.fullName} and I study at the "${this.dept}" department`
		);
	}

	greet() {
		console.log(`Привет! Меня зовут ${this.fullName} и я студент!`);
	}
}

const jack = new Student("Jack White", 2001, "Programming");
console.log(jack);

jack.introduce();
jack.printAge();
jack.greet();
///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
