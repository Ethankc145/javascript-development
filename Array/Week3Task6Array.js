//Sixth Task Array

const checkIfPresent = (value) => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    if (arr.includes(value)) {
      console.log(`${value} is present in the array`);
    } else {
      console.log(`${value} is NOT present in the array`);
    }
}

checkIfPresent(8);
checkIfPresent(30);