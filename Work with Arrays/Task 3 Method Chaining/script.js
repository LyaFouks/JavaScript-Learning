"use strict";

// Перепишите функцию getAverageHumanAge из Задания 2, но на этот раз как стрелочную функцию и с использованием method chaining.

const getAverageHumanAge = function (catAges) {
	let sortedAge = [];
	const averageHumanAge =
		catAges
			.map((catAge) => (catAge <= 2 ? catAge * 10 : catAge * 7))
			.filter((age) => (sortedAge = age > 18))
			.reduce(function (acc, catAge, _, array) {
				sortedAge = array.slice();
				return acc + catAge;
			}, 0) / sortedAge.length;
	console.log(averageHumanAge);
};

getAverageHumanAge([7, 3, 2, 4, 1, 15, 8, 1, 9, 2]);
getAverageHumanAge([1, 16, 12, 4, 5, 1, 3, 11, 7, 2]);
