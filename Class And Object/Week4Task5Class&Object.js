//Fifth Task Class and Object
class Vehicle{
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    displayDetails() {
        console.log(`Vehicle: ${this.make} ${this.model} ${this.year}`);
    }
}

class Car extends Vehicle {
    constructor(make, model, year, doors) {
        super(make, model, year)
        this.doors = doors;

    }

    displayDetails() {
        console.log(`Car: ${this.make} ${this.model} ${this.year}, Doors: ${this.doors}`);
    }
}

const vehicle = new Vehicle("Chevy", "Camero", 2011,);
const car = new Car("Lexus", "ES", 2002, 4);

vehicle.displayDetails();
car.displayDetails()