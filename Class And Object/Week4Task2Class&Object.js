//Second Task Class and Object
class Person {
    #name;
    #age;
    #gender; 
    #hobby;
    
    constructor(name, age, gender, hobby) {
        this.#name = name;
        this.#age = age;
        this.#gender = gender;
        this.#hobby = hobby;
    }
    get name() {
        return this.#name
    }

    set name(name) {
        this.#name = name
    }

    get age() {
        return this.#age
    }

    set age(age) {
        this.#age = age
    }

    get gender() {
        return this.#gender
    }

    set gender(gender) {
        this.#gender = gender
    }

    get hobby() {
        return this.#hobby
    }

    set hobby(hobby) {
        this.#hobby = hobby
    }

    introduce() {
        return `Hello my name is ${this.#name}, I am ${this.#age} years old, identify as ${this.#gender}, and my hobby is ${this.#hobby}.`; 
    }
}

const person = new Person("Ethan", 20, "Male", "To build Model Kits")
console.log(person.introduce());

//person.setName("Ian")
//console.log(person.getName());
//person.setAge(13);
//console.log(person.getAge());
console.log(person.name);

