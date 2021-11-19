/**ROUTE USER APIs. */
var express = require('express')

var router = express.Router()
var users = require('./api/user.route')
var control = require('./api/control.route')
var vacuna = require('./api/vacuna.route')

router.use('/users', users);
router.use('/control', control);
router.use('/vacuna',vacuna);

module.exports = router;
