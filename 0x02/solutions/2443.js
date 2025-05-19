const input = Number(require("fs").readFileSync("./input.txt").toString().trim());
const stars = new Array(2 * input - 1).fill('*');
console.log(stars.join(""));
for (let i = 0; i < (stars.length / 2); i++) {
    stars[i] = ' ';
    stars[stars.length - 1 - i] = '';
    console.log(stars.join(""));
}