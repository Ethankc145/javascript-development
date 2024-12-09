//Tenth Task Array
function swapCase(str) {
    let result = ''

    for (let index = 0; index < str.length; index++) {
        const char = str[index];
        
        if (char === char.toUpperCase()) {
            result += char.toLowerCase()
        } else {
            result += char.toUpperCase()          
        }
    }

   return result;
}

console.log(swapCase('The Quick Brown Fox'));
