function printTexts(){
    console.log('Hello World!');
}

//printTexts();

function returndFunction(){
    return 'Hello, JavaScript!';
}

//const result = returndFunction();
//console.log(result);

//console.log(returndFunction());

function printInput(message){
    console.log(message);
}

//printInput('Hello, There!');
//printInput(100);
//printInput('100')
//printInput(returndFunction())

const FunctionContainer = function(){
    console.log('I come from a function expression.');
};
//FunctionContainer();

const FunctionContainer2 = function(Length, Width){
    console.log(Length * Width);
};

//FunctionContainer2(20, 10);

// Arrow Function
//const ArrowFunction = () => {
//    console.log('I come from an Arrow Function.');    
//};
const ArrowFunction = () => console.log('I come from an Arrow Function.');
//ArrowFunction();

//const ReturnArrowFunction = () => {
//    return 10 + 10;
//}
const ReturnArrowFunction = () => 10 + 10;
//console.log(ReturnArrowFunction());

//Global and Local Variables
//Nested Function
const globalVar = 'abc'; // This variable is a global one meaning that i can be seen throughout you rwhole program or application.
function parentFunction(param1){
    const Total = 100;
    console.log(globalVar);
    console.log(result);
    
    // This is an Inner Function
    function ChildFunction(){
        const result = Total + param1; // Result is a local variable to the childFunction function.
        console.log(result);  
        console.log(globalVar);
              
    }

    ChildFunction();
}
parentFunction(200);

function Initalizer(){
    const name='Chrome Browser';
    function DisplayName(){
        console.log(name);
    }
    DisplayName();
}
//Initalizer();

//Closure
function OuterFunction(param){
    const innerVariable=4
    function InnerFunction(){
        return param + innerVariable
    }
return InnerFunction;
}

//const functionHolder = OuterFunction(6);
//console.log(functionHolder());

//console.log(OuterFunction(6)());

// A closure function has access to the variables in its parent even after the parent function has been called or finished.
function makeCounter(){
    let count=0;
    return function(){
        return (count = count + 1);
    };
}
const counter = makeCounter();

//console.log(counter());
//console.log(counter());
//console.log(counter());

const addFive = (function (){
    let total = 0
    return function (){
        return total = total + 5;
        return total;
    }
})();

//addFive();
//addFive();
//console.log(addFive());

//Default Parameters
//Only define default parameters at the end of your function parameter list.
const subtractNumber=(numOne, numTwo = 10,)=>{
    return numOne - numTwo;
};
//console.log(subtractNumber(10, 20));
//console.log(subtractNumber(10));

const addNumber=(numOne, numTwo = 10, numThree = 30)=>{
    return numOne + numTwo + numThree;
};
//console.log(addNumber(10, 20, 30));
//console.log(addNumber(10,20));
//console.log(addNumber(5));

//Rest Parameters
//A rest paremeter can hold as many arguments as you want it to.
const groupSamples=(...param)=> {
    console.log(param);
};
//groupSamples('a', 'b', 'c','d'); //Same Data Type Arguments.
//groupSamples('a', 2, 2.99, true); //Different Data Type Arguments.
