let number = parseInt(prompt('Player 1: Please input a number between 1 and 100'));

if (isNaN(number) || number < 1 || number > 100) {
    alert('Invalid number. Please reload and input a number between 1 and 100.');
} else {
    let guessedCorrectly = false;

    while (!guessedCorrectly) {
        let tryNumber = parseInt(prompt('Guess the number between 1 and 100'));
        if (isNaN(tryNumber)) {
            alert('Please enter a valid number.');
        } else if (tryNumber > number) {
            alert('Too high! Try again.');
        } else if (tryNumber < number) {
            alert('Too low! Try again.');
        } else {
            alert('Congratulations! You guessed the correct number!');
            guessedCorrectly = true;
        }
    }
}
