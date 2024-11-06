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
    if (num1 == "ERROR" || num1 == nothing || num2 == nothing || opp == nothing) {
        answer = num1 || num2;
    } else {
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
        }
    }
    displayCalculation(answer);
}

function displayCalculation(answer) {
    console.log(firstNumber, secondNumber, operator);
    if (answer.toString().length > 9) {
        display.innerText = answer.toString().substring(0, 9);
    } else {
        display.innerText = answer;
    }
    firstNumber = answer;
    secondNumber = nothing;
    operator = nothing;
}

const nothing = "";
let operator = nothing;
let firstNumber = nothing;
let secondNumber = nothing;
let answer = nothing;
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
    if (display.innerText == answer || display.innerText == answer.toString().substring(0, 9)) {
        display.innerText = "";
    }

    if (display.innerText.length === 9) {
        return;
    }

    display.innerText += number;
    
    if (operator == nothing || firstNumber == "ERROR") {
        firstNumber = +display.innerText;
    } else {
        secondNumber = +display.innerText;
    }
}

function clearEverything() {
    display.innerText = "";
    firstNumber = nothing;
    secondNumber = nothing;
    operator = nothing;
    answer = nothing;
}

function setOperator(opp) {
    display.innerText = "";
    if (secondNumber !== nothing && firstNumber !== "ERROR") {
        runCalculation(firstNumber, secondNumber, opp);
    }
    operator = opp;
}

