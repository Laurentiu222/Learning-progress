// function findPerimeter(length, width) {
// 	return (length*2) + (width*2);
// }
//----------------------------------------------------------------------
// console.log(findPerimeter(20, 10));
// function lessThanOrEqualToZero(num) {
// 	if(num <= 0){
//     return true;
//   }else{
//     return false;
//   }
// }
// console.log(lessThanOrEqualToZero(5));
// console.log(lessThanOrEqualToZero(0));
// console.log(lessThanOrEqualToZero(-2));
//----------------------------------------------------------------------
// function sumPolygon(n) {
// 	if(n>2){
//     return (n-2)*180;
//   }else{
//     return 'Not a poligon';
//   }
// }
// console.log(sumPolygon(3));
// console.log(sumPolygon(4));
// console.log(sumPolygon(1));
//----------------------------------------------------------------------
// function points(twoPointers, threePointers) {
// 	let twoPoints = twoPointers *2;
//   let threePoints = threePointers *3;
//   return twoPoints+threePoints;
// }
// console.log(points(1, 1));
// console.log(points(7, 5));
// console.log(points(38, 8));
//----------------------------------------------------------------------
// function printArray(number) {
//   var newArray = [];

//   for(var i = 1; i <= number;i++) {
//     newArray.push(i);
//   }

//   return newArray;
// }
// console.log(printArray(1));
// console.log(printArray(3));
// console.log(printArray(50));
//----------------------------------------------------------------------
// function animals(chickens, cows, pigs) {
//   let chicken = chickens *2; //2*2 = 4
//   let cow = cows * 4; // 3 *4 = 12
//   let pig = pigs * 4; // 5 *4= 20
//   let totalNumberOfLegs = chicken + cow + pig;
//   return totalNumberOfLegs;
// }
// console.log(animals(2, 3, 5));
// console.log(animals(1, 2, 3));
// console.log(animals(5, 2, 8));
//----------------------------------------------------------------------
// function and(a, b) {
// 	if(a === true && b === true){
//     return true;
//   }else if(a === true && b === false){
//     return false;
//   }else if(a === false && b === true){
//     return false;
//   }else{
//     return false;
//   }
// }
// console.log(and(true, false));
// console.log(and(true, true));
// console.log(and(false, true));
// console.log(and(false, false));
//----------------------------------------------------------------------
// function isSameNum(num1, num2) {
// 	if(num1 === num2){
//     return true;
//   }else {
//     return false;
//   }
// }
// console.log(isSameNum(4, 8));
// console.log(isSameNum(2, 2));
// console.log(isSameNum(2, "2"));
//----------------------------------------------------------------------
// function footballPoints(wins, draws, losses) {
// 	let win = wins *3;
//   let draw= draws * 1;
//   let lose= losses * 0;
//   return win + draw + lose;
// }
// console.log(footballPoints(3, 4, 2));
// console.log(footballPoints(5, 0, 2));
// console.log(footballPoints(0, 0, 1));
//----------------------------------------------------------------------
// function convert(hours, minutes) {
// 	let hour = hours * 60 * 60;
//   let minute = minutes * 60;
//   return hour + minute;
// }
// console.log(convert(1, 3));
// console.log(convert(2, 0));
// console.log(convert(0, 0));
//----------------------------------------------------------------------
// function isSeven(x) {
// 	if(x === 7){
//     return true;
//   }else{
//     return false;
//   }
// }
// console.log(isSeven(4));
// console.log(isSeven(9));
// console.log(isSeven(7));
//----------------------------------------------------------------------
// function checkEquality(a, b) {
//   if( a === b){
//     return true;
//   }else{
//     return false;
//   }
// }
// console.log(checkEquality(1, true));
// console.log(checkEquality("1", "0"));
// console.log(checkEquality(1,  1));
//----------------------------------------------------------------------
// function profitableGamble(prob, prize, pay) {
// 	if(prob * prize > pay){
//     return true;
//   }else { 
//     return false;
//   }
// }
// console.log(profitableGamble(0.2, 50, 9));
// console.log(profitableGamble(0.9, 1, 2));
// console.log(profitableGamble(0.9, 3, 2));
//----------------------------------------------------------------------
// function boolToString(flag) {
// 	if(flag === true){
//     return 'true';
//   }else {
//     return 'false';
//   }
// }
// console.log(boolToString(true));
// console.log(boolToString(false));
//----------------------------------------------------------------------
// arrowFunc = (num) =>{
//   return num;
// }
// console.log(arrowFunc(3));
// console.log(arrowFunc("3"));
// console.log(arrowFunc(true));
//----------------------------------------------------------------------
// function frames(minutes, fps) {
//   let min  = minutes *60;
// 	return min*fps;
// }
// console.log(frames(1, 1));
// console.log(frames(10, 1));
// console.log(frames(10, 25));
//----------------------------------------------------------------------
// function calculator(str) {
//   return eval(str);

