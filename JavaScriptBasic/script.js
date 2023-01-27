const userOne = ['Nikita', 'Lya', 1991, 'Developer', ['Anjela', 'Zabava'], false];

for(let i = userOne.length - 1; i >= 0; i--) {
    console.log(i, userOne[i]);
};


for(let exercise = 1; exercise <= 3; exercise++) {
    console.log(`Exercise ${exercise}`);

    for(let rep = 1; rep <= 5; rep++) {
        console.log(`Rep ${rep}`);
    }
    console.log('Out of inner loop');
}

console.log('Out of outer loop');
