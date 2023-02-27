"use strict";

// Simply Bank App

const account1 = {
	userName: "Cecil Ireland",
	transactions: [500.11, 250, -300.92, 5000, -850, -110.78, -170, 1100],
	interest: 1.5,
	pin: 1111,
};

const account2 = {
	userName: "Amani Salt",
	transactions: [2000, 6400, -1350, -70, -210, -2000, 5500, -30],
	interest: 1.3,
	pin: 2222,
};

const account3 = {
	userName: "Corey Martinez",
	transactions: [900, -200, 280, 300, -200, 150, 1400, -400],
	interest: 0.8,
	pin: 3333,
};

const account4 = {
	userName: "Kamile Searle",
	transactions: [530, 1300, 500, 40, 190],
	interest: 1,
	pin: 4444,
};

const account5 = {
	userName: "Oliver Avila",
	transactions: [630, 800, 300, 50, 120],
	interest: 1.1,
	pin: 5555,
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

// Creating DOM elements

const displayTransactions = function (transactions, sort = false) {
	containerTransactions.innerHTML = "";

	const transacts = sort
		? transactions.slice().sort((x, y) => x - y)
		: transactions;

	transacts.forEach(function (trans, index) {
		const transType = trans > 0 ? "deposit" : "withdrawal";

		const transactionRow = `
    <div class="transactions__row">
      <div class="transactions__type transactions__type--${transType}">
          ${index + 1} ${transType}
      </div>
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
	displayTransactions(account.transactions);

	// Display balance
	displayBalance(account);

	// Display total
	displayTotal(account);
};

let currentAccount;

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
		currentAccount.transactions.push(-transferAmount);
		recipientAccount.transactions.push(transferAmount);
		console.log("Transfer");
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
		updateUI(currentAccount);
	}
	inputLoanAmount.value = "";
});

/////////////////////////////////////////////////////////////////////////

// Transactions sorting (sort() Method)

let transactionsSorted = false;

btnSort.addEventListener("click", function (e) {
	e.preventDefault();
	displayTransactions(currentAccount.transactions, !transactionsSorted);
	transactionsSorted = !transactionsSorted;
});

//////////////////////////////////////////////////////////////////////////

// Array.from() example

const logoImage = document.querySelector(".logo");
logoImage.addEventListener("click", function () {
	const transactionsUI = document.querySelectorAll(".transactions__value");
	console.log(transactionsUI);
	// const transactionsUIArray = Array.from(transactionsUI);
	// console.log(transactionsUIArray.map((elem) => +(elem.textContent)));
	const transactionsUIArray = Array.from(
		transactionsUI,
		(elem) => +elem.textContent
	);
	console.log(transactionsUIArray);
});
