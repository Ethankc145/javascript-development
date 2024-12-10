//First Task Map

const createColorMap = () => {
    let colorMap = new Map ();
    colorMap.set(1, "Red");
    colorMap.set(2, "Blue");
    colorMap.set(3, "Green");
    colorMap.set(4, "White");
    colorMap.set(5, "Black");
    colorMap.set(6, "Orange");

    return colorMap;
};
console.log(createColorMap().entries());