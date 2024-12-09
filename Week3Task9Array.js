//Ninth Task Array
function addTwoArrays(arrayOne, arrayTwo) {

const maxlength = Math.max(arrayOne.length, arrayTwo.length)

const result = [];

for (let index = 0; index < maxlength; index++) {
    const valueOne = index < arrayOne.length ? arrayOne[index] : 0;
    const valueTwo = index < arrayTwo.length ? arrayTwo[index] : 0;

    result.push(valueOne + valueTwo)
   }

 return result;
}

const arrayOne = [1, 0, 2, 3, 4,];
const arrayTwo = [3, 5, 6, 7, 8, 13];

console.log(addTwoArrays(arrayOne, arrayTwo,));

