const myData = {
    name: 'Nikita',
    lastName: 'Lya',
    birthYear: 1991,
    proffesion: 'Developer',
    familyMembers: ['Anjela', 'Zabava', 'Nikita'],
    hasDriverLicense: false,
    // calcAge: function(birthYear) {
    //     return 2023 - birthYear;
    // }
    // calcAge: function() {
    //     // console.log(this);
    //     return 2023 - this.birthYear;
    // }
    calcAge: function() {
        return this.age = 2023 - this.birthYear;
        
    },

    getSummary: function() {
        return `${this.name} is a ${this.calcAge()}-years old ${this.proffesion} and he ${this.hasDriverLicense ? "has" : "hasn't"} a driver license`;
    }
};



// console.log(myData.calcAge());
// console.log(myData.calcAge());
// console.log(myData.calcAge());
// console.log(myData.calcAge());
// console.log(myData.age);

console.log(myData.getSummary());



// Chalenge

