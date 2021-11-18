/**ROUTE USER APIs. */
var express = require('express')

var router = express.Router()
var users = require('./api/user.route')
var control = require('./api/control.route')

router.use('/users', users);
router.use('/control', control);

module.exports = router;
