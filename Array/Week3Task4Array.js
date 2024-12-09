//Fourth Task Array
const isPalindrome = (str) => {
    let cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    let reversedStr = cleanedStr.split('').reverse().join('')

    return cleanedStr === reversedStr;
}

console.log(isPalindrome("racecar")); //Enter True
console.log(isPalindrome("hello")); //Enter False
