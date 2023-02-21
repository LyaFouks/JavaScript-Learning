"use strict";

// const currencies = new Map([
// 	["USD", "United States dollar"],
// 	["EUR", "Euro"],
// 	["CNY", "Chinese yuan"],
// ]);

// const transactions = [300, 250, -500, 5000, -750, -100, 50, 1400, -350, -120];
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

// // some() and every() METHODS

// const transactions = [300, 250, -500, 5000, -750, -100, 50, 1400, -350, -120];

// // console.log(transactions.includes(50));
// // console.log(transactions.includes(150));

// // some()
// const hasWithdrawals = transactions.some((trans) => trans < 0);
// console.log(hasWithdrawals);
// const hasWithdrawalsMore5000 = transactions.some((trans) => trans < -5000);
// console.log(hasWithdrawalsMore5000);

// console.log(transactions.some((trans) => trans === 50));

// // every()
// console.log(transactions.every((trans) => trans < 0));
// console.log(transactions.every((trans) => Math.abs(trans) > 49));

//////////////////////////////////////////////////////////////////////////

// // find() METHOD  // Does not return a new array. Returns the first matching value

// const transactions = [300, 250, -500, 5000, -750, -100, 50, 1400, -350, -120];

// const firstDeposit = transactions.find((trans) => trans > 0);
// const firstWithdrawal = transactions.find((trans) => trans < 0);
// console.log(firstDeposit);
// console.log(firstWithdrawal);

// // Second example
// const account1 = {
// 	userName: "Cecil Ireland",
// 	transactions: [500, 250, -300, 5000, -850, -110, -170, 1100],
// 	interest: 1.5,
// 	pin: 1111,
// };

// const account2 = {
// 	userName: "Amani Salt",
// 	transactions: [2000, 6400, -1350, -70, -210, -2000, 5500, -30],
// 	interest: 1.3,
// 	pin: 2222,
// };

// const account3 = {
// 	userName: "Corey Martinez",
// 	transactions: [900, -200, 280, 300, -200, 150, 1400, -400],
// 	interest: 0.8,
// 	pin: 3333,
// };

// const account4 = {
// 	userName: "Kamile Searle",
// 	transactions: [530, 1300, 500, 40, 190],
// 	interest: 1,
// 	pin: 4444,
// };

// const account5 = {
// 	userName: "Oliver Avila",
// 	transactions: [630, 800, 300, 50, 120],
// 	interest: 1.1,
// 	pin: 5555,
// };

// const accounts = [account1, account2, account3, account4, account5];

// const coreyMartinezAccount = accounts.find(
// 	(account) => account.userName === "Corey Martinez"
// );

// console.log(coreyMartinezAccount);

//////////////////////////////////////////////////////////////////////////

// // METHOD CHAINING (Цепь Возовов Методов)

// const transactions = [300, 250, -500, 5000, -750, -100, 50, 1400, -350, -120];

// const totalWithdrawsInEuro = transactions
// 	.filter((trans) => trans < 0)
// 	.map((trans, index, array) => {
// 		// console.log(array);
// 		return trans * 0.93;
// 	})
// 	// .map((trans) => trans * 0.93)
// 	.reduce((acc, trans) => acc + trans, 0);

// console.log(totalWithdrawsInEuro);

//////////////////////////////////////////////////////////////////////////

// // reduce() METHOD  // Does not change the original array, returns a new array

// const transactions = [300, 250, -500, 5000, -750, -100, 50, 1400, -350, -120];

// // const balance = transactions.reduce(function (acc, item, index, array) {
// // 	console.log(acc);
// // 	return acc + item;
// // }, 0);

// const balance = transactions.reduce((acc, item) => acc + item, 0);
// console.log(balance);

// console.log("*******************************************************");

// let sum = 0;
// for (const trans of transactions) {
// 	sum += trans;
// }
// console.log(sum);

// // Get minimum value of transactions

// // const min = transactions.reduce((acc, trans) => {
// // 	if (acc < trans) {
// // 		return acc;
// // 	} else {
// // 		return trans;
// // 	}
// // }, transactions[0]);

// const min = transactions.reduce(
// 	(acc, trans) => (acc < trans ? acc : trans),
// 	transactions[0]
// );

// console.log(min);

//////////////////////////////////////////////////////////////////////////

// // filter() METHOD  // Does not change the original array, returns a new array

// const transactions = [300, 250, -500, 5000, -750, -100, 50, 1400, -350, -120];

// const withdrawals = transactions.filter(function (trans) {
// 	return trans < 0;
// });

