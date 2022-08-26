const http = require('http');
const request = require('request');
const addition = require('./addition');

// Defining hostname and port
const hostname = '127.0.0.1';
const port = 3000;

// Create a server object
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');

    let url = req.url;

    if (url === '/about') {
        res.write(' Welcome to about us page');
        res.end();
    }
    else if (url === '/contact') {
        res.write(' Welcome to contact us page');
        res.end();
    }
    else {
        res.write('The new server is up!');
        res.end();
    }
});

// The server listens on port 3000
server.listen(port, hostname, () => {
    console.log(`Server is running at: http://${hostname}:${port}`);
});


// Usign a custom module 'addition'
console.log(addition.addNumber(1,2));

// request module
let url = 'https://www.guru99.com/node-js-create-server-get-data.html';
request(url, (error, res, body) => {
    console.log(error);
    console.log(res);
    console.log(body);
});