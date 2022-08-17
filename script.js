function add(first,second) {
    return first + second;
}

function subtract(first,second) {
    return first - second;
}

function multiply(first,second) {
    return first*second;
}

function divide(first,second) {
    return first/second;
}

const upperScreen = document.querySelector('.screen .upper');
const numberButtons = document.querySelectorAll('button.number');
const operatorButtons = document.querySelectorAll('button.operator');
const acButton = document.querySelector('button.ac');

//when operator is pressed initiate pressed function that 
//inputs previously entered number that is on screen, and waits
//for the second number, arithmetic operation is execuded when
//equals is pressed, or next operator
numberButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        if (upperScreen.textContent == 0) {
            upperScreen.textContent = e.target.textContent;
        }
        else upperScreen.textContent += e.target.textContent;
        enteredNumber = upperScreen.textContent;
        console.log(enteredNumber);
    });
});

operatorButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        first = enteredNumber;
        upperScreen.textContent += " " + e.target.textContent;
        console.log(e.target.classList[1]);
    });
});

acButton.addEventListener('click',() => {
    console.log("ac");
    initialState();
});

let enteredNumber = 0;
let first = 0;
let second = 0;
let temp = 0;
function initialState() {
    enteredNumber = 0;
    first = 0;
    second = 0;
    temp = 0;
    upperScreen.textContent = enteredNumber;
}
initialState();