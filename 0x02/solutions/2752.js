const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split(' ').map(Number);
for(let i =0;i<input.length;i++){
    for(let j = i+1;j<input.length;j++){
        let smaller = input[i]>input[j] ? input[j] : input[i];
        let larger = input[i]>input[j] ? input[i] : input[j];
        input[i] = smaller;
        input[j] = larger;
    }
}
console.log(input.join(' '));