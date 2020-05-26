require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
var cookieParser = require('cookie-parser')

const userRoute = require('./routes/user.route');
var authRoute = require('./routes/auth.routh');
var authMiddleware = require('./middlewares/auth.middleware');
const port = 3000;

const app = express();

app.set('view engine', 'pug');
app.set('views', './views');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser(process.env.SESSION_SECRET));


app.use(express.static('public'));


app.get('/', (req, res) => res.render('index', {
    name: 'An'
}));

app.use('/users', authMiddleware.requireAuth, userRoute);
app.use('/auth', authRoute);

app.listen(port, () => console.log('Server is listening on port ' + port));;