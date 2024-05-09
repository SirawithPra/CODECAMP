const express = require('express');
const app = express();
const port = 3000;
const fs = require('fs');


let data;
try {
    data = JSON.parse(fs.readFileSync('./sample.json'));
} catch (err) {
    console.error('Error reading or parsing sample.json:', err);
    process.exit(1); // Exiting the process due to critical error
}
let users = data.users;
let userCounter = 0
app.use('/users', (req, res, next) => {
    userCounter++;
    console.log(`User request number #${userCounter} requested ${req.url}`);
    next(); // Exiting the process due to critical error
})
app.get('/users', (req, res) => {
    res.send(users);
})

//http://localhost:3000/search?uname=racks
//use with form submission
app.get('/search', (req, res) => {
    let formHTML = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body>
        <form action="/dosearch" method="GET">
            <label for="firstname">First Name</label>
            <input type="text" name="firstname" placeholder="First Name">
            <input type="submit">
        </form>
    </body>
    </html>
    `
    //res.send(users.find(x => x.firstName === req.query.uname));
    res.send(formHTML);
})

//http://localhost:3000/dosearch?firstname=de
app.get('/dosearch', (req, res) => {
    res.send(users.filter(x => x.firstName.includes(req.query.firstname)));
})

//http://localhost:3000/users/4
app.get('/users/:id', (req, res) => {
    //res.send(users[+req.params.id+1]);
    res.send(users[parseInt(req.params.id) - 1]);
})
//http://localhost:3000/users/byname/Krish
app.get('/users/byName/:uname', (req, res) => {
    res.send(users.find(x => (x.firstName === req.params.uname)))
    //console.log(req.params.uname)
})
app.get('/listname', (req, res) => {
    let outHTML = '<ol>'
    users.forEach(x => {
        outHTML += `<li>${x.firstName} ${x.lastName}  : <b> ${x.emailAddress}</b> <hr></li>`
    })
    outHTML += '</ol>';
    res.send(outHTML);
})

app.listen(port, () => console.log('server start...'));