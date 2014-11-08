var express = require('express');
var router = express.Router();

var config = require('../config');

var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database(config.database);

/* GET home page. */
router.get('/', function (req, res) {
  res.render('index', { title: 'Express' });
});

/* GET film list. */
router.get('/list', function (req, res) {
  db.all("SELECT * FROM SUBMITTED_FILMS", function (err, rows) {
    console.log(rows);
    res.render('list', { title: 'List', list: rows });
  });
});

/* POST film. */
router.post('/submit', function (req, res) {
  var film = req.param('film');
  console.log(film);

  db.serialize(function () {
    db.run("CREATE TABLE IF NOT EXISTS SUBMITTED_FILMS (name TEXT, url TEXT)");

    var stmt = db.prepare("INSERT INTO SUBMITTED_FILMS VALUES (?, ?)");
    stmt.run(film.name, film.url);
    stmt.finalize();

    db.each("SELECT rowid AS id, name, url FROM SUBMITTED_FILMS", function (err, row) {
      console.log(row.id + ": " + row.name + ", " + row.url);
    });
  });

  db.close();

  res.redirect('/');
});

/* GET random film. */
router.get('/random', function (req, res) {
  
});

module.exports = router;
