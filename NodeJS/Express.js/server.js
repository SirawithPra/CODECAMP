const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send('Hello World')});
app.get('/user', (req, res) => {
    res.send('User Page')});
app.listen(3000,() => {
    console.log('Express server is running on port 3000');
});


// -------------------------------- //
const http = require('http');
const server = http.createServer();
server.on('request', (req, res) => {
    if(req.url === '/')
        res.end('Hello World');
    if(req.url === '/user')
        res.end('User page');
})
server.listen(8000, () => {
    console.log('HTTP server is running on port 8000')})