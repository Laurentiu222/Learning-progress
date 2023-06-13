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
//----------------------------------------------------------------------
// Create a function that takes an array of numbers arr, a string str and return an array of numbers as per the following rules:
// "Asc" returns a sorted array in ascending order.
// "Des" returns a sorted array in descending order.
// "None" returns an array without any modification.
// function ascDesNone(arr, str) {
//   let reversArr=[];
// 	if(str === "Asc"){
//     return arr.sort();
//   }else if(str === "Des"){
//     for(let i=arr.length-1;i>=0;i--){
//       reversArr.push(arr[i]);
//     }
//     return reversArr;
//   }else{
//     return arr;
//   }
// }
// console.log(ascDesNone([4, 3, 2, 1], "Asc" ));
// console.log(ascDesNone([7, 8, 11, 66], "Des"));
// console.log(ascDesNone([1, 0, 1, 0], "Asc"));
// console.log(ascDesNone([1, 0, 1, 0], "None"));
//----------------------------------------------------------------------
// Create a function that takes a number (step) as an argument and returns the amount of boxes in that step of the sequence.
// Step 0: Start with 0
// Step 1: Add 3
// Step 2: Subtract 1
// Repeat Step 1 & 2
// function boxSeq(step) {
//   let num = 0;
//   for(let i=0;i<=step;i++){
//   if(step === 0){
//     num =  0;
//   }else if(step %2 !==0 ){
//     num = i+3-1;
//   }else if(step % 2 ===0){
//     num = i -1;
//   }
//  }
//  return num;
// }
// console.log(boxSeq(0));
// console.log(boxSeq(1));
// console.log(boxSeq(5));
// console.log(boxSeq(99));
//----------------------------------------------------------------------
// Create a function which concatenates the number 7 to the end of every chord in an array.
// function jazzify(arr) {
//   let newArr=[];
// 	for(let i=0;i<arr.length;i++){
//     newArr.push(arr[i] + "7");
//   }
//   return newArr;
// }
// console.log(jazzify(["G", "F", "C"]));
// console.log(jazzify(["Dm", "G", "E", "A"]));
// console.log(jazzify(["F7", "E7", "A7", "Ab7", "Gm7", "C7"]));
//----------------------------------------------------------------------
// Given an array of boxes, create a function that returns the total volume of all those boxes combined together. A box is represented by an array with three elements: length, width and height.
// function totalVolume(...boxes) {
//   let sum=0;
// 	for (let i=0; i<boxes.length; i++) {
// 		sum+=boxes[i][0] * boxes[i][1] * boxes[i][2];
// 	}
// 	return sum;
// }
// console.log(totalVolume([4, 2, 4], [3, 3, 3], [1, 1, 2], [2, 1, 1]));
//----------------------------------------------------------------------
// Return the sum of all items in an array, where each item is multiplied by its index (zero-based). For empty arrays, return 0.
// function indexMultiplier(arr) {
//   let sum=0;
//   	for (let i=0; i<arr.length; i++) {
//   		sum+=arr[i]*i;
//   	}
//   	return sum;
// }
// console.log(indexMultiplier([1, 2, 3, 4, 5]));
//----------------------------------------------------------------------
// Given an integer array, transform that array into a mirror.
// function mirror(arr) {
//   for(let i=arr.length-2;i>=0;i--){
//     arr.push(arr[i])
//   }
// return arr
// }
// console.log(mirror([0, 2, 4, 6]));
//----------------------------------------------------------------------
// Mubashir was reading about currying functions. He needs your help to multiply an array of numbers using currying functions.Create a function which takes an array arr of integers as an argument. This function must return another function, which takes a single integer as an argument and returns a new array.The returned array should consist of each of the elements from the first array multiplied by the integer.
// function  multiply(arr){
//    return function(multy){
//     for(let i=0;i<arr.length;i++){
//       arr[i] *= multy;
//     }
//     return arr;
//   }
// }
// console.log(multiply([1, 2, 3])(2));
//----------------------------------------------------------------------
// Count the amount of ones in the binary representation of an integer. For example, since 12 is 1100 in binary, the return value should be 2.
// function countOnes(i) {
//   let res = i.toString(2);
//   let count =0;
// 	for(let i=0;i<res.length;i++){
//     if(res.charAt(i) === "1"){
//       count++;
//     }
//   }
//   return count;
// }
// console.log(countOnes(0));
// console.log(countOnes(999));
// console.log(countOnes(12));
//----------------------------------------------------------------------
// Write a function that takes coordinates of two points on a two-dimensional plane and returns the length of the line segment connecting those two points.
// function lineLength([x1, y1], [x2, y2]) {
// 	return Math.sqrt((x2-x1) **2 +(y2-y1)**2)
// }
// console.log(lineLength([15, 7], [22, 11]));
//----------------------------------------------------------------------
// Create a function that takes an integer n and reverses it.
// function rev(n) {
// 	let res = n.toString(10);
//   let final =" ";
//   for(let i=res.length-1;i>=0;i--){
//     final += res[i];
//   }
//   return parseInt(final, 10);
// }
// console.log(rev(5121));
//----------------------------------------------------------------------
// Create the function that takes an array with objects and returns the sum of people's budgets.
// function getBudgets(arr) {
//   const totalBudget = arr.reduce((acc, obj) => {
//     return acc + obj.budget;
//   }, 0);
//   return totalBudget;
// }

