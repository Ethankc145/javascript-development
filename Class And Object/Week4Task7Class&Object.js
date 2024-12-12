//Seventh Task Class and Object
class Shape {
    calculateArea(){
        throw new Error("Method 'caculateArea()' mist be implemented")
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    calculateArea() {
        return Math.PI * Math.pow(this.radius, 2);
    }
}

class Triangle extends Shape {
    constructor(base, height) {
        super();
        this.base = base;
        this.height = height;
    }

    calculateArea() {
        return 0.5 * this.base * this.height
    }
}

const circle = new Circle (5);
console.log(`The area of the circle is: ${circle.calculateArea().toFixed(2)}`);

const triangle = new Triangle(10, 8);
console.log(`The area of the triangle is: ${triangle.calculateArea().toFixed(2)}`);

