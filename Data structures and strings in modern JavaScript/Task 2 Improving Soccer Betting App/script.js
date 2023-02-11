"use strict";

const game = {
	team1: "REAL MADRID",
	team2: "BARCELONA",
	players: [
		[
			"Courtois",
			"Vazquez",
			"Militao",
			"Nacho",
			"Mendy",
			"Casemiro",
			"Valverde",
			"Modrich",
			"Kroos",
			"Vinicius",
			"Benzema",
		],
		[
			"Stegen",
			"Mingueza",
			"Araujo",
			"Lenglet",
			"Dest",
			"Busquets",
			"Jong",
			"Alba",
			"Messi",
			"Pedri",
			"Dembele",
		],
	],
	score: "2:1",
	scored: ["Kroos", "Benzema", "Mingueza", "Benzema"],
	date: "Apr 10th, 2021",
	odds: {
		team1: 1.48,
		draw: 2.53,
		team2: 4.34,
	},
};

// 1. Loop through the game.scored array and print the name of each player to the console along with the goal number (example: “Goal 1 - Kroos”)

for (const [goal, playerName] of game.scored.entries()) {
	console.log(`Goal ${goal + 1} - ${playerName}`);
}

// 2. Use a loop to calculate the average odd and print it to the console

// Version 1
const odds = Object.entries(game.odds);
function oddsCalc() {
	let sum = 0;
	for (const [name, value] of odds) {
		sum += value;
	}
	console.log(sum / odds.length);
}

oddsCalc();

// Version 2

let oddSum = 0;
let odds1 = Object.values(game.odds);
for (const odd of odds1) {
	oddSum += odd;
}

const averageOdd = oddSum / odds1.length;
console.log(averageOdd);

// 3. Print 3 odds to the console, but formatted, exactly like this:
// Rate for REAL MADRID victory: 1.48
// Rate for draw: 2.53
// Rate for BARCELONA victory: 4.25
// Get team names directly from the game object, don't hardcode them

// Version 1
const oddsValue = Object.keys(game.odds);
console.log(`Rate for ${game.team1} victory: ${game.odds.team1}`);
console.log(`Rate for ${oddsValue[1]}: ${game.odds.draw}`);
console.log(`Rate for ${game.team2} victory: ${game.odds.team2}`);

// Version 2
for (const [teamName, odd] of Object.entries(game.odds)) {
	const mutableText = name === "draw" ? "draw" : `${game[teamName]} victory`;
	console.log(`Rate for ${mutableText}: ${odd}`);
}

// 4. Bonus: create an object called goalScorers that contains the names of the players who scored as properties and the number of goals as a value. In this game it will look like this:
//       {
//         Kroos: 1,
//         Benzema: 1,
//         Mingueza: 1
// }

const goalScores1 = {};
for (const player of game.scored) {
	goalScores1[player] ? goalScores1[player]++ : (goalScores1[player] = 1);
}

console.log(goalScores1);
