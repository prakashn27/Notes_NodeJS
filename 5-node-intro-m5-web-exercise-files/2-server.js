var fs = require('fs');

var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    if (req.url === '/file.txt') {
        fs.createReadStream(__dirname + '/file.txt').pipe(res);
    } else if(req.url == '/status') {
        res.end('Success');
    } else {
    res.end("Hello world");
  }
}).listen(2000, 'localhost');
console.log('Server running!');