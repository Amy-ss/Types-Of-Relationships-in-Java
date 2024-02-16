//"Uses a" Relationship (Dependency)

// Class representing a Car
class Car {
    drive() {
        console.log("Car is being driven");
    }
}

// Class representing a Person
class Person {
    driveCar(car) {
        car.drive();
    }
}

let person = new Person();
let car = new Car();
person.driveCar(car); // Outputs: Car is being driven
