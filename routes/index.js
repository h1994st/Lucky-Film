var express = require('express');
var router = express.Router();

var core = require('../core');

/* GET home page. */
router.get('/', core.getList);
router.get('/', function (req, res) {
  res.render('index', { title: '大电影计划', list: req.list });
});

/* POST film. */
router.post('/submit', core.submitFilm);
router.post('/submit', function (req, res) {
  res.redirect('/');
});

/* GET random film. */
router.get('/random', function (req, res) {

});

module.exports = router;
