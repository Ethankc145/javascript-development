//Fifth Task Array
function findLongestWord (str) {
    const words = str.split(' ')

    let longestWord = '';

    for (let index = 0; index < words.length; index++) {
        if (words[index].length > longestWord.length) {
            longestWord = words[index]
        } 
    }

    return `The longest word is ${longestWord}`;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); 