// console.log(getBudgets([
//   { name: "John", age: 21, budget: 23000 },
//   { name: "Steve",  age: 32, budget: 40000 },
//   { name: "Martin",  age: 16, budget: 2700 }]));
//----------------------------------------------------------------------
// Create a function that takes an array of items and checks if the last item matches the rest of the array concatenated together.
// function matchLastItem(arr) {
//   let con ="";
// 	for(let i=0;i<arr.length-1;i++){
//     con+=(arr[i]);
//   }
//   if(con === arr[arr.length - 1]){
//     return true;
//   }else{
//     return false;
//   }
// }
// console.log(matchLastItem(["rsq", "6hi", "g", "rsq6hig"]));
// console.log(matchLastItem([1, 1, 1, "11"]));
// console.log(matchLastItem([8, "thunder", true,"s", "8thundertrues"]) );
//----------------------------------------------------------------------
// Create a function that returns true if all parameters are truthy, and false otherwise.
// function allTruthy(...args) {
// 	for(let i=0;i<args.length;i++){
//     if(args[i] === true){
//        true;
//     }
//     else{
//       return false;
//     }
//   }
//   return true;
// }
// console.log(allTruthy(true, true, true));
// console.log(allTruthy(true, false, true));
// console.log(allTruthy(5, 4, 3, 2, 1, 0));
//----------------------------------------------------------------------
// Write a DECIMATOR function which takes a string and decimates it (i.e. it removes the last 1/10 of the characters).
// function DECIMATOR(str) {
// 	let length= Math.floor(str.length / 10);
//   return str.slice(0, -length);
// }
// console.log(DECIMATOR("1234567890"));
// console.log(DECIMATOR("1234567890AB"));
// console.log(DECIMATOR("123"));
//----------------------------------------------------------------------
//Write a function calculateAverage that takes an array of numbers as an argument and returns the average of those numbers.
//  function calculateAverage(arr){
//   let average = 0;
//   for(let i=0;i<arr.length;i++){
//     average +=arr[i];
//   }
//   return average / arr.length;
//  }
//  const numbers1 = [1, 2, 3, 4, 5];
//  const average1 = calculateAverage(numbers1);
//  console.log(average1); // Expected output: 3

//  // Test Case 2
//  const numbers2 = [10, 20, 30, 40, 50];
//  const average2 = calculateAverage(numbers2);
//  console.log(average2); // Expected output: 30

//  // Test Case 3
//  const numbers3 = [-5, 0, 5, 10];
//  const average3 = calculateAverage(numbers3);
//  console.log(average3); // Expected output: 2.5

//  // Test Case 4
//  const numbers4 = [];
//  const average4 = calculateAverage(numbers4);
//  console.log(average4); // Expected output: 0

//  // Test Case 5
//  const numbers5 = [100];
//  const average5 = calculateAverage(numbers5);
//  console.log(average5); // Expected output: 100
//----------------------------------------------------------------------
//Write a function reverseString that takes a string as an argument and returns the reverse of that string.
//  function reverseString(str){
//   let reverseStr = "";
//   for(let i = str.length -1 ; i>=0;i--){
//    reverseStr += str[i];
//   }
//   return reverseStr;
//  }
//  // Test Case 1
// const str1 = "Hello";
// const reversed1 = reverseString(str1);
// console.log(reversed1); // Expected output: "olleH"

// // Test Case 2
// const str2 = "JavaScript";
// const reversed2 = reverseString(str2);
// console.log(reversed2); // Expected output: "tpircSavaJ"

// // Test Case 3
// const str3 = "racecar";
// const reversed3 = reverseString(str3);
// console.log(reversed3); // Expected output: "racecar"

// // Test Case 4
// const str4 = "";
// const reversed4 = reverseString(str4);
// console.log(reversed4); // Expected output: ""

// // Test Case 5
// const str5 = "12345";
// const reversed5 = reverseString(str5);
// console.log(reversed5); // Expected output: "54321"
//----------------------------------------------------------------------
//Write a function countVowels that takes a string as an argument and returns the number of vowels (a, e, i, o, u) in that string.
// function countVowels(str){
//   let vowels="";
//   for(let i=0;i<str.length;i++){
//     if(str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u'){
//       vowels += str[i];
//     }
//   }
//   return vowels.length;
// }
// // Test Case 1
// const str1 = "Hello World";
// const vowelCount1 = countVowels(str1);
// console.log(vowelCount1); // Expected output: 3 (e, o, o)

// // Test Case 2
// const str2 = "JavaScript";
// const vowelCount2 = countVowels(str2);
// console.log(vowelCount2); // Expected output: 3 (a, i, a)

// // Test Case 3
// const str3 = "aeiou";
// const vowelCount3 = countVowels(str3);
// console.log(vowelCount3); // Expected output: 5 (a, e, i, o, u)

// // Test Case 4
// const str4 = "";
// const vowelCount4 = countVowels(str4);
// console.log(vowelCount4); // Expected output: 0

// // Test Case 5
// const str5 = "qwrtypsdfghjklzxcvbnm";
// const vowelCount5 = countVowels(str5);
// console.log(vowelCount5); // Expected output: 0
//----------------------------------------------------------------------
// Write a function findMax that takes an array of numbers as an argument and returns the maximum number in that array.
// function findMax(arr){
//   let max=-Infinity;
//   for(let i=0; i< arr.length;i++){
//     if(max<arr[i]){
//        max = arr[i];
//     }
//   }
//   return max;
// }
// // Test Case 1
// const numbers1 = [1, 2, 3, 4, 5];
// const max1 = findMax(numbers1);
// console.log(max1); // Expected output: 5

// // Test Case 2
// const numbers2 = [10, 20, 30, 40, 50];
// const max2 = findMax(numbers2);
// console.log(max2); // Expected output: 50

