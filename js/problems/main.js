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
function generation(x, y) {
	if(x===0){
    return 'me';
  }else if(x===1 && y==='f'){
    return 'daughter';
  }else if(x===1 && y==='m'){
    return 'son';
  }else if(x===2 && y==='m'){
    return 'grandson';
  }else if(x===2 && y==='f'){
    return 'granddaughter';
  }else if(x===3 && y==='f'){
    return 'great granddaughter';
  }else if(x===3 && y==='m'){
    return 'great grandson';
  }else if(x===-1 && y==='m'){
    return 'father';
  }else if(x===-1 && y==='f'){
    return 'mother';
  }else if(x===-2 && y==='f'){
    return 'grandmother';
  }else if(x===-2 && y==='m'){
    return 'grandfather';
  }
}
console.log(generation(2, "f"));
console.log(generation(-2, "m"));
console.log(generation(1, "f"));
