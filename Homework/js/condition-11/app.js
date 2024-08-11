// write code here

let user = prompt("Enter your username:");

if (user === null || user.trim() === "") {
    user = "guest";
} else if (user === "codecamp") {
    let password = prompt("Enter your password:");
    if (password === "123456") {
        user = "codecamp";
    } else {
        alert("Wrong password");
        user = "guest";
    }
} else {
    user = "guest";
}

alert("Welcome " + user);
