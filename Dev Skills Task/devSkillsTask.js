// The weather forecast app displays a string with forecasted humidities from a given array.
// Example
// [49, 51, 63] will display " ... 49% humidity in 1 days ... 51% humidity in 2 days ... 63% humidity in 3 days ..."
// Create  a function printHumiditiesForecast(), which takes an array as a parameter and logs a string like the above to the console. Try it with both test datasets.
// Use the problem-solving framework: understand the problem and divide it into sub-problems!
// Data1: [49, 51, 63]
// Data2: [31, 29, 43, 58, 52]

// Problem
// - How to sort out array? You can do this with Cycle for and treatment array[index]
// - How to merge strings with array values? With template litterals (`${array[index]} sometext`);

const humidities1 = [49, 51, 63];
const humidities2 = [31, 29, 43, 58, 52];
const printHumidities = [];
let humiditiesString;

const printHumiditiesForecast = function (humidities) {
	for (let i = 0; i < humidities.length; i++) {
		printHumidities.push(`... ${humidities[i]}% humidity in ${i + 1} days`);
	}
	humiditiesString = `${printHumidities.join(" ")} ...`;
	return humiditiesString;
};

printHumiditiesForecast(humidities2);
console.log(humiditiesString);
