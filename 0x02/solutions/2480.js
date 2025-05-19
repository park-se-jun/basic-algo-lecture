let input = require('fs').readFileSync('./input.txt').toString().trim().split(' ').map(Number)
//case1 같은 눈이 3개
let mySet = new Set(input)
mySet.size === 1 ? console.log(10000 + input[0] * 1000) :
//case 2 같은눈이 2개
mySet.size === 2 ? console.log(1000 + (input[0] === input[1] ? input[0] : input[2]) * 100) :
//case3 모두 다른 눈
console.log(Math.max(...input) * 100);