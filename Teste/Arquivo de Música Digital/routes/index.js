var express = require('express');
var router = express.Router();
var Arquivo = require('../controllers/arquivoMusicals')
/* GET home page. */
router.get('/obras', function(req, res, next) {
  if(req.query.compositor){
    Arquivo.listarCompositor(req.query.compositor)
    .then(dados=>res.jsonp(dados))
    .catch(erro=>res.status(500).jsonp(erro))
  }
  else if(req.query.instrumento){
    Arquivo.listarInstrumento(req.query.instrumento)
    .then(dados=>res.jsonp(dados))
    .catch(erro=>res.status(500).jsonp(erro))
  }
  else{
    Arquivo.listar()
    .then(dados=>res.jsonp(dados))
    .catch(erro=>res.status(500).jsonp(erro))
  } 
});

router.get('/obras/:id', function(req, res, next) {
  Arquivo.listarId(req.params.id)
      .then(dados=>res.jsonp(dados))
      .catch(erro=>res.status(500).jsonp(erro))
});

router.get('/tipo', function(req, res, next) {
  Arquivo.listarTipos()
      .then(dados=>res.jsonp(dados))
      .catch(erro=>res.status(500).jsonp(erro))
});

router.get('/obrasQuant', function(req, res, next) {
  Arquivo.listarPartitura()
      .then(dados=>res.jsonp(dados))
      .catch(erro=>res.status(500).jsonp(erro))
});

module.exports = router;