// console.log(withdrawals);

// const withdrawal1 = [];

// for (const trans of transactions) {
// 	if (trans < 0) {
// 		withdrawal1.push(trans);
// 	}
// }

// console.log(withdrawal1);

// const deposites = transactions.filter((trans) => trans > 0);
// console.log(deposites);

//////////////////////////////////////////////////////////////////////////

// // map() METHOD  // Does not change the original array, returns a new array

// const transactions = [300, 250, -500, 5000, -750, -100, 50, 1400, -350, -120];

// const usdToEuro = 0.93;

// // const transactionsEuro = transactions.map(function (trans) {
// // 	return trans * usdToEuro;
// // });

// const transactionsEuro = transactions.map((trans) => trans * usdToEuro);

// console.log(transactions);
// console.log(transactionsEuro);

// const transactionsEuro1 = [];
// for (const trans of transactions) {
// 	transactionsEuro1.push(trans * usdToEuro);
// }

// console.log(transactionsEuro1);

// // const transactionDescriptions = transactions.map(
// // 	(transaction, index) => {
// // 		let description = "";

// // 		if (transaction > 0) {
// // 			description = `Transaction № ${index + 1}: ${transaction} was deposited`;
// // 		} else {
// // 			description = `Transaction № ${index + 1}: ${Math.abs(
// // 				transaction
// // 			)} was withdrew`;
// // 		}
// // 		return description;
// // 	}
// // );

// const transactionDescriptions = transactions.map(
// 	(transaction, index) =>
// 		`Transaction № ${index + 1}: ${Math.abs(transaction)} was ${
// 			transaction > 0 ? "deposited" : "withdrew"
// 		}`
// );

// console.log(transactionDescriptions);

//////////////////////////////////////////////////////////////////////////

// // forEach WITH MAP AND SET

// // Map
// const currencies = new Map([
// 	["USD", "United States dollar"],
// 	["EUR", "Euro"],
// 	["CNY", "Chinese yuan"],
// ]);

// currencies.forEach(function (value, key, map) {
// 	console.log(`${key}: ${value}`);
// });

// // Set
// const uniqueCurrencies = new Set(["USD", "EUR", "USD", "CNY", "CNY"]);
// console.log(uniqueCurrencies);

// uniqueCurrencies.forEach(function (value, _, set) {
// 	console.log(`${value}: ${value}`);
// 	console.log(set);
// });

//////////////////////////////////////////////////////////////////////////

// // ITERATING ARRAY WITH forEach() CYCLE

// const transactions = [300, 250, -500, 5000, -750, -100, 50, 1400, -350, -120];

// // for (const transaction of transactions) {
// // 	if (transaction > 0) {
// // 		console.log(`${transaction} was deposited`);
// // 	} else {
// // 		console.log(`${Math.abs(transaction)} was withdrew`);
// // 	}
// // }

// for (const [i, transaction] of transactions.entries()) {
// 	if (transaction > 0) {
// 		console.log(`${transaction} was deposited`);
// 		console.log(i);
// 	} else {
// 		console.log(`${Math.abs(transaction)} was withdrew`);
// 		console.log(i);
// 	}
// }

// console.log("---------------------------------------------");

// transactions.forEach(function (transaction, index /*, array*/) {
// 	if (transaction > 0) {
// 		console.log(`Transaction № ${index + 1}: ${transaction} was deposited`);
// 	} else {
// 		console.log(
// 			`Transaction № ${index + 1}: ${Math.abs(transaction)} was withdrew`
// 		);
// 	}
// });

//////////////////////////////////////////////////////////////////////////

// // SIMPLE ARRAYS METHODS

// let letters = ["a", "b", "c", "d", "e", "f"];
// let letters1 = ["g", "h", "i"];

// // slice() Method  // Does not change the original array, returns a new array
// console.log(letters.slice(1));
// console.log(letters.slice(1, 4));
// console.log(letters.slice(-1));
// console.log(letters.slice(-3));
// console.log(letters.slice(-3, -1));
// console.log(letters.slice(3, -1));
// console.log(letters.slice());
// console.log(...letters);

// // splice() Method  // Change the original array
// console.log(letters.splice(1));
// letters.splice(-1);
// letters.splice(1, 3);

// // reverse() Method  // Change the original array
// console.log(letters.reverse());

// // concat() Method  // Does not change the original array, returns a new array
// console.log(letters.concat(letters1));
// console.log([...letters, ...letters1]);

// // join() Method
// console.log(letters.join(", "));

// console.log(letters);
