// write code here

let userInput = prompt("Please enter a number");
let number = parseFloat(userInput);

if (isNaN(number)) {
    alert("Invalid number");
} else if (number === 0) {
    alert("Zero");
} else if (number > 0) {
    alert("Positive number");
} else {
    alert("Negative number");
}
