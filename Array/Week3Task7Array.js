//Seventh Task Array
const conputeSumAndProtect = (array) => {
    let sum = 0;
    let product = 1;


for (let index = 0; index < array.length; index++) {
    sum += array[index]
    product *= array[index]
   }

   return {sum: sum, product: product};
}

const result = conputeSumAndProtect([1, 2, 3, 4, 5, 6,]);

console.log(`Sum: ${result.sum}`);
console.log(`Product: ${result.product}`);