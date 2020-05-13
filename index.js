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
  this.name =name;
  this.age=age;
  this.stomach=[];
  }
  
  Person.prototype.eat= function(someFood){
    if(this.stomach.length < 10){
      this.stomach.push(someFood);
    }
  }
  Person.prototype.poop= function(){
    this.stomach = [];
  }
  Person.prototype.toString = function(){
    return `${this.name}, ${this.age}`
  }
  
  const personOne = new Person({
    name: "Mary",
    age: 50,
  });
  console.log(personOne.toString());
  personOne.eat('rice');
  personOne.eat('pizza');
  personOne.eat('pasta');
  console.log(personOne.stomach);
  personOne.poop();
  console.log(personOne.stomach);

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

function Car(model,milesPerGallon,tank,odometer) {
  this.model = model;
  this.milesPerGallon = milesPerGallon;
  this.tank=[];
    this.odometer= odometer;
}
Car.prototype.fill= function(gallons){
  return (gallons + this.tank)
  };

let newCar= new Car({
  model:'Toyota',
  milesPerGallon: 50,
  

})
console.log(newCar.fill(30));
 

 

/*
  TASK 3
    - Write a Baby constructor subclassing Person.
    - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
    - Besides the methods on Person.prototype, babies have the ability to `.play()`:
        + Should return a string "Playing with x", x being the favorite toy.
*/
function Baby(favoriteToy) {
Person.call(this.name,this.age)
this.favoriteToy=favoriteToy;
}
Baby.prototype= Person.call(Baby);

let baby1= new Baby({
  favoriteToy: 'car',
})
Baby.prototype.play= function(){
  return `play with ${this.favoriteToy}`
}
console.log(baby1.play);
/* 
  TASK 4

  In your own words explain the four principles for the "this" keyword below:
  1. Window binding:- it's the defalt if none of others rule applay 'this' defaults to the window.
  2. Implicit binding:- only applies to object with methodos. When we invoked we look the left side of the dot thates where 'this' refer too.
  3. Explicit Binding:- Help us to tell what this keyword should refers to. Three way to tell this is .call, .apply, .bind
  4. New bindin:- when function is invoked as a constructor function using the 'new ' keyword 'this' points to the new object thats created.
*/


///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
if (typeof exports !== 'undefined') {
  module.exports = module.exports || {}
  if (Airplane) { module.exports.Airplane = Airplane }
  if (Person) { module.exports.Person = Person }
  if (Car) { module.exports.Car = Car }
  if (Baby) { module.exports.Baby = Baby }
}
