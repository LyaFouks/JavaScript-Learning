let result;
const firstName = 'Jack';
const lastName = 'Brown';
const space = ' ';
const age = 25;
const greeting = 'Hey there!';


// Concatanation

result = firstName + space + lastName;

result = greeting + space + 'My name is' + space + firstName + ' ' + lastName + ". I'am " + age + ' years old.';


// Escaping

result = 'I\'m 34 years old';
result = "I like \"Star wars\" movie.";


// Properties and methods

result = 'Hello!'.length;
result = firstName.length;


// Concat

result = firstName.concat(' ', lastName);
result = greeting.concat(space, 'My name is ', firstName, space, lastName);


// toUpperCase() / toLowerCase()

result = result.toUpperCase();
result = result.toLowerCase();


// indexOf()

result = firstName[2];

result = 'Hello'.indexOf('l');
result = 'Hello lol'.lastIndexOf('l');
result = firstName.indexOf('a');
result = 'Hello lol'.lastIndexOf('lo');
result = firstName.indexOf('z');


// charAt()

result = firstName.charAt(1);

const longString = 'Hi, I\'am a long string';

result = longString.charAt(longString.length -1);


// substring()

result = greeting.substring(4, 9);


// slice()

result = greeting.slice(4, 9);
result = greeting.slice(-5);


// split()

result = longString.split(' ');
const colors = 'red, orange, green, blue,';
result = colors.split(',');


// replace()

result = colors.replace('blue', 'yellow');


// includes()

result = colors.includes('blue');




console.log(result);
