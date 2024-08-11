// write code here

let Fname = prompt("Enter your name: ").trim();

if (Fname) {
    let person = Fname;
    console.log("Hello, " + person);
    alert("Hello, " + person);
} else {
    console.log("No name entered.");
    alert("No name entered.");
}