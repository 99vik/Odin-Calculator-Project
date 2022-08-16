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

let first = 0;
let second = 0;
const screen = document.querySelector('.screen');
const buttons = document.querySelectorAll('button.number,.operator');
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        first = e.target.textContent;
        screen.textContent = first;
        console.log(e.target.textContent);
    });
});