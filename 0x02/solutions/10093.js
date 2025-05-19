const input = require("fs").readFileSync("./input.txt").toString().trim().split(" ").map(Number)
let left, right;
if (input[0] > input[1]) {
    left = input[1];
    right = input[0];
} else {
    left = input[0];
    right = input[1];
}
if (right === left) {
    console.log(0);
    console.log(' ')
    return
} else {
    console.log(right - left - 1)
}

const result = [];
for (let i = left + 1; i < right; i++) {
    result.push(i);
}
console.log(result.join(' '))