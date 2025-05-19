//영식 요금제 > 30초에 10원
//민식 요금제 60초에 15원
//동호의 요금제 뭐가 나은가?

//출력 Y/M 요금

const input = require("fs").readFileSync("./input.txt").toString().trim().split("\n");
let [callCnt, callTime] = input;
let resultY = 0;
let resultM = 0;
callCnt = Number(callCnt);
callTime = callTime.split(" ").map(Number);


for (time of callTime) {
    resultY += yCall(time);
    resultM += mCall(time);
}

if (resultY > resultM) {
    console.log("M " + resultM)
} else if (resultY == resultM) {
    console.log("Y M " + resultY)
} else {
    console.log("Y " + resultY)
}


function callPrice(time, unit, price) {
    return (Math.floor(time / unit) + 1) * price;
}
function yCall(time) {
    return callPrice(time, 30, 10);
}
function mCall(time) {
    return callPrice(time, 60, 15);
}