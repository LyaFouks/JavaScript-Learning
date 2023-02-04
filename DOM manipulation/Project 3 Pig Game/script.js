"use strict";

// Element selections
const score0Element = document.querySelector("#score--0");
const score1Element = document.getElementById("score--1");
const current0Element = document.getElementById("current--0");
const current1Element = document.getElementById("current--1");
const diceElement = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const player0 = document.querySelector(".player--0");
const player1 = document.querySelector(".player--1");

// Game initital conditions
score0Element.textContent = 0;
score1Element.textContent = 0;
diceElement.classList.add("hidden");

const totalScores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

// Roll the dice
btnRoll.addEventListener("click", function () {
	// 1. Generate random number
	const diceNumber = Math.trunc(Math.random() * 6) + 1;
	console.log(diceNumber);

	// 2. Display number on the dice
	diceElement.classList.remove("hidden");
	diceElement.src = `dice${diceNumber}.png`;

	// 3. If the number is 1, swithc to the next player, if not - add number to the current score
	if (diceNumber !== 1) {
		currentScore += diceNumber;
		document.getElementById(`current--${activePlayer}`).textContent =
			currentScore;
	} else {
		currentScore = 0;
		document.getElementById(`current--${activePlayer}`).textContent =
			currentScore;
		activePlayer = activePlayer === 0 ? 1 : 0;
		player0.classList.toggle("player--active");
		player1.classList.toggle("player--active");
	}
});