// }
// console.log(calculator("23+4"));
// console.log(calculator("45-15"));
// console.log(calculator("13+2-5*2"));
// console.log(calculator("49/7*2-3"));
//----------------------------------------------------------------------
// function greeting(name) {
//   if(name == "Mubashir") {
//     return "Hello, my Love!";
//   }
//   return "Hello, " + name + "!";
// }
// console.log(greeting("Matt"));
// console.log(greeting("Helen"));
// console.log(greeting("Mubashir"));
//----------------------------------------------------------------------
// function makesTen(a, b) {
// 	let sum = a + b;
//   if(a === 10 || b=== 10){
//     return true;
//   }else if(sum === 10){
//     return true;
//   }else{
//    return false;
//   }
// }
// console.log(makesTen(9, 10));
// console.log(makesTen(9, 9));
// console.log(makesTen(1, 9));
// console.log(makesTen(2, 9));
//----------------------------------------------------------------------
// function calculateFuel(n) {
// 	let fuelFull = n * 10;
//   let distnaceLessThen100 = 100;
//   if(fuelFull > 100){
//     return fuelFull;
//   }else if(fuelFull < 100){
//     return distnaceLessThen100 ;
//   }else{
//     return false;
//   }
// }
// console.log(calculateFuel(15));
// console.log(calculateFuel(23.5));
// console.log(calculateFuel(3));
// console.log(calculateFuel(100));
//----------------------------------------------------------------------
// function maxNum(n1,n2) {
// 	if (n1>n2) {
// 	  return n1;
// 	}
//   else if(n1<n2) {
// 	return n2;
//   }
// }
// console.log(maxNum(3, 7));
// console.log(maxNum(-1, 0));
// console.log(maxNum(1000, 400));
//----------------------------------------------------------------------
// function makePair(num1, num2) {
// 	let arr;
//   return arr=[num1,num2];
// }
// console.log(makePair(1, 2));
// console.log(makePair(51, 21));
// console.log(makePair(512124, 215));
//----------------------------------------------------------------------
// function comp(str1, str2) {
// 	if(str1.length === str2.length ){
//     return true;
//   }else{
//     return false;
//   }
// }
// console.log(comp("AB", "CD"));
// console.log(comp("ABC", "DE"));
// console.log(comp("hello", "edabit"));
//----------------------------------------------------------------------
// function isEmpty(s) {
// 	if(s === ''){
//     return true;
//   }else{
//     return false;
//   }
// }
// console.log(isEmpty(""));
// console.log(isEmpty(" "));
// console.log(isEmpty("a"));
//----------------------------------------------------------------------
// function divisibleByFive(n) {
// 	if(n % 5 === 0){
//     return true;
//   }else{
//     return false;
//   }
// }
// console.log(divisibleByFive(5));
// console.log(divisibleByFive(-55));
// console.log(divisibleByFive(37));
//----------------------------------------------------------------------
// function divisible(num) {
// 	if(num % 100 === 0){
//     return true;
//   }else{
//     return false;
//   }
// }
// console.log(divisible(1));
// console.log(divisible(1000));
// console.log(divisible(100));
//----------------------------------------------------------------------
// function length(str) {
// 	for(let i=0;i<str.length;i++){
//     return str.length;
//   }
// }
// console.log(length("apple"));
// console.log(length("a"));
// console.log(length("make"));
// console.log(length(""));
//----------------------------------------------------------------------
// function concatName(firstName, lastName) {
// 	return `${lastName}  ${firstName}`;
// }
// console.log(concatName("First", "Last"));
// console.log(concatName("John", "Doe"));
// console.log(concatName("Mary", "Jane"));
//----------------------------------------------------------------------
// function has_bugs(buggy_code) {
// 	if(buggy_code === true) {
// 		return 'sad days';
// 	} else if(buggy_code === false) {
// 		return 'it is a good day';
// 	}
// }
// console.log(has_bugs(true));
// console.log(has_bugs(false));
//------------------------------MEDIUM----------------------------------------
// function countTrue(arr) {
// 	let result = [];
//  for(let i = 0; i < arr.length; i++) {
//      if (arr[i] === true) {
//          result.push(arr[i]);
//      }
//  }
//  return result.length;
// }
// console.log(countTrue([true, false, false, true, false]));
// console.log(countTrue([false, false, false, false]));
// console.log(countTrue([]));
//----------------------------------------------------------------------
// function redundant(str) {
// 	return str;
// }
// const f1 = redundant("apple");
// console.log(f1);
// const f2 = redundant("pear")
// console.log(f2);
// const f3 = redundant("")
// console.log(f3);
//----------------------------------------------------------------------
// function possibleBonus(a, b) {
// 	return b - a <= 6 && b - a > 0
// }
// console.log(possibleBonus(3, 7));
// console.log(possibleBonus(1, 9));
// console.log(possibleBonus(5, 3));
//----------------------------------------------------------------------
// function shiftToRight(x, y) {
// 	let shift = Math.pow(2,y)
//   return Math.floor(x / shift);
// }
// console.log(shiftToRight(80, 3));
// console.log(shiftToRight(-24, 2));
// console.log(shiftToRight(-5, 1));
// console.log(shiftToRight(4666, 6));
// console.log(shiftToRight(3777, 6));
// console.log(shiftToRight(-512, 10));
//----------------------------------------------------------------------
// function perimeter(l,num){
// 	return (4*(l=='s')+6.28*(l=='c'))*num;
// }
// console.log(perimeter("s", 7));
// console.log(perimeter("c", 9));
//----------------------------------------------------------------------
// function num_of_digits(num) {
// 	return `${num}`.match(/\d/g).length;
// }
// console.log(num_of_digits(1000));
// console.log(num_of_digits(12));
// console.log(num_of_digits(1305981031));
// console.log(num_of_digits(0));
//----------------------------------------------------------------------
// function addName(obj, name, value) {
// 	function item(obj1, name1, value1) {
//     return {
//       obj: obj,
//       name: name,
//       value: value,
//     };
//   }
//   return item();
// }
// console.log(addName({}, "Brutus", 300));
// console.log(addName({ piano: 500 }, "Brutus", 400));
// console.log(addName({ piano: 500, stereo: 300 }, "Caligula", 440));
//----------------------------------------------------------------------
// function derivative(b, m) {
// 	return b*Math.pow(m,b-1);

