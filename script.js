function add() {
    lowerScreen.textContent = first + second;
    operator = 0;
    return first + second;
}

function subtract() {
    lowerScreen.textContent = first - second;
    operator = 0;
    return first - second;
}

function multiply() {
    lowerScreen.textContent = first * second;
    operator = 0;
    return first*second;
}

function divide() {
    lowerScreen.textContent = first / second;
    operator = 0;
    return first/second;
}

function executeOperation() {
    second = temp*1; 
    console.log(second);
    temp = 0;
    switch (operator) {
        case 'add':
        add();
        break;
        case 'subtract':
        subtract();
        break;
        case 'multiply':
        multiply();
        break;
        case 'divide':
        divide();
        break;
    }
}

const upperScreen = document.querySelector('.screen .upper');
const lowerScreen = document.querySelector('.screen .lower');
const numberButtons = document.querySelectorAll('button.number');
const operatorButtons = document.querySelectorAll('button.operator');
const acButton = document.querySelector('button.ac');
const equalsButton = document.querySelector('button.equals');

//when operator is pressed initiate pressed function that 
//inputs previously entered number that is on screen, and waits
//for the second number, arithmetic operation is execuded when
//equals is pressed, or next operator

//show up entered numbers on scree
numberButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        if (upperScreen.textContent == 0) {
            upperScreen.textContent = e.target.textContent;
        }
        else upperScreen.textContent += e.target.textContent;
        if (temp == 0) {
            temp = e.target.textContent;
        } else temp += e.target.textContent;
    });
});

//initiate operator
operatorButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        if (operator != 0) return;
        operator = e.target.classList[1];
        first = temp*1; 
        temp = 0;
        upperScreen.textContent += " " + e.target.textContent + " ";
        console.log(operator);
        console.log(first)
    });
});

equalsButton.addEventListener('click', () => executeOperation());
acButton.addEventListener('click',() => {
    console.log("ac");
    initialState();
});

let operator = 0;
let first = 0;
let second = 0;
let temp = 0;
function initialState() {
    operator = 0;
    temp = 0;
    first = 0;
    second = 0;
    temp = 0;
    upperScreen.textContent = temp;
}
initialState();