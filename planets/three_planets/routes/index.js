var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


/* Страница Марса */
router.get('/mars', function(req, res, next) {
  res.send("<h1>Страница Марс</h1>")
});
/* Страница Земли */
router.get('/earth', function(req, res, next) {
  res.send("<h1>Страница Земля</h1>")
});
/* Страница Венеры */
router.get('/venera', function(req, res, next) {
  res.send("<h1>Страница Венера</h1>")
});

module.exports = router;