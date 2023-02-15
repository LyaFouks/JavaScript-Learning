"use strict";
/************************************************************************* */
/************************************************************************* */

/************************************************************************* */
/************************************************************************* */
/************************************************************************* */

// FUNCTIONS ACCEPTING CALLBACK FUNCTIONS

const removeSpaces = function (text) {
	return text.replace(/ /g, "").toLowerCase();
};

const upperFirstWord = function (text) {
	const [first, ...others] = text.split(" ");
	return [first.toUpperCase(), ...others].join(" ");
};

// High-Order function
const converter = function (str, func) {
	console.log(`The original text: ${str}`);
	console.log(`The converted text: ${func(str)}`);

	console.log(`Converted by: ${func.name}`);
};

converter("Hello to everyone!", upperFirstWord);
converter("Hello to everyone!", removeSpaces);

// Callback functions are very common in JS
const twice = (num) => console.log(num * 2);

[1, 2, 3].forEach(twice);

/************************************************************************* */

// FIRST CLASS FUNCTIONS and HIGH ORDER FUNCTIONS

/************************************************************************* */

// // PASSING AURGUMENST. VALUES AND REFERENCES

// const flightNumber = "BV234";
// const passenger1145 = {
// 	firstName: "Jack",
// 	lastName: "Brown",
// 	passport: 128490,
// };

// const checkIn = function (flight, passenger) {
// 	flight = "bv234";
// 	passenger.firstName = passenger.firstName.toLowerCase();
// 	passenger.lastName = passenger.lastName.toLowerCase();

// 	if (passenger.passport === 128490) {
// 		alert("Welcome to the board!");
// 	} else {
// 		alert("Incorect passport!");
// 	}
// };

// checkIn(flightNumber, passenger1145);
// console.log(flightNumber);
// console.log(passenger1145);

// // This is the same as doing it
// const flight = flightNumber;
// const passenger = passenger1145;

// const changePassportNumber = function (person) {
// 	person.passport = Math.trunc(Math.random() * 1000000);
// };

// changePassportNumber(passenger1145);
// checkIn(flightNumber, passenger1145);

/************************************************************************* */

// // DEFAULT OPTIONS

// const bookings = [];

// const makeBooking = function (
// 	flightNum,
// 	passengersNum = 1,
// 	price = 99 * passengersNum
// ) {
// 	// Before ES6
// 	// passengersNum = passengersNum || 1;
// 	// price = price || 99;
// 	const booking = {
// 		flightNum,
// 		passengersNum,
// 		price,
// 	};
// 	console.log(booking);
// 	bookings.push(booking);
// };

// makeBooking("QE123");
// makeBooking("TU235", 3, 390);
// makeBooking("TU235", 1);
// makeBooking("TU235", 4);
// makeBooking("TU215", undefined, 400);

/************************************************************************* */
