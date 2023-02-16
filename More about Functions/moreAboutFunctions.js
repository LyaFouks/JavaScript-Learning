"use strict";
/************************************************************************* */
/************************************************************************* */

/************************************************************************* */

// CALL(), APPLY() and BIND() METHODS

// const book = function (flightNumber, passengerName) {
// 	console.log(
// 		`${passengerName} has booked a ticket on ${this.airLineName} flight ${this.iataCode}${flightNumber}`
// 	);
// 	this.bookings.push({
// 		flight: `${this.iataCode}${flightNumber}`,
// 		passengerName,
// 	});
// };

const airLine1 = {
	airLineName: "SkyUp",
	iataCode: "SU",
	bookings: [],
	book(flightNumber, passengerName) {
		console.log(
			`${passengerName} has booked a ticket on ${this.airLineName} flight ${this.iataCode}${flightNumber}`
		);
		this.bookings.push({
			flight: `${this.iataCode}${flightNumber}`,
			passengerName,
		});
	},
};

// airLine1.book(346, "Jim DiGreez");
// airLine1.book(256, "Usain Bolt");

// console.log(airLine1);

const airLine2 = {
	airLineName: "EuroFlights",
	iataCode: "EF",
	bookings: [],
};

const book = airLine1.book;

// This doesn't work
// book(345, "Linda Lagerlyof");

// call() Method
book.call(airLine2, 345, "Linda Lagerlyof");
console.log(airLine2);

// book.call(airLine1, 456, "Bob Smith");
// console.log(airLine1);

// // apply() Method - old approach
// const flightData = [111, "Nick Wong"];
// book.apply(airLine2, flightData);
// console.log(airLine2);

// book.call(airLine1, ...flightData);
// console.log(airLine1);

// bind() Method

const bookAirLne2 = book.bind(airLine2);
bookAirLne2(41, "John Doe");
console.log(airLine2);

const airLine3 = {
	airLineName: "USFlights",
	iataCode: "USF",
	bookings: [],
};

const bookAirLne3 = book.bind(airLine3);
bookAirLne3(243, "Sara Laagerlyof");
console.log(airLine3);

const bookAirLne3Flight21 = book.bind(airLine3, 23);
bookAirLne3Flight21("Jack Sons");
bookAirLne3Flight21("Lana Del Ray");

// bind() with event listeners

airLine1.airplanes = 200;
airLine1.purchaseAirplane = function () {
	console.log(this);
	this.airplanes++;
	console.log(this.airplanes);
};

// airLine1.purchaseAirplane();

document
	.querySelector("#purchase")
	.addEventListener("click", airLine1.purchaseAirplane.bind(airLine1));

// Partial application
const getPercentage = (totalValue, value) => (value / totalValue) * 100;
console.log(getPercentage(20, 23739));
const getPercentage23739 = getPercentage.bind(null, 23739);
console.log(getPercentage23739(100));

/************************************************************************* */

// // RETURNING FUNCTIONS

// const greet = function (greetingText) {
// 	return function (name) {
// 		console.log(`${greetingText} ${name}`);
// 	};
// };

// const hi = greet("Hi");
// hi("Jack");
// hi("Diana");
// hi("Nikita");

// greet("Hey")("Lily");

// // greet1() =>
// const greet1 = (greetingText1) => (name1) =>
// 	console.log(`${greetingText1} ${name1}`);

// greet1("Hello")("Sam");

/************************************************************************* */

// // FUNCTIONS ACCEPTING CALLBACK FUNCTIONS

// const removeSpaces = function (text) {
// 	return text.replace(/ /g, "").toLowerCase();
// };

// const upperFirstWord = function (text) {
// 	const [first, ...others] = text.split(" ");
// 	return [first.toUpperCase(), ...others].join(" ");
// };

// // High-Order function
// const converter = function (str, func) {
// 	console.log(`The original text: ${str}`);
// 	console.log(`The converted text: ${func(str)}`);

// 	console.log(`Converted by: ${func.name}`);
// };

// converter("Hello to everyone!", upperFirstWord);
// converter("Hello to everyone!", removeSpaces);

// // Callback functions are very common in JS
// const twice = (num) => console.log(num * 2);

// [1, 2, 3].forEach(twice);

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
