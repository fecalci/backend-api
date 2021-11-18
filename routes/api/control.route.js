var express = require('express')
var router = express.Router()
var ControlPediatricoController = require('../../controllers/control.controller');
var Authorization = require('../../auth/authorization');


// Authorize each API with middleware and map to the Controller Functions
/* GET users listing. */
router.post('/', ControlPediatricoController.createControl)
router.get('/',ControlPediatricoController.getControl)
router.get('/last',ControlPediatricoController.getLastControl)




// Export the Router
module.exports = router;



//api/users
//api/users/registration
//api/users/login