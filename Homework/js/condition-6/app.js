// write code here

let userInput = prompt("Please enter a number");
let number = parseFloat(userInput);

if (isNaN(number)) {
    alert("Invalid number");
} else if (number % 2 === 0) {
    alert("Even number");
} else {
    alert("Odd number");
}
