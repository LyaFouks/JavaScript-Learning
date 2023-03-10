"use strict";
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

// OPERATIONS WITH DATES

const futureDate = new Date(2222, 1, 13, 11, 28, 59);
console.log(Number(futureDate));
console.log(+futureDate);
console.log(-futureDate);

const getDaysBetween2Dates = (date1, date2) =>
	Math.abs((date2 - date1) / (1000 * 60 * 60 * 24));

const days = getDaysBetween2Dates(new Date(2021, 9, 1), new Date(2021, 9, 12));
console.log(days);

//////////////////////////////////////////////////////////////////////////

// // WORK WITH DATES

// // Dates creating
// const now = new Date();
// console.log(now);

// const someDateString = "Oct 12 2021 11:35:43";
// const someDate = new Date(someDateString);
// console.log(someDate);
// console.log(new Date("Dec 31 2021"));

// const account1 = {
// 	userName: "Cecil Ireland",
// 	transactions: [500, 250, -300, 5000, -850, -110, -170, 1100],
// 	interest: 1.5,
// 	pin: 1111,
// 	transactionsDates: [
// 		"2020-10-02T14:43:31.074Z",
// 		"2020-10-29T11:24:19.761Z",
// 		"2020-11-15T10:45:23.907Z",
// 		"2021-01-22T12:17:46.255Z",
// 		"2021-02-12T15:14:06.486Z",
// 		"2021-03-09T11:42:26.371Z",
// 		"2021-05-21T07:43:59.331Z",
// 		"2021-06-22T15:21:20.814Z",
// 	],
// 	currency: "USD",
// 	locale: "en-US",
// };

// console.log(new Date(account1.transactionsDates[0]));

// console.log(new Date(2222, 1, 13, 11, 28, 59));
// console.log(new Date(2222, 0, 32));

// // Unix time started Jan 1 1970
// console.log(new Date(0));
// console.log(new Date(1 * 24 * 60 * 60 * 1000));
// console.log(new Date(7 * 24 * 60 * 60 * 1000));

// // Work with Dates using Arrays

// const futureDate = new Date(2222, 1, 13, 11, 28, 59);
// console.log(futureDate);
// console.log(futureDate.getFullYear());
// console.log(futureDate.getMonth());
// console.log(futureDate.getDate());
// console.log(futureDate.getDay());
// console.log(futureDate.getHours());
// console.log(futureDate.getMinutes());
// console.log(futureDate.getSeconds());
// console.log(futureDate.toISOString());
// console.log(futureDate.getTime());

// console.log(new Date(7956091739000));
// console.log(Date.now());

// futureDate.setFullYear(2223);
// console.log(futureDate);

//////////////////////////////////////////////////////////////////////////

// // BigInt

// console.log(2 ** 53 - 1);
// console.log(Number.MAX_SAFE_INTEGER);

// console.log(2 ** 53);
// console.log(2 ** 53 + 1);
// console.log(2 ** 53 + 2);

// console.log(65918571239278352369527302n);
// console.log(BigInt("65918571239278352369527302"));

// console.log(65918571239278352369527302n + 65918571239278352369527302n);

// console.log(65918571239278352369527302n - 65918571239278352369527302n);

// console.log(65918571239278352369527302n * 65918571239278352369527302n);

// console.log(65918571239278352369527302n / 65918571239278352369527302n);

// console.log(65918571239278352369527302n ** 10n);

// const bigNumber = 65918571239278352369527302n;
// const regularNumber = 192;

// // console.log(Math.pow(bigNumber, 2));

// console.log(bigNumber * BigInt(regularNumber));

// console.log(65918571239278352369527302n > 123);

// console.log(65918571239278352369527302n === 123);
// console.log(typeof 123n);
// console.log(typeof 123);

// console.log(bigNumber + " this is a VERY big number!");

// console.log(5 / 3);
// console.log(5n / 3n);

//////////////////////////////////////////////////////////////////////////

// // REMAINDER OPERATOR

// console.log(7 % 3); // 7 = 3 * 2 + 1
// console.log(7 % 3); // 7 = 4 * 1 + 3

// console.log(8 % 2);
// console.log(108 % 2);
// console.log(8564 % 2);

// console.log(9 % 2);
// console.log(109 % 2);
// console.log(751 % 2);

// const isNumberOdd = (x) => x % 2 !== 0;
// console.log(isNumberOdd(5));
// console.log(isNumberOdd(7));
// console.log(isNumberOdd(10));
// console.log(isNumberOdd(16));

//////////////////////////////////////////////////////////////////////////

// // WORK with Math

// console.log(Math.sqrt(9));
// console.log(9 ** (1 / 2));
// console.log(8 ** (1 / 3));

// console.log(Math.max(3, 54, 555, 12, 4, 15));
// console.log(Math.max(3, 54, "11", 555, "12", 4, 15));
// console.log(Math.max(3, 54, "11%", 555, "12%", 4, 15));
// console.log(Math.min(3, 54, 11, 555, 12, 4, 15));

// console.log(Math.PI);
// console.log(Math.PI * Number.parseInt("20px") ** 2);

// console.log(Math.trunc(Math.random() * 100));

// console.log(Math.trunc(1.99));

// console.log(Math.round(1.99));
// console.log(Math.round(1.39));

// console.log(Math.ceil(1.99));
// console.log(Math.ceil(1.39));

// console.log(Math.floor(1.99));
// console.log(Math.floor(1.39));

// console.log(Math.trunc(-1.11));
// console.log(Math.floor(-1.11));

// console.log(Math.PI);
// console.log(Math.PI.toFixed(2));
// console.log(+(1.34567).toFixed(2));

//////////////////////////////////////////////////////////////////////////

// // CONVERTING AND CHECKING NUMBERS

// console.log(10 === 10.0);

// // 10 - 0-9; 1 / 10 = 0.1; 10 / 3 = 3.333333333333
// // 2 - 0, 1

// console.log(0.1 + 0.2);
// console.log(0.1 + 0.2 === 0.3);

// // Converting String to Numbers
// console.log(Number("11"));
// console.log(+"11");

// // Parsing Numbers from String
// console.log(Number.parseInt("20%", 10));
// console.log(Number.parseInt("011110%", 2));
// console.log(Number.parseInt("s20%", 10));

// console.log(Number.parseFloat("9.7kg"));
// console.log(Number.parseInt("9.7kg"));

// // Other Methods from Number Namespace
// console.log(Number.isNaN(111));
// console.log(Number.isNaN("111"));
// console.log(Number.isNaN(+"20%"));
// console.log(11 / 0);
// console.log(Number.isNaN(11 / 0));

// console.log("************************************");

// // Check if the Value is Finite Number
// console.log(Number.isFinite(111));
// console.log(Number.isFinite("111"));
// console.log(Number.isFinite("111%"));
// console.log(Number.isFinite(11 / 0));
