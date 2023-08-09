//function findTheMaxNumber(a,b,c,d){
//   let max = 0;
//   if (a>b && a>c &&  a>d){
//     max = a;
//   }
//   if (b>a && b>c && b>d){
//     max =  b;
//   }
//   if (c>a && c>b && c>d){
//     max =  c;
//   }
//   if (d>a && d>b && d>c){
//     max =  d;
//   }
//     return max;

// return Math.max (a,b,c,d);
//}

//console.log(findTheMaxNumber(4, 5, 10, 9));

//Problem No.2 Reverse

//function findReverseNumber (m,f,v,s) {
//return [s, v, f, m];
//}
//let m = [0];
//let f = [1];
//let v = [2];
//let s = [3];

//[0] = s;
//[1] = v;
//[2] = f;
//[3] = m;
//console.log(findReverseNumber(3, 2, 1, 0));

//function reverseFourNumbers(num1, num2, num3, num4) {
//return [num4, num3, num2, num1];
//}

//const num1 = 10;
//const num2 = 20;
//const num3 = 30;
//const num4 = 40;

//const reversedNumbers = reverseFourNumbers(num1, num2, num3, num4);
//console.log(reversedNumbers);

//Problem No.3 Find out SecondLargestNumber

//const array = [1,2,3,4];

//function findSecondLargest (){

// return secondLargest;
//}

//let first = 1;
//let second = 2;
//let third = 3;
//let fourth = 4;

//if (first > second && first > third && first > fourth) {
//if (second > third && second > fourth && second > first) {
//  secondLargest = second;
//} else if (third > second && third > fourth) {
// secondLargest = third;
//} else {
// secondLargest = fourth;
//}
//}

//if (second > first && second > third && second > fourth) {
// if (first > third && first > fourth) {
// secondLargest = first;
//} else if (third > first && third > fourth) {
// secondLargest = third;
//} else {
//  secondLargest = fourth;
//}
//}

//if (third > first && third > second && third > fourth) {
// if (first > second && first > fourth) {
// secondLargest = first;
//} else if (second > first && second > fourth) {
// } else {
// secondLargest = fourth;
//}
//}

//if (fourth > first && fourth > second && fourth > third) {
// if (first > second && first > third) {
// secondLargest = first;
//} else if (second > first && second > third) {
//  secondLargest = second;
//} else {
//  secondLargest = third;
//}
//}

//console.log(findSecondLargest());

//Problem No.4 Find out second largest parameter

//function findSecondLargest(a, b, c, d) {
//let secondlargest = 0;
//if (a > b && a > c && a > d) {
// secondlargest = a;
//}
//if (b > a && b > c && b > d) {
//secondlargest = b;
//}
//if (c > a && c > b && c > d) {
//secondlargest = c;
//}
//if (d > a && d > b && d > c) {
//secondlargest = d;
//}
//return secondlargest;
//}

//console.log(findSecondLargest(1, 2, 3, 4));

// easiest solution: picture 1, picture 2, picture 3 = strong function (function call)

//function findSecondLargest (a,b,c,d) {
//return [a,b,c,d]
//}

//Problem No.5 Find out array inside elemnet
//const array = [1,2,3,4];
//function checkIfExists (array, element){
//return array.includes(element);
//}
//console.log(checkIfExists([1,2,3,4],4))  //true
//console.log(checkIfExists([1,2,3,4],5))  //false)

//Problem No.6 Find out index (param 1, param 2 picture)

//const array = [1,2,3,4];
//function index (array, element){
//return array.indexOf(element);
//}

// console.log(index ([1,2,3,4],3));
//console.log(index ([1,2,3,4],5));

//Problem No.7 Find out

//let temp = [];

//function pushIntoArray(element) {
// temp.push(element);
//}

//function popFromArray(){
//temp.pop();
//}

//pushIntoArray(1);
//console.log(temp);
//pushIntoArray(2);
//console.log(temp);
//popFromArray();
//console.log(temp);
//popFromArray();
//console.log(temp);

document.getElementById("Soyoloo").innerHTML = "Soyoloo";
document.getElementById("Soyoloo").style.color = "red";
console.log(document.getElementsByTagName("div"));
console.log(document.querySelectorAll("#Hello"));
document.getElementById("demo").innerHTML = "Date : " + Date();
document.getElementsByTagName("img")[0].src = "pencil.png";

const testing = document.createElement("h1");
console.log(testing);
const newContent = document.createTextNode("welcome to my site");
testing.appendChild(newContent);
const main = document.getElementsByTagName("body");
main[0].appendChild(testing);

const button = document.createElement("h1");
console.log(testing);
const buttonContent = document.createTextNode("Good to see you");
button.appendChild(buttonContent);
main[0].replaceChild(button, testing);

//1. Change body background color
//2. Create square in the middle
//3. Add text
//4. Change text color
//5. Add font

const body = document.getElementsByTagName("body")[0];
const greenButton = document.getElementById("greenButton");
greenButton.addEventListener("click", () => {
  body.style.backgroundColor = "green";
});

const blueButton = document.getElementById("blueButton");
blueButton.addEventListener("click", () => {
  body.style.background = "blue";
});

const addText = document.getElementsByTagName("addText");
addText.addEventListener("click", () => {
})

