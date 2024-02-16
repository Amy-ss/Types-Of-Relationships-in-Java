//"Is a" Relationship (Inheritance)

// Superclass
class Shape {
    draw() {
        console.log("Drawing shape");
    }
}

// Subclass
class Circle extends Shape {
    draw() {
        console.log("Drawing circle");
    }
}

let circle = new Circle();
circle.draw(); // Outputs: Drawing circle
