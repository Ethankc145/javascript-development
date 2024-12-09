//Second Task Array
const iceCreamFlavor = ["Vanilla", "Chocolate", "Strawberry", "Taro", "Coconut", "Cookeis and Cream", "Mint Chocolate Chip", "Mango", "Coffee", "Pistacho", "Rocky Road"

];

const printFlavors = (flavors) => {
    const joinedFlavors = iceCreamFlavor.join(' & ');
    console.log(joinedFlavors);
};
printFlavors(iceCreamFlavor)