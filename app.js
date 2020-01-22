
const express = require('express');
const app = express();
const nunjucks = require('nunjucks');
const tweetBank = require('./tweetBank.js');
const routes = require('./routes/index.js');

app.use('/', routes);

app.use(express.static('public'))

app.get('/stylesheets/:file', (req, res) => {
    res.sendFile('/stylesheets/' + req.params.file)
})


app.use(function (req, res, next) {
    console.log('hola, esta corriendo');
    next();
})

app.set('view engine', 'html'); // hace que res.render funcione con archivos html
nunjucks.configure('views', { noCache: true });
app.engine('html', nunjucks.render); // cuando le den archivos html a res.render, va a usar nunjucks

app.use('/', routes);



app.get('/', function (req, res) {
    res.send('Hello World!');
});
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});






