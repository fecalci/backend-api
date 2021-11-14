var express = require('express');
var router = express.Router();
var UploadController = require('../controllers/upload.controller');



/* GET utils listing. */
router.get('/', function(req, res, next) {
  res.send('Utils listing');
});

router.post('/upload', UploadController.uploadFiles);


module.exports = router;
