

function add(number1, number2){
    return number1 + number2; 
}
function addNumbers(){
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);
    document.querySelector('#sum').value = add(addNumber1, addNumber2);
}
document.querySelector('#addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */
const subtract = function(num1, num2){
    return num1 - num2;
}
const subtractNumbers = function(){
    let subNumber1 = Number(document.querySelector('#subtract1').value);
    let subNumber2 = Number(document.querySelector('#subtract2').value);
    document.querySelector("#difference").value = subtract(subNumber1, subNumber2);
}
document.querySelector("#subtractNumbers").addEventListener("click", subtractNumbers);

/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2) => number1 * number2;

const multiplyNumbers = () => {
    let multiplyNumber1 = Number(document.querySelector("#factor1").value);
    let multiplyNumber2 = Number(document.querySelector("#factor2").value);
    document.querySelector("#product").value = multiply(multiplyNumber1, multiplyNumber2);
}

document.querySelector("#multiplyNumbers").addEventListener("click", multiplyNumbers);

/* Open Function Use - Divide Numbers */
// function divide(){
//     let num1 = document.getElementById("#dividend").value;
//     let num2 = document.getElementById("#divisor").value;
//     document.getElementById("#quotient").innerHTML = num1 / num2;
// }
// document.querySelector("#divideNumbers").addEventListener("click", divide);
const divide = function(number1, number2){
    number1 / number2;
}
const divideNumbers = function(){
    let divideNumber1 = Number(document.querySelector("#dividend").value);
    let divideNumber2 = Number(document.querySelector("#divisor").value);
    document.querySelector("#quotient").value = divide(divideNumber1, divideNumber2);
}
document.querySelector("#divideNumbers").addEventListener("click", divideNumbers);

// /* Decision Structure */
const date = new Date();
const year = new Date().getFullYear;
document.querySelector("#year").value = year;

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
var numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];
document.getElementById("array").innerHTML = numbersArray;
/* Output Odds Only Array */
document.getElementById("odds").innerHTML = numbersArray.filter((num) => num % 2 === 1); 
/* Output Evens Only Array */
document.getElementById("evens").innerHTML = numbersArray.filter((num) => num % 2 === 0); 
/* Output Sum of Org. Array */
document.getElementById("sumOfArray").innerHTML = numbersArray.reduce((sum, number) => sum + number);
function sum(){
    return numbersArray + numbersArray;
}
/* Output Multiplied by 2 Array */
document.getElementById("multiplied").innerHTML = numbersArray.map(number => number *2);
/* Output Sum of Multiplied by 2 Array */
const map = numbersArray.map(number => number *2)
document.getElementById("sumOfMultiplied").innerHTML = map.reduce((sum, number) => sum + number);