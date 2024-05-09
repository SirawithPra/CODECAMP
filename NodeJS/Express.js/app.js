const express = require('express')
const app = express()

const userRoute = require('./userRoute')
app.use('/user', userRoute)

//app.use(express.static('./public'))
app.use('/pub',express.static('./public'))
app.get('/', (req, res)=>{
    res.redirect('/pub/position.html')
    //redirection to  file in public folder

});
app.get('/sample', (req, res)=>{
    res.redirect('/pub/sample.json')
    //redirection to  file in public folder
});

app.listen(3000)