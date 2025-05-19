const input = require('fs').readFileSync('./input.txt').toString().trim().split('\n').map((value,)=>{
    return value.split(" ")
})
for(let element of input){
    let cnt = 0;
    for(let oneOrZero of element){
        if(oneOrZero==='1') cnt++;
    }
    switch(cnt){
        case 0:
            console.log("D")
            break;
        case 1:
            console.log("C")
            break;
        case 2:
            console.log("B")
            break;
        case 3:
            console.log("A")
            break;
        case 4:
            console.log("E");
            break;
    }
}