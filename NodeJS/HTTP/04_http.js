const http = require('http');


http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('content-type', 'text/html; charset=utf-8'); //for Thai languages
    if (req.url === '/') {
        // res.writeHead(200,{
        //     'content-type':'text/html'
        // });
        res.write('<h1>This is Home Page</h1>')
        for (let i =1;i<7;i++) {
            res.write(`<h${i}>ยินดีต้อนรับ : ${i}</h${i}>`)
        }
        return res.end()
    }
    if (req.url === '/user') {
        // res.writeHead(200,{
        //     'content-type':'text/html'
        // });
        res.write('<h1>This is User Page</h1>')
        return res.end()
    }
    if (req.url === '/about') {
        res.write(
            `<!DOCTYPE html>
            <html>
            <body style="background-color:powderblue;">
            <h1>This is a heading</h1>
            <p>This is a paragraph.</p>
            </body>
            </html>`)
        return res.end()
    }
    function form(req, res) {
        res.write(
            `<!DOCTYPE html>
            <html>
            <body>
            
            <h2>HTML Forms</h2>
            
            <form action="/action_page.php">
              <label for="fname">First name:</label><br>
              <input type="text" id="fname" name="fname" value="John"><br>
              <label for="lname">Last name:</label><br>
              <input type="text" id="lname" name="lname" value="Doe"><br><br>
              <input type="submit" value="Submit">
            </form> 
            
            <p>If you click the "Submit" button, the form-data will be sent to a page called "/action_page.php".</p>
            
            </body>
            </html>`)
        res.end()
    }
    if (req.url === '/form') {
        return form(req, res)
    }

    // res.writeHead(404,'Not Found',{
    //     'content-type':'text/html'
    // });
    res.statusCode = 404;
    res.statusMessage = 'Not Found';
    res.setHeader('content-type', 'text/html');
    res.write(res.statusMessage);
    res.end('<hr><h3>404 Not Found</h3></hr>')
}).listen(8000, () => {
    console.log('server start...')
});