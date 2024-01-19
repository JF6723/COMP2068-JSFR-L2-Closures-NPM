// core node modules
let http = require('http');
let url = require('url');

// 3rd party add-ons from npm
let accounting = require('accounting');

// start web server & listen for http requests
http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<h1>Tax Calculator</h1>');

    // parse url param (text after the ? in the url e.g. subtotal=99 )
    // node version of PHP $_GET[somevar]
    let query = url.parse(req.url, true).query;
    let subtotal = parseFloat(query.subtotal);

    if (isNaN(subtotal)) {
        res.write('Your supposedly-numeric param value sucks');
    }
    else {
        let tax = subtotal * .13;
        let total = tax + subtotal;

         res.write(`<h2>Sub-Total: ${accounting.formatMoney(subtotal)}</h2>
            <h2>Tax: ${accounting.formatMoney(tax)}</h2>
            <h2>Total: ${accounting.formatMoney(total)}</h2>`);
    }
   
    res.end();
}).listen(3000);

console.log('Server is up');