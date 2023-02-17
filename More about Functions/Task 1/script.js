"use strict";

const survey = {
	question: "What programming language would you like to learn?",
	options: ["0: JavaScript", "1: Python", "2: Ruby", "3: Java", "4: C#"],
	answers: new Array(5).fill(0),

	//    1. Create a method called logNewAnswer for the survey object. The method should perform 2 functions:
	//    Display a prompt window so that the user can enter the number of the selected option. The text in the prompt should look like this:
	//    What programming language would you like to learn?
	//    0: JavaScript
	//    1: Python
	//    2: Ruby
	//    3: Java
	//    4: C#
	//    (Enter option number)

	//    Update the answers property based on the number entered. For example, if option 2 is selected, increase the value in the second element of the array answers by 1. Make sure that you entered a number and that it makes sense (for example, the answer 23 does not make sense, right?)

	logNewAnswer() {
		const showedArr = this.options;
		const answer = Number(
			prompt(`${this.question}\n
        ${this.options.join("\n")}\n(Enter option number)`)
		);

		if (
			typeof answer === "number" &&
			answer < this.answers.length &&
			answer >= 0
		) {
			this.answers[answer]++;
		} else {
			alert("Incorect answer! Try again.");
		}
		this.printResult();
		this.printResult("string");
		this.printResult("array");
	},

	//    3. Create a printResults method that prints the survey results to the console. The method takes as input a string (the type parameter), which can be either “string” or “array”. If the type is “array”, just display the answers array as it is using console.log(). This should be the default. If the type is “string”, display a string like this: “Survey results: 7, 5, 3, 2, 6.”

	printResult(type = "array") {
		if (type == "array") {
			console.log(this.answers);
		} else if (type === "string") {
			console.log(`Survey results: ${this.answers.join(", ")}.`);
		} else {
			console.log("Wrong arguments");
		}
	},
};

//    Let's create a simple survey application!
//    A survey has a question, a set of options that users can choose from, and an array with the number of responses for each option. This data is stored in the survey object, which you can see below.

//    2. Call this method when users click the Take Survey button. Create this button in the index.html file as we created the Purchase Airplane button earlier.

document
	.querySelector("#but")
	.addEventListener("click", survey.logNewAnswer.bind(survey));

//    3. Create a printResults method that prints the survey results to the console. The method takes as input a string (the type parameter), which can be either “string” or “array”. If the type is “array”, just display the answers array as it is using console.log(). This should be the default. If the type is “string”, display a string like this: “Survey results: 7, 5, 3, 2, 6.”

//    4. Метод printResults должен запускаться для каждого вызова метода logNewAnswer

//    5. Use the printResults method to display 2 arrays from test data. Use both "string" and "array" options. Don't put arrays in the survey object! So what should this keyword look like in this situation?

//    Test Data:
//    [7, 1, 4]
//    [3, 6, 9, 2, 5, 4, 4]

survey.printResult.call({ answers: [7, 1, 4] }, "array");
survey.printResult.call({ answers: [3, 6, 9, 2, 5, 4, 4] }, "string");
