const http = require('http');
const server = http.createServer();

server.on('request', (req, res) => {
    let {headers, httpVersion, method, url} =req
    //destructor function
    console.log(headers.host)
    console.log(httpVersion)
    console.log(method)
    console.log(url)
})
server.listen(8000);