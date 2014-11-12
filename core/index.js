var config = require('../config');

var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database(config.database);

var request = require('request');

function getList(req, res, next) {
  db.all("SELECT * FROM SUBMITTED_FILMS", function (err, rows) {
    console.log(rows);

    req.list = rows;
    next();
  });
};

function submitFilm(req, res, next) {
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

  next();
};

function getTop250List(req, res, next) {
  request('http://api.douban.com/v2/movie/top250', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      req.top250List = body;
    };
    next();
  });
}

module.exports = {
  getList: getList,
  submitFilm: submitFilm,
  getTop250List: getTop250List
};