//Fourth Task Class and Object
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    calculateArea() {
        return this.width * this.height;
    }

    calculatePerimeter() {
        return 2 * (this.width + this.height)
    }
}

const rectangle = new Rectangle(10, 5);

console.log("Rectangle Area:", rectangle.calculateArea());
console.log("Rectangle Perimeter:", rectangle.calculatePerimeter());
