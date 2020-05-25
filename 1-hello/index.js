const express = require('express');
const bodyParser = require('body-parser');

const userRoute = require('./routes/user.route');

const port = 3000;

const app = express();

app.set('view engine', 'pug');
app.set('views', './views');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));


app.get('/', (req, res) => res.render('index', {
    name: 'An'
}));

app.use('/users', userRoute);

app.listen(port, () => console.log('Server is listening on port ' + port));;