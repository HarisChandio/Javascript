/**
 * JavaScript ES6 Examples
 * File: es6.js
 * Author: Haris 
 * Date: August 2, 2023
 */

// Example 1: Basic String and Array Operations
// Demonstrates basic string manipulation and array operations in JavaScript.

let string = 'Haris';
console.log(string.length);
console.log(string[0]);
console.log(string.indexOf('Ha'));
console.log(string.slice(0, 3));

let cities = ['karachi', 'hyd', 'badin'];
for (let k in cities) {
  k.charAt(0).toUpperCase();
}
let we = 1 + 3;
console.log(we);

// Example 2: Object Creation and Usage
// Illustrates object creation using object literals and factory functions.

const product = {
  itemName: "flower",
  price: 50,
  discount: 20,
  itemCode: "F40",
};

function createProduct(itemName, price, discount, itemCode) {
  return {
    itemName: itemName,
    price: price,
    discount: discount,
    itemCode: itemCode,
  };
}

function newProduct(itemName, price, discount, itemCode) {
  product = {
    itemName: itemName,
    price: price,
    discount: discount,
    itemCode: itemCode,
  };
  //console.log(product);
}

newProduct("football", 400, 10, "F30");

const football = createProduct("football", 400, 10, "F30");
console.log(football);

// Example 3: Defining Classes and Inheritance
// Defines a class and demonstrates inheritance using the extends keyword.

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`My name is ${this.name}, and I am ${this.age} years old`);
  }
}

let person1 = new Person("Haris", 21);
person1.sayHello();

// Example 4: Object Literals and Factory Functions
// Shows the usage of object literals and factory functions to create objects.

const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 1
  },
  draw: function () {
    console.log('draw');
  }
};

circle.draw();

function createCircle(radius) {
  return {
    radius,
    location: {
      x: 5,
      y: 1
    },
    draw: function () {
      console.log('draw');
    }
  };
}

const circle1 = createCircle(1);

let c = circle1.location.x;
//console.log(c);

// Example 5: Constructor Functions and Object Iteration
// Introduces constructor functions and iterates through object properties.

function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    //S console.log('draw');
  }
}

let circul = new Circle(10);

for (let key in circul) {
  if (typeof circul[key] !== 'function') {
    console.log(key, circul[key]);
  }
}

const circlekeys = Object.keys(circul);
console.log(circlekeys);

if ('radius' in circul) {
  console.log('it is');
}

let circle2 = new Circle(40);
const propertyName = 'location';
circle2[propertyName] = { x: 1 };

// Example 6: Using Object.defineProperty
// Demonstrates how to use Object.defineProperty to define getter and setter methods for an object property.

function Circle(radius) {
  this.radius = radius;
  let defaultLocation = { x: 2, y: 2 };

  this.draw = function () {
    console.log("draw");
  };

  this.show = function () {
    console.log(defaultLocation);
  };

  Object.defineProperty(this, "defaultProperty", {
    get: function () {
      return { ...defaultLocation };
    },
    set: function (value) {
      if (value.x !== undefined) {
        defaultLocation.x = value.x;
      }
      if (value.y !== undefined) {
        defaultLocation.y = value.y;
      }
    },
  });
}

// Example 7: Using setTimeout with Arrow Function
// Shows how to use setTimeout with an arrow function to preserve the value of 'this'.

const person = {
  name: "mosh",
  talk() {
    setTimeout(() => {
      console.log("this", this);
    }, 1000);
  },
};

// Example 8: Array.map Function
// Uses the map function to modify an array and generate a new list with HTML list items for each color.

const colors = ["red", "blue", "green"];
const colorList = colors.map((color) => "<li>" + color + "</li>");

// Example 9: Object Destructuring
// Illustrates object destructuring to extract specific properties from an object.

const address = {
  street: 'street',
  city: '',
  country: ''
}

/*
const street = address.street;
const city = address.city;            ///OLD JAVASCRIPT
const country = address.country;
*/
const {street, city, country} = address; // with es6, isnt it easy

const { street: st } = address; // incase if u want only one key 
//and want to change the name like street as st

// Example 10: Spread Operator
// Demonstrates the spread operator to combine arrays and objects efficiently.

const first = [1, 2, 3];
const second = [4, 5, 6];
const combined = first.concat(second); //old method and new members can't be combined with this
//console.log(combined);

let spreadCombined = [...first, ...second];
//console.log(spreadCombined)

spreadCombined = ['a', ...first, 'b', ...second, 'c'];
//console.log(spreadCombined)

const obj1 = { name: "Haris" };
const obj2 = { job: "intern" };
const spreadObj = { ...obj1, ...obj2, location: 'Hyd, Sindh' };
//console.log(spreadObj);

// Example 11: Defining Classes and Inheritance (continued)
// Further demonstrates class definitions and inheritance using extends.

class Student {
  constructor(name) {
    this.name = name;
  }

  code() {
    console.log(`${this.name} is coding`);
  }
}

const beginner = new Student('Haris');

class Coder extends Student {
  constructor(name, degree) {
    super(name);
    this.degree = degree;
  }

  education() {
    console.log(this.name + this.degree)
  }
}

const newCoder = new Coder('Haris', ' CS UnderGraduate');
newCoder.education();

// Example 12: Modifying Object Properties
// Converts numerical values of object properties into corresponding characters.

const myObject = {
  name: 'Alice',
  age: 25,
  city: 'New York',
  profession: 'Engineer',
  hobby: 'Reading',
  language: 'JavaScript',
  score: 90,
  country: 'USA',
  gender: 'Female',
  favoriteColor: 'Blue',
};

const keys = Object.keys(myObject);
let num = 1;
for (let key of keys) {
  myObject[key] = String.fromCharCode(96 + num++);
}

console.log(myObject);
