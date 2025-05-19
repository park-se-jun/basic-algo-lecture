function mergeSort(arr, left = 0, right = arr.length - 1) {
    if (right === left) {
        return [arr[left]]
    }

    let mid = Math.floor((left + right) / 2);
    let leftArr = mergeSort(arr, left, mid);
    let rightArr = mergeSort(arr, mid + 1, right);
    return merge(leftArr, rightArr);


}
function merge(leftArr, rightArr) {
    let sortedArr = []
    leftCursor = 0;
    rightCursor = 0;

    while (leftCursor < leftArr.length && rightCursor < rightArr.length) {
        if (leftArr[leftCursor] < rightArr[rightCursor]) {
            sortedArr.push(leftArr[leftCursor]);
            leftCursor += 1;
        } else {
            sortedArr.push(rightArr[rightCursor]);
            rightCursor += 1;
        }
    }
    return sortedArr.concat(leftArr.slice(leftCursor)).concat(rightArr.slice(rightCursor));
}

const input = require("fs").readFileSync("./input.txt").toString().trim().split("\n").map(Number);

const sortedArr = mergeSort(input)
console.log(input.reduce((a, b) => a + b) / input.length)
console.log(sortedArr[Math.floor(sortedArr.length / 2)])