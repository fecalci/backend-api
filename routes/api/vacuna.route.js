var express = require('express')
var router = express.Router()
var VacunaController = require('../../controllers/vacuna.controller');
var Authorization = require('../../auth/authorization');


// Authorize each API with middleware and map to the Controller Functions
/* GET users listing. */
router.post('/', VacunaController.createVacuna)
//router.put('/',VacunaController.getVacuna)


// Export the Router
module.exports = router;



//api/users
//api/users/registration
//api/users/login