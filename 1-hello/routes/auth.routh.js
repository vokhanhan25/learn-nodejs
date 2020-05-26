var express = require('express')
const shortid = require('shortid');
var controller = require('../controllers/auth.controller');
var router = express.Router();


router.get('/login', controller.login);

router.post('/login', controller.postLogin);

module.exports = router;