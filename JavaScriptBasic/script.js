// for(let rep = 1; rep <= 10; rep++) {
//         console.log(`Rep ${rep}`);
// }

// let rep = 1;

// while (rep <= 10) {
//     console.log(`Push ups repetition ${rep}`);
//     rep++;
// }


let diceNumber = Math.trunc(Math.random() * 6) + 1;


while(diceNumber !== 6) {
    console.log(diceNumber);
    diceNumber = Math.trunc(Math.random() * 6) + 1;
}