// Solved by Obay and Moaaz

function Rectangle(width, height) {
  this.width = width;
  this.height = height;
}

function Square(width) {
  this.width = width;
  this.height = width;
}

var getAreaPrototype = {
  getArea : function () {
    return this.width * this.height;
  }
}
Rectangle.prototype = getAreaPrototype;
Square.prototype = getAreaPrototype;

var square = new Square(10);
var rectangle = new Rectangle(10,19);

console.log(square.getArea());
console.log(rectangle.getArea());
