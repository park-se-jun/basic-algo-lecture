let cardDeck = new Array(20);
for (let i = 0; i < cardDeck.length; i++) {
    cardDeck[i] = i + 1;
}
const inputs = require("fs").readFileSync("./input.txt").toString().trim().split("\n");

for (input of inputs) {
    let [start, end] = input.split(' ').map(Number)
    let reversed = cardDeck.slice(start - 1, end).reverse();
    cardDeck.splice(start - 1, end - start + 1, ...reversed);
}
console.log(cardDeck.join(' '))
