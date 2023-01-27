// for(let rep = 1; rep <= 10; rep = rep + 2) {
//     console.log(`Push ups repetition ${rep}`);
// }

// const userOne = ['Nikita', 'Lya', 1991, 'Developer', ['Anjela', 'Zabava']];

// const types = [];

// for(let i = 0; i < userOne.length; i++) {
//     console.log(userOne[i], typeof userOne[i]);

//     // types[i] = typeof userOne[i];
// //    types.push(typeof userOne[i]);
//    types.unshift(typeof userOne[i]);
// }

// console.log(types);


// const birthYears = [1994, 1991, 1965, 2011];
// const ages = [];

// for(let i = 0; i < birthYears.length; i++) { 
//     ages.push(2023 - birthYears[i]);
// }

// console.log(ages);


// Continue and break

const userOne = ['Nikita', 'Lya', 1991, 'Developer', ['Anjela', 'Zabava'], false];


console.log('CONTINEU EXAMPLE!');

for(let i = 0; i < userOne.length; i++) {
if(typeof userOne[i] !== 'string' ) continue;
    console.log(userOne[i], typeof userOne[i]);
}


console.log('BREAK EXAMPLE!');

for(let i = 0; i < userOne.length; i++) {
    if(typeof userOne[i] === 'number' ) break;
        console.log(userOne[i], typeof userOne[i]);
    }

