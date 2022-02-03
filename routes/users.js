var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/info', function(req, res, next) {
  res.status(200).json({data:'welcome aboard'});
});

module.exports = router;
