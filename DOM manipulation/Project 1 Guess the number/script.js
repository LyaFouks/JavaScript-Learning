"use strict";

// console.log(document.querySelector(".guess-message").textContent);

// document.querySelector(".guess-message").textContent = "Правильно";

// document.querySelector(".question").textContent = 7;

// document.querySelector(".score").textContent = 10;

// console.log(document.querySelector(".number-input").value);

// document.querySelector(".number-input").value = 13;

document.querySelector(".check").addEventListener("click", function () {
	const guessingNumber = Number(document.querySelector(".number-input").value);

	console.log(guessingNumber);

	if (!guessingNumber) {
		document.querySelector(".guess-message").textContent = "Введите число!";
	}
});
