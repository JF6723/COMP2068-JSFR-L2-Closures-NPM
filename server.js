let http = require('http');
let fs = require('fs');

http.createServer((req, res) => {
    console.log(req.url);
    switch (req.url) {
        case '/css/bootstrap.min.css':
            fs.readFile('css/bootstrap.min.css', 'utf8', (err, styles) => {
                /*if (err) {
                    console.log(err);
                }
                else { */
                    res.write(styles);
                    res.end();
                //}               
            });
            break;
        default: 
            fs.readFile('index.html', 'utf8', (err, htmlContents) => {
            if (err) {
                console.log(err);
            }
            else {
                res.write(htmlContents);
                res.end();
            }    
        });
    }   
}).listen(3000);