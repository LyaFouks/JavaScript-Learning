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
// this keyword

// console.log(this);

const getAge = function (birthYear) {
	console.log(2023 - birthYear);
	console.log(this);
};

getAge(1991);

const getAgeArr = (birthYear) => {
	console.log(2023 - birthYear);
	console.log(this);
};

getAgeArr(1991);

const user187 = {
	birthYear: 1991,
	getAge: function () {
		console.log(this);
		console.log(2023 - this.birthYear);
	},
};

user187.getAge();

const user188 = {
	birthYear: 1993,
};

user188.getAge = user187.getAge;
user188.getAge();

const f = user187.getAge;
// f();
