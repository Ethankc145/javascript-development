//Fifth Task Function
function circleArea(radius, pi = 3.14) {
    const area = pi * Math.pow (radius, 2);
    return area.toFixed(2);
};
console.log(circleArea(5));
console.log(circleArea(3.14159));
