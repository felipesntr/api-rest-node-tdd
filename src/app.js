const app = require('express')();
const consign = require('consign');


consign({ cwd: 'src', verose: false })
    .include('./config/middlewares.js')
    .then('./routes')
    .then('./config/routes.js')
    .into(app);

app.get('/', (req, res) => {
    res.status(200).send({
        message: 'Hello World'
    });
});

module.exports = app;