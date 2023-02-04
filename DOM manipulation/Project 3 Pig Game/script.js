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
const hideDice = function () {
	diceElement.classList.add("hidden");
};

let totalScores, currentScore, activePlayer, isPlaying;

const swithcActivePlayer = function () {
	currentScore = 0;
	document.getElementById(`current--${activePlayer}`).textContent =
		currentScore;
	activePlayer = activePlayer === 0 ? 1 : 0;
	player0.classList.toggle("player--active");
	player1.classList.toggle("player--active");
};

const initGame = function () {
	totalScores = [0, 0];
	isPlaying = true;
	activePlayer = 0;
	currentScore = 0;
	score0Element.textContent = 0;
	score1Element.textContent = 0;
	current0Element.textContent = 0;
	current1Element.textContent = 0;
	player0.classList.remove("player--winner");
	player1.classList.remove("player--active", "player--winner");
	player0.classList.add("player--active");
	hideDice();
};

initGame();

// Roll the dice
btnRoll.addEventListener("click", function () {
	if (isPlaying) {
		// 1. Generate random number
		const diceNumber = Math.trunc(Math.random() * 6) + 1;

		// 2. Display number on the dice
		diceElement.classList.remove("hidden");
		diceElement.src = `dice${diceNumber}.png`;

		// 3. If the number is 1, swithc to the next player, if not - add number to the current score
		if (diceNumber !== 1) {
			currentScore += diceNumber;
			document.getElementById(`current--${activePlayer}`).textContent =
				currentScore;
		} else {
			swithcActivePlayer();
		}
	}
});

btnHold.addEventListener("click", function () {
	if (isPlaying) {
		// 1. Add current score to active player total score
		totalScores[activePlayer] += currentScore;
		document.getElementById(`score--${activePlayer}`).textContent =
			totalScores[activePlayer];

		// 2. If total score of active player >= 100, active player won, if not - switch active player
		if (totalScores[activePlayer] >= 20) {
			isPlaying = false;
			document
				.querySelector(`.player--${activePlayer}`)
				.classList.add("player--winner");
			document
				.querySelector(`.player--${activePlayer}`)
				.classList.remove("player--active");
			hideDice();
		} else {
			swithcActivePlayer();
		}
	}
});

// New game
btnNew.addEventListener("click", initGame);
