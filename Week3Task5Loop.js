//Fifth Task Loop
const sumOfDigits = (number) => {
  let sum = 0;

  number.toString().split('').forEach(digit => {
    sum += parseInt(digit);
  });
  
  return sum;
 }

  let num1 = 385;
  let num2 = 123;
  
  console.log(`The sum of digits in ${num1} is ${sumOfDigits(num1)}.`);
  console.log(`The sum of digits in ${num2} is ${sumOfDigits(num2)}.`);