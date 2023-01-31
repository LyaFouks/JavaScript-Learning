"use strict";

// console.log(document.querySelector(".guess-message").textContent);

// document.querySelector(".guess-message").textContent = "Правильно";

// document.querySelector(".question").textContent = 7;

// document.querySelector(".score").textContent = 10;

// console.log(document.querySelector(".number-input").value);

// document.querySelector(".number-input").value = 13;

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector(".question").textContent = secretNumber;

document.querySelector(".check").addEventListener("click", function () {
	const guessingNumber = Number(document.querySelector(".number-input").value);

	console.log(guessingNumber);

	if (!guessingNumber) {
		document.querySelector(".guess-message").textContent = "Введите число!";
	} else if (guessingNumber === secretNumber) {
		document.querySelector(".guess-message").textContent = "Правильно!";
	} else if (guessingNumber > secretNumber) {
		if (score > 1) {
			document.querySelector(".guess-message").textContent = "Слишком много!";
			score--;
			document.querySelector(".score").textContent = score;
		} else {
			document.querySelector(".guess-message").textContent = "Game Over!";
			document.querySelector(".score").textContent = 0;
		}
	} else if (guessingNumber < secretNumber) {
		if (score > 1) {
			document.querySelector(".guess-message").textContent = "Слишком мало!";
			score--;
			document.querySelector(".score").textContent = score;
		} else {
			document.querySelector(".guess-message").textContent = "Game Over!";
			document.querySelector(".score").textContent = 0;
		}
	}
});
