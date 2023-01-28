"use strict";

const humidities = [32, 45, 29, 19, "error", 58, 71, 47, 33, 42, 51, 49];
const humidities2 = [12, 51, 312, 86, "error", 54, 65, 13, 23, 42, 245, 4];

// 1. Understand the problem
// - What is the humidity amplitude? This is the difference between min and max values of humidity.
// - How to calculate min and max values in array?
// - How sensor error looks like in data array? What to do with this error?

// 2. Divide into sub-problems
// - How to ignore data errors?
// - How to calculate min value in array?
// - How to calculate max value in array?
// - Substract min from max and return the result.

// const calculateHumiditiesAmplitude = function (humidities) {
// 	let max = humidities[0];
// 	let min = humidities[0];
// 	for (let i = 1; i < humidities.length; i++) {
// 		const currentHumidity = humidities[i];
// 		if (typeof currentHumidity !== "number") continue;
// 		if (currentHumidity > max) {
// 			max = currentHumidity;
// 		}
// 		if (currentHumidity < min) {
// 			min = currentHumidity;
// 		}
// 	}
// 	console.log(max);
// 	console.log(min);
// 	return max - min;
// };

// const amplitude = calculateHumiditiesAmplitude(humidities);

// console.log(amplitude);

// Problem 2
// The function should get two arrays of humidities as parameters

// 1. Understand the problem
// - Should we imolement the same functionality for second array? No, we should merge two arrays

// 2. Divide into sub-problems
// - How to merge two arrays?

const calculateHumiditiesAmplitudeTwoArrays = function (h1, h2) {
	const humidities = h1.concat(h2);

	let max = humidities[0];
	let min = humidities[0];
	for (let i = 1; i < humidities.length; i++) {
		const currentHumidity = humidities[i];
		if (typeof currentHumidity !== "number") continue;
		if (currentHumidity > max) {
			max = currentHumidity;
		}
		if (currentHumidity < min) {
			min = currentHumidity;
		}
	}
	console.log(max);
	console.log(min);
	return max - min;
};

const amplitude = calculateHumiditiesAmplitudeTwoArrays(
	humidities,
	humidities2
);

console.log(amplitude);
