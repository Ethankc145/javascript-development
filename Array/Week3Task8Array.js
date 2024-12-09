//Eighth Task Array

function removeDuplicates(array) {
    const uniqueArray = [...new Set (array)];

    return uniqueArray;
}

const result = removeDuplicates([1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6]);

console.log(result);