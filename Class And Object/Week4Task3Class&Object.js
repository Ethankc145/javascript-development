//Third Task Class and Object
class Person {
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }
        displayDetails() {
            console.log(`Name: ${this.name}, Age:${this.age}, Country: ${this.country}`);
            
    }
}

const person1 = new Person("Long", 45, "Vietnam")
const person2 = new Person("Michele", 45, "Vietnam")

person1.displayDetails();
person2.displayDetails();