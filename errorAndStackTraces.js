let variableA;
// const variableB = '';

// aVariable();

console.log('hello');

function calNum(numOne, numTwo) {
    return numOne + numTwo
}

// console.log(calNum(50, 50))

if (calNum(1,1)==2){
    console.log('the result from the ${calNum} function 2');   
}

const func = "func"
// const func = () => console.log("eewfewefbf");
const funcThree = () => console.log("I am funcThree");
const funcTwo = () => funcThree()
const funcOne = () => funcTwo()

funcOne()
