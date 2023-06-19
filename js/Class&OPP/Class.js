/*
  Class -> Object


  Instance Properties: what they have
      -name
      -age
      -height
  

      Instance Methods: what they do
      -talk
      -run
      -jump
*/
// class Rectengle {
//   //Setup your object ( behavies like a normal function)
//   constructor (_width,_height,_color){
//     console.log("The Rctengle is being created!");

//     // this.width = 5; // this = key word that refers to the current object which is created by that Class
//     // this.height = 3;
//     // this.color = "blue";

//     this.width = _width; 
//     this.height = _height;
//     this.color = _color;
//   }

//   getArea(){ // Method that gives back the area of the rectangle
//     return this.width * this.height;
//   }

//   printDescription (){
//     console.log(`I am a rectengle of ${this.width} X ${this.height} and I am ${this.color}`);
//   }
// }

// let myRectengle1 = new Rectengle(5,3, "blue");
// let myRectengle2 = new Rectengle(10,5,"red");

// // console.log(myRectengle1.getArea());
// // console.log(myRectengle2.getArea());
// myRectengle2.printDescription();
//-----------------------------------------------------------------------------------------------------------------
/* Getters and Setters
                        -are used to define methods on a Class, which then are used as proprieties.
*/
//  class Square{
//   constructor(_width){
//     this._width = _width;
//     this.height = _width;
//     this.numOfRequestForArea =0;
//   }

//     get area() {
//       this.numOfRequestForArea++;
//       return this._width * this.height;
//     }

//     set area(area) {
//       this.width = Math.sqrt(area);
//       this.height = this.width;
//     }
//  }

//  let square1 = new Square(4);
 //console.log(square1.area);

//  square1.area = 25;
//  console.log(square1.width);
//  console.log(square1.height);

// console.log(square1.area);
// console.log(square1.area);
// console.log(square1.area);
// console.log(square1.area);
// console.log(square1.numOfRequestForArea);

/*
 Static Methods
      Does not require an instant of the Class to be created to be used
*/
    // class Square {
    //   constructor(_width){
    //     this.width = _width;
    //     this.height = _width;
    //   }

    //   static equals (a, b){ // a and b different square instances
    //     return a.width * a.height === b.width * b.height;
    //   }
    //   static isValidDimensions(width,height){
    //     return width === height;
    //   }
    // }
 
    // let square1 = new Square(8);
    // let square2 = new Square(8);
    // //console.log(square1);

    // //console.log(Square.equals(square1,square2)); // true
    // console.log(Square.isValidDimensions(6,7)); // false

/*
    Inheritance and Extends 
    Extends == allows you to achive the concept of inheritance in javaScript
    When you have a generic class and want to actually create a new child of that generic Class while still mentaing it s features and behavior.
*/

    // class Person{
    //   constructor(_name, _age){
    //     this.name= _name;
    //     this.age = _age;
    //   }
    //     describe(){
    //       console.log(`I am ${this.name} and I am ${this.age} years old`);
    //     }
    // }
    
    // class Programmer extends Person{ //achived inheritance
    //   constructor(_name,_age, _yearsOfExpirence){
    //     super(_name,_age); // calls the constructor of the Person class

    //     //Custom behaviour of the Programmer
    //     this.yearsOfExpirence = _yearsOfExpirence;
    //   }

    //   code () {
    //     console.log(`${this.name} is coding`);
    //   }
    // }
    // function developerSoftwear(programmers){
    //   // Developer Software
    //    for(let programmer of programmers){
    //     programmer.code();
    //    }
    // }
    // // let person1 = new Person("Jeff", 45);
    // // let programmer1 = new Programmer("Dom", 56,12);
    // // console.log(person1);
    // // console.log(programmer1);

    // //console.log(person1.code());// will throw an error due to the fdact of it does not have acces to code method
    // //console.log(programmer1.code());
    // const programmers = [
    //   new Programmer("Dom", 56,12),
    //   new Programmer("Jeff", 24,4)
    // ];

    // developerSoftwear(programmers);

    /*
      Polymorphism
    */
  //  class Animal{
  //   constructor(_name){
  //     this.name = _name;
  //   }

  //   makeSounds (){
  //     console.log(`Generic animal sound!!!`);
  //   }
  //  }
  //  class Dog extends Animal{
  //   constructor(name){
  //     super(name);
  //   }
  //   makeSounds () {
  //     //super.makeSounds(); // calling the parent method
  //     console.log("Woof! Woof!");
  //   }
  //  }
  //   const a1 = new Animal("Dom");
  //   const a2 = new Dog("Jeff");
  //  a1.makeSounds();
  //  a2.makeSounds(); 