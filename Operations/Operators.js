// This Function is for Addition and Subtraction
const exampleAddSubtract = (num1, num2) => {
    const Add = num1 + num2;
    const Subtract = num2 - num1;

    console.log(`Addition: ${Add}, Subtraction: ${Subtract}`);
};
// exampleAddSubtract(10, 50);

// Multiply and Divide
const exampleMultiplyDivide = (num1, num2) => {
    const Multiply = num1 * num2;
    const Divide = num2 / num1;

    console.log(`Multiplication: ${Multiply}, Division: ${Divide}`); 
};

//exampleMultiplyDivide(10, 50);
//exampleMultiplyDivide(-10, 50);

//Modulus
const exampleModulus = () => {
    const answer1 = 10 % 4;
    const answer2 = 12 % 3;

    console.log(`Answer1 is ${answer1}, answer2 is: ${answer2}`);
};
//exampleModulus()

//Exponentiation
const exampleExponent = (power) => {
    const answer = 3 ** power;

    console.log(answer);
};
//exampleExponent(10);

// PEMDAS Order
const pemdasfunc = () => (30 /  (4 + 8) * 5 + 10  ** 4 + 7 - 9)
//console.log(pemdasfunc());

// Assignment Operators
const DoAssignmentOperators = () => {
    let numAdd1 = 5;
    const numAdd2 = 10;
    
    //numAdd1 += numAdd2;
    //numAdd1 = numAdd 1 + numAdd2

    //numAdd1 -= numAdd2;
    //numAdd1 = numAdd 1 - numAdd2
    
    //numAdd1 *= numAdd2;
    //numAdd1 = numAdd 1 * numAdd2
    
    //numAdd1 /= numAdd2;
    //numAdd1 = numAdd 1 / numAdd2
    
    //numAdd1 %= numAdd2;
    //numAdd1 = numAdd 1 % numAdd2

    //numAdd2 **= numAdd1;
    //numAdd1 = numAdd 1 ** numAdd2
    console.log(`The numAdd now is: ${numAdd1}`); 
};
//DoAssignmentOperators();

//Comparison Operator
const compareExample = (param1, param2) => {
    const equal = param1 == param2;
    const equalTwo = param1 === param2;
    const notEqual = param1 != param2;
    const notEqualTwo = param1 !== param2;

    //console.log(`equal is : ${equal}\nequalTwo is : ${equalTwo} \nnotEqual is : ${notEqual} \nnotEqualTwo is : ${notEqualTwo}`);
};
//compareExample(1, 2);
compareExample("1", 2);

//Logical Operator
const EvaluationOne = 10 < 11 && 5 > 1; // True
const EvaluationTwo = 'aaa' === 'aaa' || 5 > 1; // True
const EvaluationThree = !('aaa' === 'bbb' || 5 > 1); // False

//console.log(EvaluationOne);
//console.log(EvaluationTwo);
//console.log(EvaluationThree);

//Increment and Decrement
//let numValue = 10;
//let numValue2 = numValue++; // This is the Post-Increment Operation
//console.log(`numValue is ${numValue} \nnumValueTwo is: ${numValue2}`);

//let numValue = 10;
//let numValue2 = ++numValue; // This is the Pre-Increment Operation
//console.log(`numValue is ${numValue} \nnumValueTwo is: ${numValue2}`);

//let numValue = 10;
//let numValue2 = numValue--; // This is the Post-Increment Operation
//console.log(`numValue is ${numValue} \nnumValueTwo is: ${numValue2}`);

let numValue = 10;
let numValue2 = --numValue; // This is the Pre-increment Operation
console.log(`numValue is ${numValue} \nnumValueTwo is: ${numValue2}`);

