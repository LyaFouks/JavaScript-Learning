"use strict";
/************************************************************************* */
/************************************************************************* */

/************************************************************************* */
/************************************************************************* */
/************************************************************************* */
/************************************************************************* */
/************************************************************************* */

// Passing arguments. Values and References

const flightNumber = "BV234";
const passenger1145 = {
	firstName: "Jack",
	lastName: "Brown",
	passport: 128490,
};

const checkIn = function (flight, passenger) {
	flight = "bv234";
	passenger.firstName = passenger.firstName.toLowerCase();
	passenger.lastName = passenger.lastName.toLowerCase();

	if (passenger.passport === 128490) {
		alert("Welcome to the board!");
	} else {
		alert("Incorect passport!");
	}
};

checkIn(flightNumber, passenger1145);
console.log(flightNumber);
console.log(passenger1145);

// This is the same as doing it
const flight = flightNumber;
const passenger = passenger1145;

const changePassportNumber = function (person) {
	person.passport = Math.trunc(Math.random() * 1000000);
};

changePassportNumber(passenger1145);
checkIn(flightNumber, passenger1145);

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
