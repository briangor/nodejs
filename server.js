const http = require('http');
const express = require('express');
const app = express();

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

// Routing

// GET method route
app.get('/', (req, res) => {
    res.send('GET request to the homepage')
})

// POST method route
app.post('/', (req, res) => {
    res.send('POST request to the homepage')
})

app.listen(3001, () => {
    console.log(`Example app listening on port 3001`);
});