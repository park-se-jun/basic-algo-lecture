const input = require('fs').readFileSync("./input.txt").toString().trim().split("\n").map(Number);
const visited = Array.from({ length: input.length }).fill(false);
//난쟁이의 키의 합은 100이 된다.
//10개중 7개를 고르고 합을 구한다.(조합)
let combinations = getCombinations(input, 7);
for (combination of combinations) {
    if (combination.reduce((a, b) => a + b) === 100) {
        combination.sort((a, b) => a - b)
        console.log(combination.join('\n'));
        return
    }
}
function getCombinations(arr, r) {
    const results = [];
    function recur(start, comb) {
        if (comb.length === r) {
            results.push([...comb]);
            return;
        }
        for (let i = start; i < arr.length; i++) {
            comb.push(arr[i]);
            recur(i + 1, comb);
            comb.pop();
        }
    }

    recur(0, []);
    return results;
}