// // Test Case 3
// const numbers3 = [-5, 0, 5, 10];
// const max3 = findMax(numbers3);
// console.log(max3); // Expected output: 10

// // Test Case 4
// const numbers4 = [];
// const max4 = findMax(numbers4);
// console.log(max4); // Expected output: undefined

// // Test Case 5
// const numbers5 = [-10, -5, -15, -20];
// const max5 = findMax(numbers5);
// console.log(max5); // Expected output: -5
//----------------------------------------------------------------------
// Write a function isPalindrome that takes a string as an argument and returns true if the string is a palindrome (reads the same forwards and backwards), and false otherwise.
// function isPalindrome(str){
//   let palindrome="";
//   palindrome  = str.split("").reverse().join("");
//     if(palindrome == str){
//     return true;
//   }else{
//     return false;
//   }
// }
// // Test Case 1
// const str1 = "level";
// console.log(isPalindrome(str1)); // Expected output: true

// // Test Case 2
// const str2 = "racecar";
// console.log(isPalindrome(str2)); // Expected output: true

// // Test Case 3
// const str3 = "hello";
// console.log(isPalindrome(str3)); // Expected output: false

// // Test Case 4
// const str4 = "noon";
// console.log(isPalindrome(str4)); // Expected output: true

// // Test Case 5
// const str5 = "12321";
// console.log(isPalindrome(str5)); // Expected output: true
//----------------------------------------------------------------------
//Write a function removeDuplicates that takes an array of numbers as an argument and returns a new array with duplicates removed.
// function removeDuplicates(arr){
//   let newArr = [];
//   for(let i =0;i<arr.length;i++){
//     let duplicate = false;
//     for(let j=0;j<newArr.length;j++){
//       if(arr[i] === newArr[j]){
//         duplicate = true;
//         break;
//       }
//     }
//     if(!duplicate) {
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// }
// // Test Case 1
// const numbers1 = [1, 2, 3, 4, 5];
// const unique1 = removeDuplicates(numbers1);
// console.log(unique1); // Expected output: [1, 2, 3, 4, 5]

// // Test Case 2
// const numbers2 = [10, 20, 30, 20, 10];
// const unique2 = removeDuplicates(numbers2);
// console.log(unique2); // Expected output: [10, 20, 30]

// // Test Case 3
// const numbers3 = [-5, 0, -5, 10, 0];
// const unique3 = removeDuplicates(numbers3);
// console.log(unique3); // Expected output: [-5, 0, 10]

// // Test Case 4
// const numbers4 = [];
// const unique4 = removeDuplicates(numbers4);
// console.log(unique4); // Expected output: []

// // Test Case 5
// const numbers5 = [1, 1, 1, 1, 1];
// const unique5 = removeDuplicates(numbers5);
// console.log(unique5); // Expected output: [1]
//----------------------------------------------------------------------
//Write a function capitalizeWords that takes a sentence as an argument and returns a new sentence where the first letter of each word is capitalized.
// function capitalizeWords(str){
//   let arrSentance = str.split(" ");
//   const capitalizedWords = [];

//   for(let i=0; i<arrSentance.length; i++){
//     const word = arrSentance[i];
//     const capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
//     capitalizedWords.push(capitalizedWord);
//   }
//   const newSentence = capitalizedWords.join(" ");
//   return newSentence;
// }
// // Test Case 1
// const sentence1 = "hello world";
// const capitalized1 = capitalizeWords(sentence1);
// console.log(capitalized1); // Expected output: "Hello World"

// // Test Case 2
// const sentence2 = "this is a test";
// const capitalized2 = capitalizeWords(sentence2);
// console.log(capitalized2); // Expected output: "This Is A Test"

// // Test Case 3
// const sentence3 = "javascript is awesome";
// const capitalized3 = capitalizeWords(sentence3);
// console.log(capitalized3); // Expected output: "Javascript Is Awesome"

// // Test Case 4
// const sentence4 = "i love programming";
// const capitalized4 = capitalizeWords(sentence4);
// console.log(capitalized4); // Expected output: "I Love Programming"

// // Test Case 5
// const sentence5 = "aBcDeFg";
// const capitalized5 = capitalizeWords(sentence5);
// console.log(capitalized5); // Expected output: "Abcdefg"
//----------------------------------------------------------------------
//Write a function sumDigits that takes a positive integer as an argument and returns the sum of its digits.
// function sumDigits(num){
//   const digits = num.toString().split("");
//   let sum = 0;
//   for(let i=0;i<digits.length;i++){
//     sum+= parseInt(digits[i]);
//   }
//   return sum;
// }
// // Test Case 1
// console.log(sumDigits(123)); // Expected output: 6
// // Explanation: The digits of 123 are 1, 2, and 3. The sum is 1 + 2 + 3 = 6.

// // Test Case 2
// console.log(sumDigits(456)); // Expected output: 15
// // Explanation: The digits of 456 are 4, 5, and 6. The sum is 4 + 5 + 6 = 15.

// // Test Case 3
// console.log(sumDigits(789)); // Expected output: 24
// // Explanation: The digits of 789 are 7, 8, and 9. The sum is 7 + 8 + 9 = 24.

// // Test Case 4
// console.log(sumDigits(111)); // Expected output: 3
// // Explanation: The digits of 111 are 1, 1, and 1. The sum is 1 + 1 + 1 = 3.

// // Test Case 5
// console.log(sumDigits(0)); // Expected output: 0
// // Explanation: The only digit in 0 is 0. The sum is 0.
//----------------------------------------------------------------------
//Write a function findLongestWord that takes an array of words as an argument and returns the longest word in that array.
// function findLongestWord(arr){
//   let current ="";
//   for(let i=0;i<arr.length;i++){
//     if(current.length < arr[i].length){
//       current = arr[i];
//     }
//   }
//   return current;
// }
// // Test Case 1
// console.log(findLongestWord(["apple", "banana", "cherry"])); // Expected output: "banana"

// // Test Case 2
// console.log(findLongestWord(["cat", "dog", "elephant", "giraffe"])); // Expected output: "elephant"

// // Test Case 3
// console.log(findLongestWord(["coding", "is", "fun"])); // Expected output: "coding"

// // Test Case 4
// console.log(findLongestWord(["open", "your", "eyes"])); // Expected output: "eyes"

// // Test Case 5
// console.log(findLongestWord([])); // Expected output: ""

// // Test Case 6
// console.log(findLongestWord(["one"])); // Expected output: "one"
//----------------------------------------------------------------------
//Write a function isPrime that takes a number as an argument and returns true if it is a prime number, and false otherwise.
// function isPrime(num){
//   let prime = 0;
//   if(num < 2){
//     return false;
//   }
//   for(let i=2;i<=Math.sqrt(num);i++){
//     if(num % i == 0){
//       return false;
//     }
//   }
//   return true;
// }
// console.log(isPrime(2)); // Expected output: true
// console.log(isPrime(7)); // Expected output: true
// console.log(isPrime(12)); // Expected output: false
// console.log(isPrime(23)); // Expected output: true
// console.log(isPrime(50)); // Expected output: false
//----------------------------------------------------------------------
//Write a function findMissingNumber that takes an array of consecutive numbers (with one missing number) as an argument and returns the missing number.
// function findMissingNumber(arr){
//   let n = arr.length +1; // arr length -1
//   let sum = (n* (n+1)) /2;
//   let arrSum =0;
//   let miss= 0;
//   for(let i=0;i<arr.length;i++){
//     arrSum += arr[i];
//   }
//   miss= sum - arrSum;
//   return miss;
// }
// // Test Case 1
// const numbers1 = [1, 2, 3, 4, 6, 7, 8, 9];
// const missing1 = findMissingNumber(numbers1);
// console.log(missing1); // Expected output: 5

// // Test Case 2
// const numbers2 = [10, 11, 13, 14, 15];
// const missing2 = findMissingNumber(numbers2);
// console.log(missing2); // Expected output: 12

// // Test Case 3
// const numbers3 = [2, 3, 4, 5, 6, 7, 8];
// const missing3 = findMissingNumber(numbers3);
// console.log(missing3); // Expected output: 1

// // Test Case 4
// const numbers4 = [100, 101, 102, 103, 105];
// const missing4 = findMissingNumber(numbers4);
// console.log(missing4); // Expected output: 104

// // Test Case 5
// const numbers5 = [50, 52, 54, 56, 58];
// const missing5 = findMissingNumber(numbers5);
// console.log(missing5); // Expected output: 53
//----------------------------------------------------------------------
//Write a function flattenArray that takes a nested array as an argument and returns a new array with all the elements flattened (no nested arrays).
// function flattenArray(arr){
//   let newArr = [];
//   for(let i=0;i<arr.length;i++){
//     for(let j=0;j<arr[i].length;j++){
//       newArr.push(arr[i][j]);
//     }
//   }
//   return newArr;
// }
// // Test Case 1
// const nestedArray1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// const flattenedArray1 = flattenArray(nestedArray1);
// console.log(flattenedArray1); // Expected output: [1, 2, 3, 4, 5, 6, 7, 8, 9]

// // Test Case 2
// const nestedArray2 = [[10, 20], [30, 40], [50, 60]];
// const flattenedArray2 = flattenArray(nestedArray2);
// console.log(flattenedArray2); // Expected output: [10, 20, 30, 40, 50, 60]

// // Test Case 3
// const nestedArray3 = [[-1, -2], [-3, -4], [-5, -6]];
// const flattenedArray3 = flattenArray(nestedArray3);
// console.log(flattenedArray3); // Expected output: [-1, -2, -3, -4, -5, -6]

// // Test Case 4
// const nestedArray4 = [["a", "b"], ["c", "d"], ["e", "f"]];
// const flattenedArray4 = flattenArray(nestedArray4);
// console.log(flattenedArray4); // Expected output: ["a", "b", "c", "d", "e", "f"]

// // Test Case 5
// const nestedArray5 = [[true, false], [false, true]];
// const flattenedArray5 = flattenArray(nestedArray5);
// console.log(flattenedArray5); // Expected output: [true, false, false, true]
//----------------------------------------------------------------------
//Write a function findCommonElements that takes two arrays as arguments and returns a new array containing the common elements between the two arrays.
// function findCommonElements(arr1, arr2){
//   let common =0;
//   let commonElemntsArr =[];
//   for(let i=0;i<arr1.length;i++){
//     common = arr1[i];
//     for(let j=0;j<arr2.length;j++){
//       if(common === arr2[j]){
//         commonElemntsArr.push(arr1[i]);
//       }
//     }
//   }
//   return commonElemntsArr;
// }
// // Test Case 1
// const array1 = [1, 2, 3, 4, 5];
// const array2 = [4, 5, 6, 7, 8];
// const commonElements1 = findCommonElements(array1, array2);
// console.log(commonElements1); // Expected output: [4, 5]

// // Test Case 2
// const array3 = ["apple", "banana", "orange"];
// const array4 = ["banana", "grape", "kiwi"];
// const commonElements2 = findCommonElements(array3, array4);
// console.log(commonElements2); // Expected output: ["banana"]

// // Test Case 4
// const array7 = [];
// const array8 = [1, 2, 3];
// const commonElements4 = findCommonElements(array7, array8);
// console.log(commonElements4); // Expected output: []

