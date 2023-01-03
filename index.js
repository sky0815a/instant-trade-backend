const express = require('express');
const bodyParser = require ("body-parser")
const cors = require('cors')
const itemsController = require('./controllers/items.js');
const app = express();
app.set('port', process.env.PORT || 8080);


app.use(express.json());
app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json())

app.get("/", (req, res) => {
    res.redirect('/item' )
})

app.use('/item', itemsController);

app.use((err, req, res, next) => {
    const statusCode = res.statusCode || 500
    const message = err.message || 'Internal Server Error'
    res.status(statusCode).send(message)
})

app.listen(app.get('port'), () => {
	console.log(`✅ PORT: ${app.get('port')} 🌟`);
});

module.exports = app;