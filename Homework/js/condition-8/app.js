// write code here

let score = prompt("Please enter your score");
score = parseFloat(score);

if (isNaN(score) || score < 0 || score > 100) {
    alert("Invalid score");
} else {
    let grade;

    if (score >= 80) {
        grade = "A";
    } else if (score >= 70) {
        grade = "B";
    } else if (score >= 60) {
        grade = "C";
    } else if (score >= 50) {
        grade = "D";
    } else {
        grade = "F";
    }

    alert("Your grade is: " + grade);
}
