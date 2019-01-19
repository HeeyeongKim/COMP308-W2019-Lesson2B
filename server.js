const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

/* -----break down version-----
function ServerParams(req, res){
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\n');
}

const server = http.createServer(ServerParams); // (Creational)Factory design pattern
*/

const server = http.createServer(function(req, res){
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('StudentID: 300954759/Name: Heeyeong Kim\n');
  });

  server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });

