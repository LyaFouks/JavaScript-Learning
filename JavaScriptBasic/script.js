const money = 100;
const cost = 100;
// money >= cost ? console.log("You can buy it.") : console.log("You can't buy it.");

const canYouBuyIt = (money >= cost) ? "You can buy it." : "You can't buy it.";

console.log(canYouBuyIt);

let canYouBuyIt1;
if(money >= cost) {
   canYouBuyIt1 = "You can buy it.";
} else {
   canYouBuyIt1 = "You can't buy it.";
}

console.log(canYouBuyIt1);

console.log(`You can ${money >= cost ? " " : "'t "}buy it. `)