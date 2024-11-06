function runCalculation(num1, num2, opp) {
    if (num1 === "ERROR" || num1 === nothing || num2 === nothing || opp === nothing) {
        answer = num1 || num2;
    } else {
        switch (opp) {
            case "+" :
                answer = num1 + num2;
                break;
            case "-" :
                answer = num1 - num2;
                break;
            case "x" :
                answer = num1 * num2;
                break;
            case "÷" :
                if (num2 === 0) {
                    answer = "NOPE";
                } else {
                    answer = num1 / num2;
                }
                break;
        }
    }
    displayCalculation(answer);
}

function displayCalculation(answer) {
    if (answer.toString().length > 9) {
        display.innerText = answer.toString().substring(0, 9);
    } else {
        display.innerText = answer;
    }
    firstNumber = answer;
    secondNumber = nothing;
    operator = nothing;
}


const digits = document.querySelectorAll(".digit");
for (let digit of digits) {
    digit.addEventListener("click", function() {
        let number = digit.innerText;
        if (display.innerText.includes(".")) {
            decimal.disabled = true;
        } else {
            decimal.disabled = false;
        };
        printToScreen(number);
    })
}

const operators = document.querySelectorAll(".operator");
for (let operator of operators) {
    operator.addEventListener("click", function() {
        let type = operator.innerText;
        setOperator(type);
    })
}

const nothing = "nothing";
let operator = nothing;
let firstNumber = nothing;
let secondNumber = nothing;
let answer = nothing;

const equals = document.querySelector("#equals");
const clear = document.querySelector("#clear");
const decimal = document.querySelector("#decimal");
let display = document.querySelector(".display");

clear.addEventListener("click", function() {clearEverything()});
equals.addEventListener("click", function() {runCalculation(firstNumber, secondNumber, operator)});
    
function printToScreen(number) {
    if (display.innerText === answer || display.innerText === answer.toString().substring(0, 9)) {
        display.innerText = "";
    }

    if (display.innerText.length === 9) {
        return;
    }

    display.innerText += number;
    
    if (operator === nothing || firstNumber === "ERROR") {
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
    if (firstNumber !== nothing && operator !== nothing){
        runCalculation(firstNumber, secondNumber, operator);
    }
    operator = opp;
}

