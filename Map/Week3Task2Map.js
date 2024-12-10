//Second Task Map

const logKeyValue = (value, key) => {
    console.log(`${key} is for ${value}`);  
}

function displayColors() {
    const colorMap = new Map([
        [1, 'Black'],
        [2, 'Green'],
        [3, 'Blue'],
        [4, 'Yellow'],
        [5, 'Purple'],
        [6, 'Red'],
    ]);

    colorMap.forEach(logKeyValue);
}
displayColors();