// // Test Case 5
// const array9 = ["a", "b", "c"];
// const array10 = ["x", "y", "z"];
// const commonElements5 = findCommonElements(array9, array10);
// console.log(commonElements5); // Expected output: []
//----------------------------------------------------------------------
//Write a function sortByLength that takes an array of strings as an argument and returns a new array with the strings sorted in ascending order of their lengths.
// function sortByLength(arr){
//   arr.sort((a, b) => a.length - b.length);
//   return arr;
// }
// // Test Case 1
// const strings1 = ["apple", "banana", "orange", "kiwi"];
// const sorted1 = sortByLength(strings1);
// console.log(sorted1);
// // Expected output: ["kiwi", "apple", "banana", "orange"]

// // Test Case 2
// const strings2 = ["programming", "is", "fun"];
// const sorted2 = sortByLength(strings2);
// console.log(sorted2);
// // Expected output: ["is", "fun", "programming"]

// // Test Case 3
// const strings3 = ["cat", "elephant", "giraffe", "dog"];
// const sorted3 = sortByLength(strings3);
// console.log(sorted3);
// // Expected output: ["cat", "dog", "elephant", "giraffe"]

// // Test Case 4
// const strings4 = ["a", "bb", "ccc", "dddd"];
// const sorted4 = sortByLength(strings4);
// console.log(sorted4);
// // Expected output: ["a", "bb", "ccc", "dddd"]

// // Test Case 5
// const strings5 = [];
// const sorted5 = sortByLength(strings5);
// console.log(sorted5);
// // Expected output: []
//----------------------------------------------------------------------
//Write a function reverseWords that takes a sentence as an argument and returns a new sentence with the words reversed.
// function reverseWords(str){
//   let words = str.split(" ");
//   let reversedWords  = words.reverse();
//   const newSentence = reversedWords.join(" ");
//   return newSentence;
// }
// const sentence1 = "Hello world!";
// console.log(reverseWords(sentence1)); // Output: "world! Hello"

// const sentence2 = "I love JavaScript";
// console.log(reverseWords(sentence2)); // Output: "JavaScript love I"

// const sentence3 = "VsCode is amazing";
// console.log(reverseWords(sentence3)); // Output: "amazing is OpenAI"
//----------------------------------------------------------------------
//Write a function truncateString that takes a string and a number as arguments and returns a truncated version of the string, with the length limited to the specified number of characters. If the string exceeds the specified length, it should be truncated and an ellipsis ("...") should be appended to the end.
// function truncateString(str, num){
//   let truncate = str.length;
//   if(truncate <= num){
//     return str;
//   }else if(truncate > num){
//     truncate = str.substring(0,num) + "...";
//   }
//   return truncate;
// }
// // Test Case 1
// console.log(truncateString("Hello, world!", 5));
// // Expected output: "Hello..."

// // Test Case 2
// console.log(truncateString("Lorem ipsum dolor sit amet", 10));
// // Expected output: "Lorem ipsu..."

// // Test Case 3
// console.log(truncateString("Short string", 20));
// // Expected output: "Short string"

// // Test Case 4
// console.log(truncateString("Another string", 12));
// // Expected output: "Another str..."

// // Test Case 5
// console.log(truncateString("Long string that exceeds the limit", 15));
// // Expected output: "Long string..."

// // Test Case 6
// console.log(truncateString("", 5));
// // Expected output: ""

// // Test Case 7
// console.log(truncateString("Just a short string", 30));
// // Expected output: "Just a short string"

// // Test Case 8
// console.log(truncateString("Single character", 1));
// // Expected output: "S..."

// // Test Case 9
// console.log(truncateString("Apples and oranges", 0));
// // Expected output: "..."

// // Test Case 10
// console.log(truncateString("1234567890", 10));
// // Expected output: "1234567890"
//----------------------------------------------------------------------
//Given an integer array nums and an integer k, return the k most frequent element.
// function topKFrequent(nums, k){
//   let buff = 0;
//   let freqArr = [];
//   for(let i=0;i<nums.length;i++){
//     if(nums[i] == k){
//       buff++;
//     }
//   }
//   return  buff;
// }
// // Test Case 1
// const nums1 = [1, 1, 1, 2, 2, 3];
// const k1 = 2;
// console.log(topKFrequent(nums1, k1));
// // Expected output: [1, 2]

// // Test Case 2
// const nums2 = [1, 2, 2, 3, 3, 3,3, 4, 4, 4, 4];
// const k2 = 3;
// console.log(topKFrequent(nums2, k2));
// // Expected output: [4, 3, 2]

// // Test Case 3
// const nums3 = [5, 5, 5, 5, 5, 5, 6, 6, 6, 7, 7, 8];
// const k3 = 1;
// console.log(topKFrequent(nums3, k3));
// // Expected output: [5]

// // Test Case 4
// const nums4 = [1, 2, 3, 4, 5];
// const k4 = 5;
// console.log(topKFrequent(nums4, k4));
// // Expected output: [1, 2, 3, 4, 5]

// // Test Case 5
// const nums5 = [1, 2, 2, 3, 3, 3];
// const k5 = 0;
// console.log(topKFrequent(nums5, k5));
// // Expected output: []

// // Test Case 6
// const nums6 = [1];
// const k6 = 1;
// console.log(topKFrequent(nums6, k6));
// // Expected output: [1]
//----------------------------------------------------------------------
//Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.
// function topKFrequent(nums, k) {
//   const frequencyMap = new Map();

//   // Step 1: Create a frequency map
//   for (let num of nums) {
//     frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
//   }

