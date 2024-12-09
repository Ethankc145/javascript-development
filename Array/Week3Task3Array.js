//Third Task Array
const copyArray = (arr) => {
    return arr.slice();
}

let originalArray = [1, 2, 3, 4, 5];
let copiedArray = copyArray(originalArray);

console.log('Original Array:', originalArray);
console.log('Copied Array:', copiedArray);
