var md5 = require('md5');

const db = require('../db');
const shortid = require('shortid');

module.exports.login = function(req, res) {
    res.render('auth/login');
}

module.exports.postLogin = function(req, res) {
    let email = req.body.email;
    let password = req.body.password;

    let user = db.get('users').find({ email: email }).value();

    if (!user) {
        res.render('auth/login', {
            errors: ['User does not exists'],
            values: req.body
        });
        return;
    }

    var hashedPassword = md5(password);

    if (user.password !== hashedPassword) {
        res.render('auth/login', {
            errors: ['Wrong password'],
            values: req.body
        })
        return;
    }
    res.cookie('userId', user.id);
    res.redirect('/users');
};