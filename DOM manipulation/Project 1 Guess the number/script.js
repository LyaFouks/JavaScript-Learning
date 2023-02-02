"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayGuessMessage = function (message) {
	document.querySelector(".guess-message").textContent = message;
};

const displayScore = function (score) {
	document.querySelector(".score").textContent = score;
};

const bodyBackgroundColor = function (backgroundColor) {
	document.querySelector("body").style.backgroundColor = backgroundColor;
};

// Logic implementation

document.querySelector(".check").addEventListener("click", function () {
	const guessingNumber = Number(document.querySelector(".number-input").value);

	console.log(guessingNumber);

	// No input
	if (!guessingNumber) {
		displayGuessMessage("Введите Число!");

		// Player won
	} else if (guessingNumber === secretNumber) {
		displayGuessMessage("Правильно!");
		document.querySelector(".question").textContent = secretNumber;
		bodyBackgroundColor("rgb(9, 250, 21)");
		document.querySelector(".question").style.width = "50rem";

		// The best result
		if (score > highScore) {
			highScore = score;
		}
		document.querySelector(".highscore").textContent = highScore;

		// Number from input is wrong
	} else if (guessingNumber !== secretNumber) {
		if (score > 1) {
			displayGuessMessage(
				guessingNumber > secretNumber ? "Слишком много!" : "Слишком мало!"
			);
			score--;
			displayScore(score);
		} else {
			displayGuessMessage("Game Over!");
			displayScore(0);
		}
	}
});

// Button "Again" functional

document.querySelector(".again").addEventListener("click", function () {
	secretNumber = Math.trunc(Math.random() * 20) + 1;

	document.querySelector(".question").textContent = "???";
	document.querySelector(".question").style.width = "25rem";
	displayGuessMessage("Начни угадывать!");
	displayScore((score = 20));
	document.querySelector(".number-input").value = "";
	bodyBackgroundColor("rgb(0, 0, 0)");
});
