"use strict";

// Simply Bank App

const account1 = {
	userName: "Cecil Ireland",
	transactions: [500, 250, -300, 5000, -850, -110, -170, 1100],
	interest: 1.5,
	pin: 1111,
	transactionsDates: [
		"2020-10-02T14:43:31.074Z",
		"2020-10-29T11:24:19.761Z",
		"2020-11-15T10:45:23.907Z",
		"2021-01-22T12:17:46.255Z",
		"2021-02-12T15:14:06.486Z",
		"2021-03-09T11:42:26.371Z",
		"2023-03-05T07:43:59.331Z",
		"2023-03-09T15:21:20.814Z",
	],
	currency: "USD",
	locale: "en-US",
};

const account2 = {
	userName: "Amani Salt",
	transactions: [2000, 6400, -1350, -70, -210, -2000, 5500, -30],
	interest: 1.3,
	pin: 2222,
	transactionsDates: [
		"2020-10-02T14:43:31.074Z",
		"2020-10-29T11:24:19.761Z",
		"2020-11-15T10:45:23.907Z",
		"2021-01-22T12:17:46.255Z",
		"2021-02-12T15:14:06.486Z",
		"2021-03-09T11:42:26.371Z",
		"2021-05-21T07:43:59.331Z",
		"2021-06-22T15:21:20.814Z",
	],
	currency: "UAH",
	locale: "uk-UA",
};

const account3 = {
	userName: "Corey Martinez",
	transactions: [900, -200, 280, 300, -200, 150, 1400, -400],
	interest: 0.8,
	pin: 3333,
	transactionsDates: [
		"2020-10-02T14:43:31.074Z",
		"2020-10-29T11:24:19.761Z",
		"2020-11-15T10:45:23.907Z",
		"2021-01-22T12:17:46.255Z",
		"2021-02-12T15:14:06.486Z",
		"2021-03-09T11:42:26.371Z",
		"2021-05-21T07:43:59.331Z",
		"2021-06-22T15:21:20.814Z",
	],
	currency: "RUB",
	locale: "ru-RU",
};

const account4 = {
	userName: "Kamile Searle",
	transactions: [530, 1300, 500, 40, 190],
	interest: 1,
	pin: 4444,
	transactionsDates: [
		"2020-10-02T14:43:31.074Z",
		"2020-10-29T11:24:19.761Z",
		"2020-11-15T10:45:23.907Z",
		"2021-01-22T12:17:46.255Z",
		"2021-02-12T15:14:06.486Z",
	],
	currency: "EUR",
	locale: "fr-CA",
};

const account5 = {
	userName: "Oliver Avila",
	transactions: [630, 800, 300, 50, 120],
	interest: 1.1,
	pin: 5555,
	transactionsDates: [
		"2020-10-02T14:43:31.074Z",
		"2020-10-29T11:24:19.761Z",
		"2020-11-15T10:45:23.907Z",
		"2021-01-22T12:17:46.255Z",
		"2021-02-12T15:14:06.486Z",
	],
	currency: "USD",
	locale: "en-US",
};

