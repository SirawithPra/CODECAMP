const express = require('express');
const app = express();
const port = 3000;
const fs = require('fs');
const bodyParser = require('body-parser');


let data;
try {
    data = JSON.parse(fs.readFileSync('./sample.json'));
} catch (err) {
    console.error('Error reading or parsing sample.json:', err);
    process.exit(1); // Exiting the process due to critical error
}
let users = data.users;
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/pub',express.static('./public'))
app.get('/', (req, res)=>{
    res.redirect('/pub/formPost.html');
});

app.post('/dosearch', (req, res) => {
    console.log(req.body);
    res.send(users.filter(x => x.firstName.includes(req.body.firstname)));
})

app.listen(port, () => console.log('server start...'));