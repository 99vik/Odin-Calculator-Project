function add() {
    temp = first + second;
    temp = Math.round(temp * 100000) / 100000;
    lowerScreen.textContent = temp;
    operator = 0;
}

function subtract() {
    temp = first - second;
    temp = Math.round(temp * 100000) / 100000;
    lowerScreen.textContent = temp;
    operator = 0;
}

function multiply() {
    temp = first*second;
    temp = Math.round(temp * 100000) / 100000;
    lowerScreen.textContent = temp;
    operator = 0;
}

function divide() {
    if (second == 0) {
        initialState();
        upperScreen.textContent ="#ERROR";
        return
    }
    temp = first/second;
    temp = Math.round(temp * 100000) / 100000;
    lowerScreen.textContent = temp;
    operator = 0;
}

function executeOperation() {
    second = temp*1; 
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
    decimalIn = 0;
    operator = 0;
    first = 0;
    second = 0;
    justFinished = 1;
}
function deleteLastNumber() {
    if (temp.slice(-1) == ".") decimalIn = 0;
    temp = temp.slice(0,temp.length - 1);
    if (operator == 0) {
        upperScreen.textContent = temp;
    } else upperScreen.textContent = first + " + " + temp;
    
}
function addDecimal() {
    if (decimalIn != 0) return;
    if (justFinished == 1 && (temp%1) != 0 ) {
        initialState();
    }
    decimalIn = 1;
    temp += ".";
    justFinished = 0;
    if (operator == 0) {
        upperScreen.textContent = temp;
    } else switch(operator) {
        case 'add':
            upperScreen.textContent = first + " + " + temp;
        break;
        case 'subtract':
            upperScreen.textContent = first + " - " + temp;
        break;
        case 'multiply':
            upperScreen.textContent = first + " * " + temp;
        break;
        case 'divide':
            upperScreen.textContent = first + " / " + temp;
        break;    
        }
    console.log(temp);
}
const upperScreen = document.querySelector('.screen .upper');
const lowerScreen = document.querySelector('.screen .lower');
const numberButtons = document.querySelectorAll('button.number');
const operatorButtons = document.querySelectorAll('button.operator');
const acButton = document.querySelector('button.ac');
const equalsButton = document.querySelector('button.equals');
const delButton = document.querySelector('button.del');
const decimalButton = document.querySelector('button.decimal');
//when operator is pressed initiate operation that 
//inputs previously entered number that is on screen, and waits
//for the second number, arithmetic operation is execuded when
//equals or next operator are pressed

//show up entered numbers on screen
numberButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        if (temp.length > 7) return
        if (justFinished == 1) {
            initialState();
        }
        if (upperScreen.textContent == 0 && decimalIn == 0) {
            upperScreen.textContent = e.target.textContent;
        }
        else upperScreen.textContent += e.target.textContent;
        if (temp == 0 && decimalIn == 0) {
            temp = e.target.textContent;
        } else temp += e.target.textContent;
        console.log(temp);
    });
});

//initiate operator
operatorButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        if (justFinished == 1) {
            upperScreen.textContent = temp;
            lowerScreen.textContent = "";
            justFinished = 0;
        }
        if (operator != 0) return;
        operator = e.target.classList[1];
        first = temp*1; 
        temp = 0;
        decimalIn = 0;
        upperScreen.textContent += " " + e.target.textContent + " ";
    });
});

//keyboard support
window.addEventListener('keydown', (e) => {
    const key = document.querySelector(`button[data-key="${e.keyCode}"]`);
    if (!key) return
    key.click();
});

equalsButton.addEventListener('click', () => executeOperation());
acButton.addEventListener('click',() => {
    initialState();
});
delButton.addEventListener('click' , () => deleteLastNumber());
decimalButton.addEventListener('click', () => {
    addDecimal();
});
let decimalIn = 0;
let operator = 0;
let first = 0;
let second = 0;
let temp = 0;
let justFinished = 0;
function initialState() {
    justFinished = 0;
    decimalIn = 0;
    operator = 0;
    temp = 0;
    first = 0;
    second = 0;
    upperScreen.textContent = temp;
    lowerScreen.textContent = "";
}
initialState();