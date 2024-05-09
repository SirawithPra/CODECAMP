const http = require('http');
        //1
// const server = http.createServer()
// server.on('request', (req, res) => {
//     console.log('request coming...')
//     res.writeHead(200,{'Content-type' :'text/html'})
//     res.write('<h1>Hello World</h1>')
//     res.end()
// })
// server.listen(8000)

        //2
// http.createServer((req, res)=>{
//     console.log('request coming...')
//     res.writeHead(200,{'Content-type' :'text/html'})
//     res.write('<h1>Hello World</h1>')
//     res.end()
// }).listen(8000)

        //3
function app(req, res){
    console.log('request coming...')
    res.writeHead(200,{'Content-type' :'text/html'})
    res.write('<h1>Hello World</h1>')
    res.end()
}
http.createServer(app).listen(8000)