// }
// console.log(derivative(1, 4));
// console.log(derivative(3, -2));
// console.log(derivative(4, -3));
//----------------------------------------------------------------------
// function generation(x, y) {
// 	if(x===0){
//     return 'me';
//   }else if(x===1 && y==='f'){
//     return 'daughter';
//   }else if(x===1 && y==='m'){
//     return 'son';
//   }else if(x===2 && y==='m'){
//     return 'grandson';
//   }else if(x===2 && y==='f'){
//     return 'granddaughter';
//   }else if(x===3 && y==='f'){
//     return 'great granddaughter';
//   }else if(x===3 && y==='m'){
//     return 'great grandson';
//   }else if(x===-1 && y==='m'){
//     return 'father';
//   }else if(x===-1 && y==='f'){
//     return 'mother';
//   }else if(x===-2 && y==='f'){
//     return 'grandmother';
//   }else if(x===-2 && y==='m'){
//     return 'grandfather';
//   }
// }
// console.log(generation(2, "f"));
// console.log(generation(-2, "m"));
// console.log(generation(1, "f"));
//----------------------------------------------------------------------
// A tetrahedron is a pyramid with a triangular base and three sides. A tetrahedral number is a number of items within a tetrahedron.
// Create a function that takes an integer n and returns the nth tetrahedral number.
// function tetra(n) {
//   return (n * (n + 1) * (n + 2)) / 6;
// }
// console.log(tetra(2));
// console.log(tetra(5));
// console.log(tetra(6));
//----------------------------------------------------------------------
// According to the lodash documentation, _.compact creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.
// Your task is to build this helper function without using lodash. You will write a function that receives an array and removes all falsey values.
// function compact(arr) {
// 	const result =arr.filter(Boolean);
//   return result;
// }
// console.log(compact([0, 1, false, 2, "", 3]));
//----------------------------------------------------------------------
// Create a function that takes a "base number" as an argument. This function should return another function which takes a new argument, and returns the sum of the "base number" and the new argument.
// function makePlusFunction(baseNum) {
// 	return baseNum+10;
// }
// const plusTen = makePlusFunction();
// console.log(makePlusFunction(188));
//----------------------------------------------------------------------
// Write a function that converts an object into an array, where each element represents a key-value pair in the form of an array.
// function toArray(obj) {
// 	let arr = [];
//   return arr = obj;
// }
// console.log(toArray({ a: 1, b: 2 }));
//----------------------------------------------------------------------
// Create a function that concatenates n input arrays, where n is variable.
// function concat(...args) {
//   let arrArgs = [...args];
// 	let arr = [];
//   for(let i=0;i<arrArgs.length;i++){
//      arr.push(...arrArgs[i]);
//   }
//   return arr;
// }
// console.log(concat([1, 2, 3], [4, 5], [6, 7]));
//----------------------------------------------------------------------
// Write a function that returns an anonymous function, which transforms its input by adding a particular suffix at the end.
// function add_suffix(suffix) {
// 	let suf = "ly";
//   return suffix + suf;
// }
// console.log(add_suffix("hopeless"));
//----------------------------------------------------------------------
// This Triangular Number Sequence is generated from a pattern of dots that form a triangle. The first 5 numbers of the sequence, or dots, are:
// 1, 3, 6, 10, 15
// This means that the first triangle has just one dot, the second one has three dots, the third one has 6 dots and so on. Write a function that returns the number of dots when given its corresponding triangle number of the sequence.
// function triangle(n) {
// 	return n*(n+1) / 2
// }
// console.log(triangle(1));
// console.log(triangle(6));
// console.log(triangle(215));
//----------------------------------------------------------------------
// Your task is to create a Circle constructor that creates a circle with a radius provided by an argument. The circles constructed must have two methods getArea() (PI*r^2) and getPerimeter() (2*PI*r) which give both respective areas and perimeter (circumference).For help with this class, I have provided you with a Rectangle constructor which you can use as a base example.
// class Circle {
// 	// put your code here
//   constructor(radius, pi){
//     this.radius = radius
//     this.pi = 3.14
//   }
//   getArea(){return (this.radius**2)*this.pi}
//   getPerimeter(){return this.pi*2*this.radius}
// }
// let q = new Circle(4.44);
// console.log(q.getArea());
// console.log(q.getPerimeter());
//----------------------------------------------------------------------
// Given a total due and an array representing the amount of change in your pocket, determine whether or not you are able to pay for the item. Change will always be represented in the following order: quarters, dimes, nickels, pennies.
//quarters = 1/4 ; dimes =10; nickels =5; pennies =1;
// function changeEnough(change, amountDue) {
// 	let sum = change[0]*0.25 + change[1]*0.1 + change[2]*0.05 + change[3]*0.01;
// 	return sum >= amountDue;
// }
// console.log(changeEnough([2, 100, 0, 0], 14.11));
//----------------------------------------------------------------------
// Create a function that takes two numbers as arguments (num, length) and returns an array of multiples of num until the array length reaches length.
// function arrayOfMultiples (num, length) {
//   let multiple = [];
//     for(let i=1;i<=length;i++){
//         multiple.push(num*i); 
//   }
//    return multiple;
// }
// console.log(arrayOfMultiples(7, 5));
//----------------------------------------------------------------------
// Create a function that takes an object and returns the keys and values as separate arrays.
// function keysAndValues(obj) {
//   return [Object.keys(obj), Object.keys(obj).map(x => obj[x])];
// }
// console.log(keysAndValues({ a: 1, b: 2, c: 3 }));
//----------------------------------------------------------------------
//Write a function that converts an object into an array of keys and values.
// function objectToArray(obj) {
//   let arr =[];
// 	arr.push(obj);
//   return arr;
// }
// function objectToArray(obj) {
// 	const myArray = Object.entries(obj);
// 	return myArray;
// }
// console.log(objectToArray({likes: 2,dislikes: 3,followers: 10}));
//----------------------------------------------------------------------
// Write a class called Rectangle that represents a rectangular two-dimensional region. It should have the following constructor:constructor (x, y, width, height)
// class rectangle {
//   constructor(x, y, width, height) {
//     this.width = width;
//     this.height = height;
//     this.x = x;
//     this.y = y;
//   }
//   toString() {
// 		const {x, y, width, height} = this;
// 		return `[x=${x}, y=${y}, width=${width}, height=${height}]`;
// 	}
// }
// let q = new rectangle(1,2,3,4);
//  console.log(q.toString());
//----------------------------------------------------------------------
// Given a number, n, return a function which adds n to the number passed to it.
// function add(n) {
// 	  return adding = m => n+m;
// }
// console.log(add(0)(20));
//----------------------------------------------------------------------
// Create a function that validates whether a number n is within the bounds of lower and upper. Return false if n is not an integer.
// function intWithinBounds(n, lower, upper) {
// 	if(n>lower && n<upper && Number.isInteger(n)){
//     return true;
//   }else{
//     return false;
//   }
// }
// console.log(intWithinBounds(3, 1, 9));
// console.log(intWithinBounds(6, 1, 6));
// console.log(intWithinBounds(4.5, 3, 8));
//----------------------------------------------------------------------
// function rever(str) {
//   let revStr = [];
//   for (let i = str.length-1; i >= 0; i--) {
//     revStr.push(str[i]);
//   }
//   return revStr;
// }
// console.log(rever("banana"));
//----------------------------------------------------------------------
// A repdigit is a positive number composed out of the same digit. Create a function that takes an integer and returns whether it's a repdigit or not.
// function isRepdigit(num) {
//   if (num < 0) {
//     return false;
//   } else if (num > 0 && num % 11 === 0) {
//     return true;
//   } else if (num === 0) {
//     return true;
//   } else if (num > 0 && num % 11 % 11) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(isRepdigit(66));
// console.log(isRepdigit(0));
// console.log(isRepdigit(-11));
// console.log(isRepdigit(55));
// console.log(isRepdigit(-12));
// console.log(isRepdigit(111));
// console.log(isRepdigit(6))
// console.log(isRepdigit(66))
// console.log(isRepdigit(666))
// console.log(isRepdigit(6666))
// console.log(isRepdigit(1001))
//----------------------------------------------------------------------
// In this challenge you will be given an array similar to the following:[[3], 4, [2], [5], 1, 6]
// In words, elements of the array are either an integer or an array containing a single integer. We humans can clearly see that this array can reasonably be sorted according to "the content of the elements" as:
// Create a function that, given an array similar to the above, sorts the array according to the "content of the elements".
// function sortIt(arr) {
// 	return arr.sort();
// }
// console.log(sortIt([4, 1, 3]));
// console.log(sortIt([[4], [1], [3]]));
// console.log(sortIt([4, [1], 3]));
// console.log(sortIt([[4], 1, [3]]));
// console.log(sortIt([[3], 4, [2], [5], 1, 6]));
//----------------------------------------------------------------------
// Create a function that takes in a number as a string n and returns the number without trailing and leading zeros.
// function removeLeadingTrailing(n) {
// 	return  parseFloat(n).toString();
// }
// console.log(removeLeadingTrailing("230.000"));
// console.log(removeLeadingTrailing("00402"));
// console.log(removeLeadingTrailing("03.1400"));
// console.log(removeLeadingTrailing("30"));
//----------------------------------------------------------------------
// Create a function that returns true if two arrays contain identical values, and false otherwise.
// Fix this broken code!
// function checkEquals(arr1, arr2) {
//   for (let index = 0; index < arr1.length; index++) {
//     if (arr1[index] !== arr2[index]) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(checkEquals([1, 2], [1, 3]));
// console.log(checkEquals([1, 2], [1, 2]));
// console.log(checkEquals([4, 5, 6], [4, 5, 6]));
//----------------------------------------------------------------------
// Write a function that returns an anonymous function, which adds n to its input
// function addsNum(n) {
// 	 return n;
// }
// let adds1 = function(m){
//   return  addsNum(m)+1;
// }
// console.log(adds1(3));
// console.log(adds1(44));
// console.log(adds1(32));
// console.log(adds1(0));
//----------------------------------------------------------------------
// I'm trying to write a function to flatten an array of subarrays into one array. (Suppose I am unware there is a .flat() method in the Array prototype). In other words, I want to transform this: [[1, 2], [3, 4]] into [1, 2, 3, 4].
// function flatten(arr) {
//   arr2 = [];
//   for (let i = 0; i < arr.length; i++) {
//     arr2.push(arr[i]);
//   }
//   return arr2.flat(); 
// }
// console.log(flatten([[1, 2], [3, 4]]));
// console.log(flatten([["a", "b"], ["c", "d"]]));
// console.log(flatten([[true, false], [false, false]]));
//----------------------------------------------------------------------
// Create a function that takes an array of numbers and returns the second largest number.
// function secondLargest(arr) {
// 	 arr.sort();
//    console.log(arr);
//    return arr.at(-2);
// }
// console.log(secondLargest([10, 40, 30, 20, 50]));
// console.log(secondLargest([54, 23, 11, 17, 10]));
//----------------------------------------------------------------------
// Create a function that takes two arguments: the original price and the discount percentage as integers and returns the final price after the discount.
// function dis(price, discount) {
// 	return price - (price *(discount/100));
// }
// console.log(dis(1500, 50));
// console.log(dis(89, 20));
// console.log(dis(100, 75));
//----------------------------------------------------------------------
// Create a function that takes two numbers and a mathematical operator + - / * and will perform a calculation with the given numbers.
// function calculator(num1, operator, num2) {
// 	if(operator ==='+'){
//     console.log('+');
//     return num1 + num2;
//   }else if(operator ==='*'){
//     console.log('*');
//     return num1 * num2;
//   }else if(operator ==='-'){
//     console.log('-');
//     return num1 - num2;
//   }else if(operator ==='/'){
//     console.log('/');
//     return num1 / num2;
//   }
// }
// console.log(calculator(2, "+", 2));
// console.log(calculator(2, "*", 2));
// console.log(calculator(4, "/", 2));
// console.log(calculator(4, "-", 2));
// console.log(calculator(15, "-", 25));
//----------------------------------------------------------------------
// Mary wants to run a 25-mile marathon. When she attempts to sign up for the marathon, she notices the sign-up sheet doesn't directly state the marathon's length. Instead, the marathon's length is listed in small, different portions. Help Mary find out how long the marathon actually is.
// function marathonDistance(d) {
//   let sum;
// 	for(let i=0;i<d.length;i++){
//     sum = d.reduce((accumulator,currentValue)=>accumulator + currentValue)
//   }
//    if(sum === 25){
//     return true;
//    }else{
//     return false;
//    }
// }
// console.log(marathonDistance([1, 2, 3, 4]));
// console.log(marathonDistance([1, 9, 5, 8, 2]));
// console.log(marathonDistance([-6, 15, 4]));
//----------------------------------------------------------------------
// Create a function that takes the height and radius of a cone as arguments and returns the volume of the cone rounded to the nearest hundredth.
// function coneVolume(h, r) {
//   return (1 / 3) * (r ** r) * (h * 3.14);
// }
// console.log(coneVolume(3, 2));
//----------------------------------------------------------------------
// Create a function that takes a country's name and its area as arguments and returns the area of the country's proportion of the total world's landmass
// function areaOfCountry(name, area) {
//   let division = 510100000 / area;
//   let per = division / 100;
// 	return `${name} is ${per} of the total world's landmass`;
// }
// console.log(areaOfCountry("USA", 9372610));