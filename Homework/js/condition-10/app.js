// write code here
let username = prompt("Enter your username");
let password = prompt("Enter your password");

if (username.trim() === "") {
    alert("username is required");
} else if (password.trim() === "") {
    alert("password is required");
} else if ((username === "admin" && password === "1234") || (username === "john" && password === "qwerty")) {
    alert("Hello " + username);
} else {
    alert("invalid username or password");
}
