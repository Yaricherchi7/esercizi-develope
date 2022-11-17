// Define a class called `AreaCalculator`. Inside it,
// create a static method that let you calculate the area of
//  the geometric figure passed as parameter. The method will let
//  you calculate the square, the rectangle and the circle area.

class Square {
  constructor(side) {
    this.side = side;
  }
}

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
}

class AreaCalculator {
  static calculate(figure) {
    if (figure instanceof Circle) {
      return Math.PI * (figure.radius * figure.radius);
    } else if (figure instanceof Rectangle) {
      return figure.width * figure.height;
    } else if (figure instanceof Square) {
      return figure.side * figure.side;
    } else {
      console.log("error");
    }
  }
}

const square = new Square(4);
const rectangle = new Rectangle(4, 2);
const circle = new Circle(5);

console.log(AreaCalculator.calculate(square));
console.log(AreaCalculator.calculate(rectangle));
console.log(AreaCalculator.calculate(circle));
