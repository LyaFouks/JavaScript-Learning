"use strict";

// Создайте функцию getAverageHumanAge, которая принимает массив возрастов кошек (catAges) и выполняет следующие действия по порядку:

const getAverageHumanAge = function (catAges) {
	// 1. Рассчитывает человеческий возраст по следующей формуле: если возраст кошки <= 2 года, человеческий возраст = возраст кошки * 10. Если кошке больше 2 лет, человеческий возраст = возраст кошки * 7.

	const humanAges = catAges.map((catAge) =>
		catAge <= 2 ? catAge * 10 : catAge * 7
	);
	console.log(humanAges);

	// 2. Исключает всех кошек младше 18 человеческих лет.

	const catsSorted = humanAges.filter((age) => age > 18);
	console.log(catsSorted);

	// 3. Возвращает средний человеческий возраст для всех взрослых кошек.

	const averageHumanAge =
		catsSorted.reduce(function (acc, catAge) {
			return acc + catAge;
		}, 0) / catsSorted.length;

	console.log(averageHumanAge);
};

getAverageHumanAge([7, 3, 2, 4, 1, 15, 8, 1, 9, 2]);
getAverageHumanAge([1, 16, 12, 4, 5, 1, 3, 11, 7, 2]);
