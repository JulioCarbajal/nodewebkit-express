var express = require('express');
var router = express.Router();
var Product = require('../models/products');

/* GET home page. */
router.get('/', function(req, res) {
  window.console.log("Mi log");
  res.render('index', { title: 'Express' });
});


router.get('/nueva', function(req, res) {
  window.console.log("Nueva log");
  res.render('index2', { title: 'Express' });
});

router.post('/new', function(req, res) {
  // Creamos una instancia del objeto Product con información desde el inicio
  // We create a Product object instance with information since beginning 
  var product =  new Product(req.param('product'));
  window.console.log(product.category);
  // Con esta funcion guardamos el producto en el modelo Product
  // This function save the prouducto object in Product model
  product.save(function (err, product) {
    if (err) {
      return console.error(err);
    }
    else{
      window.console.error("Guardado con exito");
      res.redirect('/products');
    }
  });
  
});

module.exports = router;
