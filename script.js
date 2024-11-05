function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function runCalculation(num1, num2, opp) {
    switch (opp) {
        case "plus" :
            answer = add(num1, num2);
            break;
        case "minus" :
            answer = subtract(num1, num2);
            break;
        case "multiply" :
            answer = multiply(num1, num2);
            break
        case "divide" :
            if (num2 === 0) {
                answer = "NOPE";
            } else {
                answer = divide(num1, num2);
            }
            break;
        default :
            answer = firstNumber;  
    }
    displayCalculation(answer);
}

function displayCalculation(answer) {
    if (answer.toString().length > 9) {
        display.innerText = answer.toPrecision(8);
    } else { 
        display.innerText = answer;
    }
    firstNumber = answer;
    secondNumber = 9999999999;
    operator = "";
}

let operator = "";
let firstNumber = 9999999999;
let secondNumber = 9999999999;
let answer = 9999999999;
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");
const zero = document.querySelector("#zero");
const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const times = document.querySelector("#times");
const divisor = document.querySelector("#divisor");
const equals = document.querySelector("#equals");
const clear = document.querySelector("#clear");
let display = document.querySelector(".display");

one.addEventListener("click", function() {printToScreen(1)});
two.addEventListener("click", function() {printToScreen(2)});
three.addEventListener("click", function() {printToScreen(3)});
four.addEventListener("click", function() {printToScreen(4)});
five.addEventListener("click", function() {printToScreen(5)});
six.addEventListener("click", function() {printToScreen(6)});
seven.addEventListener("click", function() {printToScreen(7)});
eight.addEventListener("click", function() {printToScreen(8)});
nine.addEventListener("click", function() {printToScreen(9)});
zero.addEventListener("click", function() {printToScreen(0)});
clear.addEventListener("click", function() {clearEverything()});
plus.addEventListener("click", function() {setOperator("plus")});
minus.addEventListener("click", function() {setOperator("minus")});
times.addEventListener("click", function() {setOperator("multiply")});
divisor.addEventListener("click", function() {setOperator("divide")});
equals.addEventListener("click", function() {runCalculation(firstNumber, secondNumber, operator)});
    
function printToScreen(number) {
    if (display.innerText == answer || display.innerText == answer.toPrecision(8)) {
        display.innerText = "";
    }

    if (display.innerText.length === 9) {
        return;
    }

    display.innerText += number;
    
    if (firstNumber === 9999999999) {
        firstNumber = +display.innerText;
    } else {
        secondNumber = +display.innerText;
    }
}

function clearEverything() {
    display.innerText = "";
    firstNumber = 9999999999;
    secondNumber = 9999999999;
    operator = "";
    answer = 9999999999;
}

function setOperator(opp) {
    display.innerText = "";
    if (operator !== "" && secondNumber !== NaN) {
        runCalculation(firstNumber, secondNumber, opp);
    }
    operator = opp;
}

