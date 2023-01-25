const numbers = [32, 2, 65, 123];
let result;

result = numbers.length;
console.log(result);

result = Array.isArray(numbers);
console.log(result);

result = numbers.indexOf(65);
console.log(result);

// push(), pop()

result = numbers.push(87);
console.log(result);

result = numbers.push(63, 32, 15);
console.log(result);

result = numbers.pop();
console.log(result);

// shift(), unshift()

result = numbers.unshift(3);
console.log(result);

result = numbers.unshift(98, 132, 56);

result = numbers.shift();
console.log(result);



result = numbers.splice(1, 1);
console.log(result);
result = numbers.splice(2, 3);
console.log(result);



result = numbers.reverse();
console.log(result);



result = numbers.slice(1, 4);
console.log(result);



result = numbers.concat(result);
console.log(result);


console.log(numbers);