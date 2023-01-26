const myData = {
    name: 'Nikita',
    lastName: 'Lya',
    birthYear: 1991,
    proffesion: 'Developer',
    familyMembers: ['Anjela', 'Zabava', 'Nikita'],
};


console.log(myData);
console.log(myData.name);
console.log(myData['name']);

const baseName = ' name';
console.log(myData[`lastName`] + baseName);

// const userInput = prompt('What do you want to know about Nikita? Choose between name, lastName, birthYear, proffesion, familyMembers');

// if(myData[userInput]) {
//     console.log(myData[userInput]);
// } else {
//     console.log('This property does not exist. Choose between name, lastName, birthYear, proffesion, familyMembers')
// }


// Create new properties

myData.location = 'Ukraine';
myData['Skype'] = 'itssantinno';

console.log(myData);


// Challenge

const message = `${myData.name} has ${myData.familyMembers.length} family members and the first one is ${myData.familyMembers[0]}`

console.log(message);