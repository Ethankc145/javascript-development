//First Task Operators
function calulator () {
    let result1 = 10 + 32 * 12 / 3;
    let result2 = 10 + 32 * 12 / 3;

    result1 = 10 + (32 *(12/3));
    result2 = (10 + 32) * (12/3);
    
    return [result1, result2]
};

const [output1, output2] = calulator();
console.log(output1);
console.log(output2);