//   // Step 2: Sort the unique numbers based on their frequencies
//   const uniqueNums = [...frequencyMap.keys()];
//   uniqueNums.sort((a, b) => frequencyMap.get(b) - frequencyMap.get(a));

//   // Step 3: Return the top k frequent elements
//   return uniqueNums.slice(0, k);
// }
// // Test Case 1
// const nums1 = [1, 1, 1, 2, 2, 3];
// const k1 = 2;
// console.log(topKFrequent(nums1, k1));
// // Expected output: [1, 2]

// // Test Case 2
// const nums2 = [1, 2, 2, 3, 3, 3,3, 4, 4, 4, 4];
// const k2 = 3;
// console.log(topKFrequent(nums2, k2));
// // Expected output: [4, 3, 2]

// // Test Case 3
// const nums3 = [5, 5, 5, 5, 5, 5, 6, 6, 6, 7, 7, 8];
// const k3 = 1;
// console.log(topKFrequent(nums3, k3));
// // Expected output: [5]

// // Test Case 4
// const nums4 = [1, 2, 3, 4, 5];
// const k4 = 5;
// console.log(topKFrequent(nums4, k4));
// // Expected output: [1, 2, 3, 4, 5]

// // Test Case 5
// const nums5 = [1, 2, 2, 3, 3, 3];
// const k5 = 0;
// console.log(topKFrequent(nums5, k5));
// // Expected output: []

// // Test Case 6
// const nums6 = [1];
// const k6 = 1;
// console.log(topKFrequent(nums6, k6));
// // Expected output: [1]
//----------------------------------------------------------------------
//Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
// function productExceptSelf(nums){
//   let product = 1;
//   let arr = [];
//   for(let i=0;i<nums.length;i++){
//     arr[i] = product;
//     product = product * nums[i];
//   }
//    product = 1;
//    for(let i = nums.length-1; i>=0;i--){
//     arr[i] = product;
//     product = product * nums[i];
//    }
//    return arr;
// }
// // Test Case 1
// const nums1 = [1, 2, 3, 4, 5];
// const answer1 = productExceptSelf(nums1);
// console.log(answer1);
// // Expected output: [120, 60, 40, 30, 24]

// // Test Case 2
// const nums2 = [2, 4, 6, 8];
// const answer2 = productExceptSelf(nums2);
// console.log(answer2);
// // Expected output: [192, 96, 64, 48]

// // Test Case 3
// const nums3 = [0, 1, 2, 3, 4];
// const answer3 = productExceptSelf(nums3);
// console.log(answer3);
// // Expected output: [24, 0, 0, 0, 0]

// // Test Case 4
// const nums4 = [-1, -2, -3, -4, -5];
// const answer4 = productExceptSelf(nums4);
// console.log(answer4);
// // Expected output: [120, 60, 40, 30, 24]

// // Test Case 5
// const nums5 = [1];
// const answer5 = productExceptSelf(nums5);
// console.log(answer5);
// // Expected output: [1]
// const nums6 = [1,2,3,4];
// const answer6 = productExceptSelf(nums1);
// console.log(answer6);
//----------------------------------------------------------------------
//Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
// function longestConsecutive(nums){
//   let elem = 0;
//   let sort = nums.sort((a,b) => a -b);
//   for(let i=1; i< sort.length;i++){
//     if(sort[i] !== sort[i-1]){
//       if (nums[i] === nums[i - 1] + 1){
//        elem = sort[i];
//       }
//     }
//   }
//   return elem;
// }
// // Test Case 1
// const nums1 = [100, 4, 200, 1, 3, 2];
// console.log(longestConsecutive(nums1));
// // Expected output: 4 (as the longest consecutive sequence is [1, 2, 3, 4])

// // Test Case 2
// const nums2 = [0, 1, 5, 10, 7];
// console.log(longestConsecutive(nums2));
// // Expected output: 1 (as there are no consecutive elements in the array)

// // Test Case 3
// const nums3 = [1, 2, 3, 4, 5];
// console.log(longestConsecutive(nums3));
// // Expected output: 5 (as the array itself is the longest consecutive sequence)

// // Test Case 4
// const nums4 = [9, 8, 7, 6, 5, 4, 3, 2, 1];
// console.log(longestConsecutive(nums4));
// // Expected output: 9 (as the longest consecutive sequence is [1, 2, 3, 4, 5, 6, 7, 8, 9])

// // Test Case 5
// const nums5 = [];
// console.log(longestConsecutive(nums5));
// // Expected output: 0 (as the array is empty)

// // Test Case 6
// const nums6 = [1];
// console.log(longestConsecutive(nums6));
// // Expected output: 1 (as there is only one element in the array)
//----------------------------------------------------------------------
//A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.
// function isPalindrome(str) {
//   if (str == "") {
//     return true;
//   }
//   const cleanedPhrase = str.toLowerCase().replace(/[^a-z0-9]/g, "");
//   for (let i = 0; i < cleanedPhrase.length; i++) {
//     for (let j = cleanedPhrase.length - 1; j >= 0; j--) {
//       if (cleanedPhrase[i] == cleanedPhrase[j]) {
//         return true;
//       } else {
//         return false;
//       }
//     }
//   }
// }
// // Test cases for isPalindrome function
// console.log(isPalindrome("A man, a plan, a canal, Panama!")); // true
// console.log(isPalindrome("No 'x' in Nixon")); // true
// console.log(isPalindrome("VsCode is awesome!")); // false
// console.log(isPalindrome("12321")); // true
// console.log(isPalindrome("Palindrome")); // false
//----------------------------------------------------------------------
//Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
// function threeSum(nums) {
//   let result = [];
//   nums.sort((a, b) => a - b);
  
