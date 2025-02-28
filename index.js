/*
  EXAMPLE TASK:
    - Write an Airplane constructor that initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property is set to true.
        + If a plane lands, its `isFlying` property is set to false.
*/

// EXAMPLE SOLUTION CODE:
function Airplane(name) {
  this.name = name;
  this.isFlying = false;
}
Airplane.prototype.takeOff = function () {
  this.isFlying = true;
};
Airplane.prototype.land = function () {
  this.isFlying = false;
};

/*
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
*/

/*
  TASK 1
    - Write a Person Constructor that initializes `name` and `age` from arguments.
    - All instances of Person should initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + When eating an edible, it should be pushed into the `stomach`.
        + The `eat` method should have no effect if there are 10 items in the `stomach`.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` should empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.stomach = [];
}

Person.prototype.eat = function (edible) {
  if (this.stomach.length < 10) {
    this.stomach.push(edible);
  }
  console.log(this.stomach);
};

Person.prototype.poop = function () {
  this.stomach = [];
  console.log(this.stomach);
};

Person.prototype.toString = function () {
  return `${this.name}, ${this.age}`;
};

const kyler = new Person("Kyler", 25);
const ben = new Person("Ben", 20);

console.log(kyler.toString());
console.log(ben.toString());
ben.eat("pizza");
ben.eat("salad");
ben.eat("icescream");
ben.eat("cupcake");
ben.eat("sushi");

console.log(ben.stomach);
ben.poop();
console.log(ben.stomach);

/*
  TASK 2
    - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with an `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
   
   
    - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
        - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/

function Car(model, milesPerGallon) {
  this.model = model;
  this.milesPerGallon = milesPerGallon;
  this.tank = 0;
  this.odometer = 0;
}
Car.prototype.fill = function (gallons) {
  this.tank = gallons + this.tank;
};
Car.prototype.drive = function (distance) {
  const milesAvailible = this.milesPerGallon * this.tank;

  const gallonsUsed = distance / this.milesPerGallon;

  if (milesAvailible <= distance) {
    this.tank = 0;
    this.odometer += milesAvailible;
    return `I ran out of fuel at ${this.odometer}`;
  } else {
    this.tank -= gallonsUsed;
    this.odometer += distance;
  }
};

const toyota = new Car("Toyota", 25);
console.log(toyota.fill(10));

console.log(toyota.drive(100));
console.log(toyota.tank, toyota.odometer);

/*
  TASK 3
    - Write a Baby constructor subclassing Person.
    - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
    - Besides the methods on Person.prototype, babies have the ability to `.play()`:
        + Should return a string "Playing with x", x being the favorite toy.
*/
function Baby(name, age, favoriteToy) {
  // this.name = name;
  // this.age = age;
  Person.call(this, name, age);
  this.favoriteToy = favoriteToy;
}

Baby.prototype = Object.create(Person.prototype);

Baby.prototype.context = function () {
  return `The babies name is ${this.name} and its ${this.age} years old, and its favorite toy is ${this.favoriteToy}`;
};

Baby.prototype.play = function () {
  return `Playing with ${this.favoriteToy}`;
};

const lucy = new Baby("Lucy", "5", "train");
console.log(lucy.context());
console.log(lucy.play());

lucy.eat("pizza");
lucy.eat("salad");
lucy.eat("sushi");
lucy.eat("icescream");
lucy.eat("fries");

console.log(lucy.eat("chips"));
console.log(lucy.poop());
/* 
  TASK 4
  In your own words explain the four principles for the "this" keyword below:
  1. in window binding the value of this will be in the window and console object.
  2. in implicit binding the object that is calling the function, the object before the dot is this.
  3. in the new binding the this is refering to the specific instance that is created and returned by the constructor function. when we call the function we have to use the new keyword.
  4. explicit binding is when we use the call or apply method this is explicitly defined.
*/

///////// END OF CHALLENGE /////////

/* 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 */
function foo() {
  console.log("its working!");
  return "bar";
}
foo();
module.exports = {
  foo,
  Person,
  Car,
  Baby,
};
