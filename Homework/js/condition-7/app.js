// write code here

let input1 = prompt("Please enter the first number");
let input2 = prompt("Please enter the second number");

let number1 = parseFloat(input1);
let number2 = parseFloat(input2);

if (isNaN(number1) || isNaN(number2)) {
    alert("Invalid number");
} else {
    let sum = number1 + number2;
    alert("The sum of the two numbers is: " + sum);
}