//   for (let i = 0; i < nums.length - 2; i++) {
//     if (i > 0 && nums[i] === nums[i - 1]) {
//       continue; // Skip duplicate values of i
//     }
    
//     for (let j = i + 1; j < nums.length - 1; j++) {
//       for (let k = j + 1; k < nums.length; k++) {
//         if (nums[i] + nums[j] + nums[k] === 0) {
//           result.push([nums[i], nums[j], nums[k]]);
//         }
//       }
//     }
//   }
  
//   return result;
// }
// // Test cases for finding triplets that sum up to zero
// console.log(threeSum([-1, 0, 1, 2, -1, -4]));
// // Expected output: [[-1, -1, 2], [-1, 0, 1]]

// console.log(threeSum([0, 0, 0]));
// // Expected output: [[0, 0, 0]]

// console.log(threeSum([-2, 0, 1, 1, 2]));
// // Expected output: [[-2, 0, 2], [-2, 1, 1]]

// console.log(threeSum([1, 2, 3, 4, 5]));
// // Expected output: []
// console.log(threeSum([-1,0,1,2,-1,-4]));
//----------------------------------------------------------------------
//You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).Find two lines that together with the x-axis form a container, such that the container contains the most water.Return the maximum amount of water a container can store.
// function maxArea(height){
//   let left =0;
//   let right = height.length -1;
//   let maxArea =0;
//   while(left < right){
//     let area = (right -left) * Math.min(height[left], height[right]);
//     maxArea = Math.max(maxArea, area);
//     if(height[left]< height[right]){
//     left++;
//   }else{
//     right--;}
//   }
//   return maxArea;
// }
// console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
//----------------------------------------------------------------------
//You are given an array prices where prices[i] is the price of a given stock on the ith day.You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
// function maxProfit(prices){
//   let min =prices[0];
//   let max = 0;
//   for(let i=1;i<prices.length;i++){
//     min = Math.min(min, prices[i]);
//     max = Math.max(max, prices[i] - min);
//   }
//   return max;
// }
// console.log(maxProfit([7, 1, 5, 3, 6, 4]));
//----------------------------------------------------------------------
//Given a string s, find the length of the longest substring without repeating characters.
// function lengthOfLongestSubstring(s) {
//   let start = 0;
//   let maxLen = 0;
//   let charSet = new Set();

//   for (let i = 0; i < s.length; i++) {
//     // Check if the current character is already in the set
//     while (charSet.has(s[i])) {
//       // Remove the characters from the set and move the start pointer
//       charSet.delete(s[start]);
//       start++;
//     }
    
//     // Add the current character to the set
//     charSet.add(s[i]);

//     // Update the maxLen if necessary
//     maxLen = Math.max(maxLen, i - start + 1);
//   }

//   return maxLen;
// }

// console.log(lengthOfLongestSubstring("abcabcbb")); // Expected output: 3
//----------------------------------------------------------------------
//Array Intersection: Write a function that takes two arrays as input and returns an array containing the common elements found in both arrays. For example, if the input arrays are [1, 2, 3, 4, 5] and [4, 5, 6, 7], the output should be [4, 5].
// function arrayIntersection(arr1, arr2){
//   let common =[];
//   for(let i=0; i<arr1.length;i++){
//     for(let j=0;j<arr2.length;j++){
//       if(arr1[i] == arr2[j]){
//         common.push(arr1[i]);
//       }
//     }
//   }
//   return common;
// }
// console.log(arrayIntersection([1, 2, 3, 4, 5], [4, 5, 6, 7]));
// // Expected output: [4, 5]

// console.log(arrayIntersection([1, 2, 3], [4, 5, 6]));
// // Expected output: []

// console.log(arrayIntersection([1, 2, 3, 4, 5], [1, 2, 3, 4, 5]));
// // Expected output: [1, 2, 3, 4, 5]

// console.log(arrayIntersection([1, 2, 3, 4, 5], []));
// // Expected output: []

// console.log(arrayIntersection([], [4, 5, 6, 7]));
// // Expected output: []

// console.log(arrayIntersection([], []));
// // Expected output: []
//----------------------------------------------------------------------
//FizzBuzz: Write a function that prints the numbers from 1 to n. But for multiples of three, print "Fizz" instead of the number, and for multiples of five, print "Buzz". For numbers that are multiples of both three and five, print "FizzBuzz".
// function fizzBuzz(n) {
//   for (let i = 1; i <= n; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log("FizzBuzz");
//     } else if (i % 3 === 0) {
//       console.log("Fizz");
//     } else if (i % 5 === 0) {
//       console.log("Buzz");
//     } else {
//       console.log(i);
//     }
//   }
// }
// console.log(fizzBuzz(15));
//----------------------------------------------------------------------
//Sorting Algorithm: Implement a sorting algorithm such as Bubble Sort, Selection Sort, or Merge Sort. Write a function that takes an array as input and returns the sorted array
// function bubbleSort(arr) {
//   const n = arr.length;
//   for (let i = 0; i < n - 1; i++) {
//     for (let j = 0; j < n - i - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         // Swap arr[j] and arr[j + 1]
//         const temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }
//   return arr;
// }
// const arr = [64, 34, 25, 12, 22, 11, 90];
// console.log(bubbleSort(arr));
//----------------------------------------------------------------------
//You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.
// function modifyString(s,k){
//   let split = Array.from(s);
//   for(let i=0;i<split.length;i++){
//     if(split[i] !== split[i].toUpperCase() && k > 0){
//       split[i] = split[i].toUpperCase();
//       k--;
//     }
//   }
//   return split.join('');
// }
// const inputString = 'hello';
// const k = 2;
// const modifiedString = modifyString(inputString, k);
// console.log(modifiedString); // Output: "HEllo"
//----------------------------------------------------------------------
//Create a function which returns the number of true values there are in an array.
// function countTrue(arr) {
//   let valuesOfTrue =0;
//   if(arr.length== 0){
//     return 0;
//   }
// 	for(let i=0;i<arr.length;i++){
//     if(arr[i] == true){
//       valuesOfTrue++
//     }
//   }
//   return valuesOfTrue;
// }
// const emptyArray = [];
// console.log(countTrue(emptyArray)); // Output: 0

