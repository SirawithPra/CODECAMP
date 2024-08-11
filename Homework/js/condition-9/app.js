// write code here
let num1 = parseFloat(prompt("Please enter the first number"));
let num2 = parseFloat(prompt("Please enter the second number"));
let num3 = parseFloat(prompt("Please enter the third number"));

let numbers = [num1, num2, num3];

if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
    alert("Invalid input. Please enter valid numbers.");
} else {
    numbers.sort(function(a, b) {
        return b - a;
    });
    alert("The numbers in descending order are: " + numbers.join(", "));
}
