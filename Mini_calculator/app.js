
let num1 = document.querySelector("#num1");
let num2 = document.querySelector("#num2");
let adds = document.querySelector('#adds');
let minus = document.querySelector("#minus");
let multiply = document.querySelector("#multiply");
let divide = document.querySelector("#divide");
let display_result = document.querySelector("#display_result");


adds.addEventListener('click', function () {
    let num_1 = parseInt(num1.value);
    let num_2 = parseInt(num2.value);
    let result = addTwoNumbers(num_1, num_2);
    display_result.innerHTML = result;
})


minus.addEventListener('click', function () {
    let num_1 = parseInt(num1.value);
    let num_2 = parseInt(num2.value);
    let result = minusTwoNumbers(num_1, num_2);
    display_result.innerHTML = result;
})

multiply.addEventListener('click', function () {
    let num_1 = parseInt(num1.value);
    let num_2 = parseInt(num2.value);
    let result = multiplyTwoNumbers(num_1, num_2);
    display_result.innerHTML = result;
})

divide.addEventListener('click', function () {
    let num_1 = parseInt(num1.value);
    let num_2 = parseInt(num2.value);
    let result = divideTwoNumbers(num_1, num_2);
    display_result.innerHTML = result;
})


function addTwoNumbers(a, b) {
    let sum = a + b;
    return sum;
}

function minusTwoNumbers(a, b) {
    let diff = a - b;
    return diff;
}

function multiplyTwoNumbers(a, b) {
    let product = a * b;
    return product;
}

function divideTwoNumbers(a, b) {
    let quotient = a / b;
    return quotient;
}