// const falseArray = [false, false, false];
// console.log(countTrue(falseArray)); // Output: 0

// const trueArray = [true, true, true];
// console.log(countTrue(trueArray)); // Output: 3

// const mixedArray = [true, false, true, true, false];
// console.log(countTrue(mixedArray)); // Output: 3

// const mixedDataArray = [true, 'hello', 42, true, false];
// console.log(countTrue(mixedDataArray)); // Output: 2
//----------------------------------------------------------------------
//Write a function redundant that takes in a string str and returns a function that returns str.
// function redundant(str) {
//   return function() {
//     return str;
//   }
// }
// const myFunction = redundant("Hello, World!");
// console.log(myFunction()); // Output: "Hello, World!"
//----------------------------------------------------------------------
//In a board game, a piece may advance 1-6 tiles forward depending on the number rolled on a six-sided die. If you advance your piece onto the same tile as another player's piece, both of you earn a bonus. Can you reach your friend's tile number in the next roll? Create a function that takes your position a and your friend's position b and returns a boolean representation of whether it's possible to earn a bonus on any die roll.
// function possibleBonus(a, b) {
// 	let random = Math.round(Math.random() * 6)+1;
//   if(Math.abs(a-b)){
//   if(random + a == b){
//     return true;
//   }else{
//     return false;
//   }
//  }else{
//   return false;
//  }
// }
// console.log(possibleBonus(5, 3));
// console.log(possibleBonus(0, 6));
// console.log(possibleBonus(1, 6));
// console.log(possibleBonus(2, 6));
// console.log(possibleBonus(3, 4));
// console.log(possibleBonus(2, 5)); 
//----------------------------------------------------------------------
//Write a function that mimics (without the use of >>) the right shift operator and returns the result from the two given integers.
// function shiftToRight(x, y) {
// 	return Math.floor(x / Math.pow(2,y));
// }
// console.log(shiftToRight(10, 2)); // Output: 2
// console.log(shiftToRight(15, 3)); // Output: 1
// console.log(shiftToRight(7, 1)); // Output: 3
// console.log(shiftToRight(100, 4)); // Output: 6
// console.log(shiftToRight(0, 5)); // Output: 0
// console.log(shiftToRight(-8, 2)); // Output: -2
//----------------------------------------------------------------------
//Write a function that takes a number and returns the perimeter of either a circle or a square. The input will be in the form (letter l, number num) where the letter will be either "s" for square, or "c" for circle, and the number will be the side of the square or the radius of the circle.
// function perimeter(l, num){
//   return (4*(l=='s')+6.28*(l=='c'))*num
// }
// console.log(perimeter('s', 5)); // Output: 20
// console.log(perimeter('c' ,3)); // Output: 18.84
// console.log(perimeter('s' ,8.5)); // Output: 34
// console.log(perimeter('c' ,2.2)); // Output: 13.816
//----------------------------------------------------------------------
//Create a function that will return an integer number corresponding to the amount of digits in the given integer num
// function num_of_digits(num) {
// 	let  str =  Math.abs(num).toString();
//   return str.length;
// }
// console.log(num_of_digits(123)); // Output: 3
// console.log(num_of_digits(0)); // Output: 1
// console.log(num_of_digits(-456)); // Output: 3
// console.log(num_of_digits(987654321)); // Output: 9
// console.log(num_of_digits(-1000)); // Output: 4
//----------------------------------------------------------------------
//Create a function that takes numbers b and m as arguments and returns the derivative of the function f(x)=x^b with respect to x evaluated at x=m, where b and m are constants.
// function derivative(b, m) {
//   const derivativeValue = b * Math.pow(m, b - 1);
//   return derivativeValue;
// }
// console.log(derivative(2, 3)); // Output: 6
// console.log(derivative(3, 2)); // Output: 12
// console.log(derivative(4, 5)); // Output: 500
//----------------------------------------------------------------------
//Create a function that takes an array of numbers and return "Boom!" if the digit 7 appears in the array. Otherwise, return "there is no 7 in the array".
// function sevenBoom(arr) {
// 	for(let i=0;i,arr.length;i++){
//     if(arr[i].toString().includes('7')){
//       return "Boom";
//     }else{
//       return "there is no 7";
//     }
//   }
// }
// console.log(sevenBoom([1, 2, 3])); // Output: there is no 7 in the array
// console.log(sevenBoom([7, 8, 9])); // Output: Boom!
// console.log(sevenBoom([10, 20, 30])); // Output: there is no 7 in the array
// console.log(sevenBoom([17, 27, 37])); // Output: Boom!
// console.log(sevenBoom([])); // Output: there is no 7 in the array
//----------------------------------------------------------------------
//Given a number, n, return a function which adds n to the number passed to it.
// function add(n) {
// 	return function(number){
//     return n + number;
//   }
// }
// const add5 = add(5);
// console.log(add5(10)); // Output: 15 (10 + 5)
// console.log(add5(7)); // Output: 12 (7 + 5)
