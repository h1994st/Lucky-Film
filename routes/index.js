var express = require('express');
var router = express.Router();

var core = require('../core');

/* GET home page. */
router.get('/', core.getList);
router.get('/', function (req, res) {
  var options = { cur: 'Index', title: '大电影计划', list: req.list };
  if (req.pjax) { options.layout = false; };
  res.render('index', options);
});

/* POST film. */
router.post('/submit', core.submitFilm);
router.post('/submit', function (req, res) {
  res.redirect('/');
});

/* GET random film. */
router.get('/random', core.getList);
router.get('/random', core.getRandomFilm);
router.get('/random', function (req, res) {
  var options = { cur: 'Random', title: '随机结果', random: req.random};
  if (req.pjax) { options.layout = false; };
  res.render('random', options);
});

/* GET top250 film. */
router.get('/top250', core.getTop250List);
router.get('/top250', function (req, res) {
  var options = { cur: 'Top250', title: 'Top 250', list: JSON.parse(req.top250List).subjects };
  if (req.pjax) { options.layout = false; };
  res.render('top250', options);
});

module.exports = router;
