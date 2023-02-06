"use strict";

function getAge(year) {
	const age = 2023 - year;

	function printAge() {
		let info = `${firstName} is ${age}, born in ${year}`;
		console.log(info);

		if (age >= 18) {
			var isAdult = true;
			const firstName = "John";
			const adult = `${firstName} is adult`;
			console.log(adult);

			function sum(a, b) {
				return a + b;
			}
			console.log(sum(1, 2));

			info = "New info";
		}
		console.log(isAdult);
		console.log(info);
		// console.log(adult);
		// sum(1, 2);
	}

	printAge();
	// console.log(isAdult);

	return age;
}

const firstName = "Nikita";
getAge(1991);
