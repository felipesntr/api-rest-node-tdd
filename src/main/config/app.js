const app = require('express')();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.status(200).send({
        message: 'Hello World'
    });
});

app.get('/users', (req, res) => {
    const users = [{ name: 'John Doe', mail: 'mail@mail.com' }];
    res.status(200).json(users);
});

app.post('/users', (req, res) => {
    res.status(201).json(req.body);
});


module.exports = app;