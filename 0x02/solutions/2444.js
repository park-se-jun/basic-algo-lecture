const input = Number(require("fs").readFileSync("./input.txt").toString().trim());
const stars = new Array(2 * input - 1);
for (let i = 0; i < input; i++) {
    let str = ' '.repeat(input - 1 - i) + '*'.repeat(2 * i + 1);
    stars[i] = str;
    stars[2 * input - 1 - 1 - i] = str;
}
console.log(stars.join('\n'))