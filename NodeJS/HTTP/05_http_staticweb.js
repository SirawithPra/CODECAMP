const http = require('http');
const port = 8000;
const fs = require('fs');

function renderHTML(filename, req, res) {
    fs.readFile(filename, (err, data) => {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf8' });
        res.write(data);
        res.end();
    });
}
http.createServer((req, res) => {
    if (req.url === '/') 
        return renderHTML('./index.html', req, res);
    if (req.url === '/form') 
        return renderHTML('./form.html', req, res);
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.write('<h1>404 Not Found</h1>');
    res.end();
}).listen(port, () => console.log('Server start...'));