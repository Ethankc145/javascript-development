//Sixth Task Function

function reverseNumber(x) {
    let reversed=x.toString().split("").reverse().join("")
    return parseInt(reversed);
}

let x = 12345;
console.log(reverseNumber(x));