const accounts = [account1, account2, account3, account4, account5];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".total__value--in");
const labelSumOut = document.querySelector(".total__value--out");
const labelSumInterest = document.querySelector(".total__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerTransactions = document.querySelector(".transactions");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseNickName = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

/////////////////////////////////////////////////////////////////////////

// Display Date

const formatTransactionDate = function (date, locale) {
	const getDaysBetween2Dates = (date1, date2) =>
		Math.round(Math.abs((date2 - date1) / (1000 * 60 * 60 * 24)));

	const daysPassed = getDaysBetween2Dates(new Date(), date);
	console.log(daysPassed);

	if (daysPassed === 0) return "Today";
	if (daysPassed === 1) return "Yesterday";
	if (daysPassed <= 7) return `${daysPassed} days ago`;
	else {
		// const day = `${date.getDate()}`.padStart(2, "0");
		// const month = `${date.getMonth() + 1}`.padStart(2, "0");
		// const year = date.getFullYear();

		// return `${day}/${month}/${year}`;
		return new Intl.DateTimeFormat(locale).format(date);
	}
};
///////////////////////////////////////////////////////////////////////////

// Creating DOM elements

const displayTransactions = function (account, sort = false) {
	containerTransactions.innerHTML = "";

	const transacts = sort
		? account.transactions.slice().sort((x, y) => x - y)
		: account.transactions;

	transacts.forEach(function (trans, index) {
		const transType = trans > 0 ? "deposit" : "withdrawal";

		const date = new Date(account.transactionsDates[index]);

		const transDate = formatTransactionDate(date, account.locale);

		const transactionRow = `
    <div class="transactions__row">
      <div class="transactions__type transactions__type--${transType}">
          ${index + 1} ${transType}
      </div>
	  <div class="transactions__date">${transDate}</div>
      <div class="transactions__value">${trans.toFixed(2)}</div>
    </div>
    `;
		containerTransactions.insertAdjacentHTML("afterbegin", transactionRow);
	});
};

// console.log(containerTransactions.innerHTML);

/////////////////////////////////////////////////////////////////////////

// Calculating NickNames (Using Array Nethods: map() etc.)

const createNickNames = function (accs) {
	accs.forEach(function (acc) {
		acc.nickName = acc.userName
			.toLowerCase()
			.split(" ")
			.map((word) => word[0])
			.join("");
	});
};

createNickNames(accounts);

// console.log(accounts);

// const userName = "Oliver Avila"; // nickName = 'oa';

// const nickName = userName
// 	.toLowerCase()
// 	.split(" ")
// 	.map((word) => word[0])
// 	.join("");

// console.log(nickName);

/////////////////////////////////////////////////////////////////////////

// Display balance in App (Using reduce() Method)

const displayBalance = function (account) {
	const balance = account.transactions.reduce((acc, trans) => acc + trans, 0);
	account.balance = balance;
	labelBalance.textContent = `${balance.toFixed(2)}$`;
};

/////////////////////////////////////////////////////////////////////////

// Display Total (Using Method Chaining)

const displayTotal = function (account) {
	const depositesTotal = account.transactions
		.filter((trans) => trans > 0)
		.reduce((acc, trans) => acc + trans, 0);
	labelSumIn.textContent = `${depositesTotal.toFixed(2)}$`;

	const withdrawsTotal = account.transactions
		.filter((trans) => trans < 0)
		.reduce((acc, trans) => acc + trans, 0);
	labelSumOut.textContent = `${withdrawsTotal.toFixed(2)}$`;

	const interestTotal = account.transactions
		.filter((trans) => trans > 0)
		.map((depos) => (depos * account.interest) / 100)
		.filter((interest, index, arr) => {
			// console.log(arr);
			return interest >= 5;
		})
		.reduce((acc, interest) => acc + interest, 0);
	labelSumInterest.textContent = `${interestTotal.toFixed(2)}$`;
};

/////////////////////////////////////////////////////////////////////////

// Login implementation (Using find() Method)

const updateUI = function (account) {
	// Display transactions
	displayTransactions(account);

	// Display balance
	displayBalance(account);

	// Display total
	displayTotal(account);
};

let currentAccount;

// Always Logged In

currentAccount = account1;
updateUI(currentAccount);
containerApp.style.opacity = 100;

// const now = new Date();
// const options = {
// 	hour: "numeric",
// 	minute: "numeric",
// 	day: "numeric",
// 	month: "long",
// 	year: "numeric",
// 	weekday: "long",
// };
// const locale = navigator.language;
// labelDate.textContent = new Intl.DateTimeFormat(locale, options).format(now);

// Event Handlers

btnLogin.addEventListener("click", function (e) {
	e.preventDefault();
	currentAccount = accounts.find(
		(account) => account.nickName === inputLoginUsername.value
	);

	// console.log(currentAccount);

	if (currentAccount?.pin === +inputLoginPin.value) {
		// Display UI and welcome message
		containerApp.style.opacity = 100;

		labelWelcome.textContent = `We are glad, that you are with us again, ${
			currentAccount.userName.split(" ")[0]
		}!`;

		// const now = new Date();
		// const day = `${now.getDate()}`.padStart(2, "0");
		// const month = `${now.getMonth() + 1}`.padStart(2, "0");
		// const year = now.getFullYear();

		// labelDate.textContent = `${day}/${month}/${year}`;

		const now = new Date();
		const options = {
			hour: "numeric",
			minute: "numeric",
			day: "numeric",
			month: "long",
			year: "numeric",
			weekday: "long",
		};
		const locale = navigator.language;
		labelDate.textContent = new Intl.DateTimeFormat(
			currentAccount.locale,
			options
		).format(now);

		// Clear inputs
		inputLoginUsername.value = "";
		inputLoginPin.value = "";
		inputLoginPin.blur();

		updateUI(currentAccount);
	}
});

/////////////////////////////////////////////////////////////////////////

// Transfer implementation

btnTransfer.addEventListener("click", function (e) {
	e.preventDefault();
	const transferAmount = +inputTransferAmount.value;
	const recipientNickName = inputTransferTo.value;
	const recipientAccount = accounts.find(
		(account) => account.nickName === recipientNickName
	);
	inputTransferTo.value = "";
	inputTransferAmount.value = "";

	if (
		transferAmount > 0 &&
		currentAccount.balance >= transferAmount &&
		recipientAccount &&
		currentAccount.nickName !== recipientAccount.nickName
	) {
		// Add Transaction
		currentAccount.transactions.push(-transferAmount);
		recipientAccount.transactions.push(transferAmount);

		// Add transaction date
		currentAccount.transactionsDates.push(new Date().toISOString());
		recipientAccount.transactionsDates.push(new Date().toISOString());

		updateUI(currentAccount);
	}
});

/////////////////////////////////////////////////////////////////////////

// Account Closure implementation

btnClose.addEventListener("click", function (e) {
	e.preventDefault();
	if (
		inputCloseNickName.value === currentAccount.nickName &&
		+inputClosePin.value === currentAccount.pin
	) {
		const currentAccountIndex = accounts.findIndex(
			(account) => account.nickName === currentAccount.nickName
		);
		accounts.splice(currentAccount, 1);

		containerApp.style.opacity = 0;
	}

	inputCloseNickName.value = "";
	inputClosePin.value = "";
	labelWelcome.textContent = "Войдите в свой аккаунт";
});

/////////////////////////////////////////////////////////////////////////

// Loan Request (some() sMethod)

btnLoan.addEventListener("click", function (e) {
	e.preventDefault();
	const loanAmount = Math.floor(inputLoanAmount.value);
	if (
		loanAmount > 0 &&
		currentAccount.transactions.some(
			(trans) => trans >= (loanAmount * 10) / 100
		)
	) {
		currentAccount.transactions.push(loanAmount);
		currentAccount.transactionsDates.push(new Date().toISOString());
		updateUI(currentAccount);
	}
	inputLoanAmount.value = "";
});

/////////////////////////////////////////////////////////////////////////

// Transactions sorting (sort() Method)

let transactionsSorted = false;

btnSort.addEventListener("click", function (e) {
	e.preventDefault();
	displayTransactions(currentAccount, !transactionsSorted);
	transactionsSorted = !transactionsSorted;
});

//////////////////////////////////////////////////////////////////////////

// // Array.from() example

// const logoImage = document.querySelector(".logo");
// logoImage.addEventListener("click", function () {
// 	const transactionsUI = document.querySelectorAll(".transactions__value");
// 	console.log(transactionsUI);
// 	// const transactionsUIArray = Array.from(transactionsUI);
// 	// console.log(transactionsUIArray.map((elem) => +(elem.textContent)));
// 	const transactionsUIArray = Array.from(
// 		transactionsUI,
// 		(elem) => +elem.textContent
// 	);
// 	console.log(transactionsUIArray);
// });

//////////////////////////////////////////////////////////////////////////

// Remainder Operator

const logoImage = document.querySelector(".logo");
logoImage.addEventListener("click", function () {
	[...document.querySelectorAll(".transactions__row")].forEach(function (
		row,
		index
	) {
		if (index % 2 === 0) {
			row.style.backgroundColor = "grey";
		}
	});
});
