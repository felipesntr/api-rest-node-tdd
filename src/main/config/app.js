const app = require('express')();

app.get('/', (req, res) => {
    res.status(200).send({
        message: 'Hello World'
    });
});

app.get('/users', (req, res) => {
    const users = [{ name: 'John Doe', mail: 'mail@mail.com' }];
    res.status(200).json(users);
})

module.exports = app;