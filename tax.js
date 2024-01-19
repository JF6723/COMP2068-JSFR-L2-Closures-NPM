let http = require('http');

// start web server & listen for http requests
http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<h1>Tax Calculator</h1>');
    res.end();
}).listen(3000);

console.log('Server is up');