const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', (req, res) => res.render('index', {
    name: 'An'
}));

let users = [
    { id: 1, name: 'An' },
    { id: 2, name: 'Dao' }
];
app.get('/users', (req, res) => res.render('users/index', {
    users: users
}));

app.get('/users/search', function(req, res) {
    let q = req.query.q;
    var matchedUsers = users.filter(function(user) {
        return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
    });
    res.render('users/index', {
        users: matchedUsers
    });
});

app.get('/users/create', function(req, res) {
    res.render('users/create')
})

app.listen(port, () => console.log('Server is listening on port ' + port));;