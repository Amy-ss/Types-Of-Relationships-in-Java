//"Has a" Relationship (Composition)

// Class representing an Engine
class Engine {
    start() {
        console.log("Engine started");
    }
}

// Class representing a Car
class Car {
    constructor() {
        this.engine = new Engine();
    }

    startCar() {
        this.engine.start();
        console.log("Car started");
    }
}

let car = new Car();
car.startCar(); // Outputs: Engine started\nCar started
