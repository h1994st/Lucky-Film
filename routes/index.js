var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
  res.render('index', { title: 'Express' });
});

router.post('/submit', function (req, res) {
  console.log(req);
  console.log(res);
});

module.exports = router;
