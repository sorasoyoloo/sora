const buttons = document.getElementsByTagName("button");
const resultElement = document.getElementById("result");
let string = " ";

buttons[0].addEventListener("click", () => {
    string += 1;
    resultElement.innerHTML = string;
}) 

buttons[1].addEventListener("click", () => {
    string += 2;
    resultElement.innerHTML = string;
}) 

buttons[2].addEventListener("click", () => {
    string += 3;
    resultElement.innerHTML = string;
}) 
buttons[3].addEventListener("click", () => {
    string += 4;
    resultElement.innerHTML = string;
}) 
buttons[4].addEventListener("click", () => {
    string += 5;
    resultElement.innerHTML = string;
}) 

buttons[5].addEventListener("click", () => {
    string += 6;
    resultElement.innerHTML = string;
}) 

buttons[6].addEventListener("click", () => {
    string += 7;
    resultElement.innerHTML = string;
}) 

buttons[7].addEventListener("click", () => {
    string += 8;
    resultElement.innerHTML = string;
}) 

buttons[8].addEventListener("click", () => {
    string += 9;
    resultElement.innerHTML = string;
}) 

buttons[9].addEventListener("click", () => {
    string += 1;
    resultElement.innerHTML = string;
}) 


