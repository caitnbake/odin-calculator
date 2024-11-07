const nothing = "nothing";
let operator = nothing;
let first = [];
let second = [];
let answer = nothing;

const equals = document.querySelector(".equal");
const clear = document.querySelector("#clear");
const decimal = document.querySelector(".decimal");
const backspaceBtn = document.querySelector(".back");
let running = document.querySelector(".running");
let display = document.querySelector(".display");

clear.addEventListener("click", function() {clearEverything()});
equals.addEventListener("click", function() {runCalculation(first, second, operator)});
backspaceBtn.addEventListener("click", function() {backspace()});

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

document.addEventListener('keydown', (e) => {
    switch (e.key) {
        case '0' :
        case '1' :
        case '2' :
        case '3' :
        case '4' :
        case '5' :
        case '6' :
        case '7' :
        case '8' :
        case '9' :
        case '+' :
        case '-' :
        case 'x' :
        case '÷' :
        case '=' :
        case '.' :
            document.getElementById(e.key).click();
            break;
        case '*' :
            document.getElementById("x").click();
            break;
        case '/' :
            document.getElementById("÷").click();
            break;
        case 'Backspace' :
            document.getElementById("back").click();
            break;
        case 'Enter' :
            document.getElementById("=").click();
            break;
        default: 
        return false;
    }
})

function runCalculation(num1, num2, opp) {
    let firstNumber = +num1.join("");
    let secondNumber = +num2.join("");

    if (secondNumber === "" || firstNumber === "" || opp === nothing) {
        answer = firstNumber || secondNumber || "";
    } else {
        switch (opp) {
            case "+" :
                answer = firstNumber + secondNumber;
                break;
            case "-" :
                answer = firstNumber - secondNumber;
                break;
            case "x" :
                answer = firstNumber * secondNumber;
                break;
            case "÷" :
                if (secondNumber == 0) {
                    answer = "NOPE";
                } else {
                    answer = firstNumber / secondNumber;
                }
                break;
        }
    }

    if (operator !== nothing) {
        running.innerText += `${firstNumber} ${operator} ${secondNumber} = ${answer}
        `;
    } else {
        running.innerText += `${firstNumber} = ${answer}
        `;
    }
    displayCalculation(answer);
}

function displayCalculation(answer) {
    if (answer.toString().length > 9) {
        display.innerText = answer.toString().substring(0, 9);
    } else {
        display.innerText = answer;
    }
    first = answer.toString().split("") || [];
    second = [];
    operator = nothing;
}
    
function printToScreen(number) {
    if (Number.isInteger(+number) || number === "."){
        if (operator === nothing) {
            first.push(number);
        } else {
            second.push(number);
        }
    }
    if (display.innerText.length === 9) {
        return;
    }
    display.innerText += number;
}

function backspace() {
    let currentDisplay = display.innerText.split("");
    let removedChar = currentDisplay.pop();
    display.innerText = currentDisplay.join("");

    if (Number.isInteger(+removedChar) || removedChar === ".") {
        if (operator === nothing) {
            let lastIndex = first.lastIndexOf(removedChar);
            first = first.slice(0, lastIndex);
        } else {
            lastIndex = second.lastIndexOf(removedChar);
            second = second.slice(0, lastIndex);
        }
    } else {
        operator = nothing;
    }

    printToScreen("");
}

function clearEverything() {
    display.innerText = "";
    first = [];
    second = [];
    operator = nothing;
    answer = nothing;
    running.innerText = "";
}

function setOperator(opp) {
    if (first != [] && second != [] && operator !== nothing){
        runCalculation(first, second, operator);
    }
    operator = opp;
    printToScreen(opp);
}

