const input = require("fs").readFileSync('./input.txt').toString().trim().split('\n').map(Number)
const oddArray = input.filter(value=> value%2);
if(oddArray.length == 0){
    console.log(-1)
    return 0
}
console.log(oddArray.reduce((a,b)=> a+b))
console.log(Math.min(...oddArray))