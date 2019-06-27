var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Bienvenidos RocketLabs' , detalle : 'Sitio Implementado por Angeles Cifuentes'});
});

module.exports = router;
