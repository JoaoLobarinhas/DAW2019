var express = require('express');
var router = express.Router();
var Nobel = require('../controllers/nobels')

/* GET home page. */
router.get('/premios', function(req, res, next) {
  if(req.query.categoria!=null && req.query.ano !=null ){
    Nobel.listarPremiosCategoriaAno(req.query.categoria, req.query.ano)
      .then(dados=>res.jsonp(dados))
      .catch(erro=>res.status(500).jsonp(erro))
  }
  else if(req.query.categoria!=null){
    Nobel.listarPremiosCategoria(req.query.categoria)
      .then(dados=>res.jsonp(dados))
      .catch(erro=>res.status(500).jsonp(erro))
  } 
  else{
    Nobel.listarPremios()
      .then(dados=>res.jsonp(dados))
      .catch(erro=>res.status(500).jsonp(erro))
  }
});

router.get('/premios/:id', function(req, res, next) {
    Nobel.listarPremiosId(req.params.id)
      .then(dados=>res.jsonp(dados))
      .catch(erro=>res.status(500).jsonp(erro))
});

router.get('/categorias', function(req, res, next) {
  Nobel.listarCategorias()
    .then(dados=>res.jsonp(dados))
    .catch(erro=>res.status(500).jsonp(erro))
});

router.get('/laureados', function(req, res, next) {
  Nobel.listarLaureados()
    .then(dados=>res.jsonp(dados))
    .catch(erro=>res.status(500).jsonp(erro))
});

module.exports = router;
