const express = require('express');
const app = express();
//const users = require('./users');
//const Joi = require('joi'); //used for validation
app.use(express.json());

// Routing
const hostname = 'briangor.xyz';
const port = 3000;

dbUrl = 'briangor.xyz:3100/books';
const books = [
    { title: 'Harry Potter', id: 1 },
    { title: 'Twilight', id: 2 },
    { title: 'Lorien Legacies', id: 3 },
    { title: 'Think Big', id: 4 },
]


//READ Request Handlers
app.get('/', (req, res) => {
    res.send('REST API with Node.js!');
});

app.get(`/api/books`, (req, res) => {
    res.send(books);
});

app.get('/api/books/:id', (req, res) => {
    const book = books.find(c => c.id === parseInt(req.params.id));

    if (!book) res.status(404).send('<h2 style="font-family: Malgun Gothic; color: darkred;">Ooops... Cant find what you are looking for!</h2>');
    res.send(book);
});


//CREATE Request Handler
app.post('/api/books', (req, res) => {

    const book = {
        id: books.length + 1,
        title: req.body.title
    };
    books.push(book);
    res.send(book);
});


//UPDATE Request Handler
app.put('/api/books/:id', (req, res) => {
    const book = books.find(c => c.id === parseInt(req.params.id));
    if (!book) res.status(404).send('<h2 style="font-family: Malgun Gothic; color: darkred;">Not Found!! </h2>');

    book.title = req.body.title;
    res.send(book);
});


//DELETE Request Handler
app.delete('/api/books/:id', (req, res) => {

    const book = books.find(c => c.id === parseInt(req.params.id));
    if (!book) res.status(404).send('<h2 style="font-family: Malgun Gothic; color: darkred;"> Not Found!! </h2>');

    const index = books.indexOf(book);
    books.splice(index, 1);

    res.send(book);
});



/* // GET method route
app.get('/', (req, res) => {
    res.send('GET request to the homepage');
});

// POST method route
app.post('/', (req, res) => {
    res.send('POST request to the homepage');
}); */


/* //Adding routes
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/users', (req, res) => {
    res.json(users);
    res.send(req.params);
    console.log(req.params);
});

// From codeburst.io
//Express error handling middleware 
app.use((req, res) => {
    res.type('text/plain');
    res.status(505);
    res.send('Error page');
}); */


app.listen(port, hostname, () => {
    console.log(`Express app listening on ${hostname}:${port}`);
});