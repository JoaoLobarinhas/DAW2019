var express = require('express');
var router = express.Router();
var Obras = require('../controllers/obras')

/* GET home page. */
router.get('/obras', function(req, res, next) {
  if(req.query.ano!=null){
    Obras.listarAno(req.query.ano)
      .then(dados=>res.jsonp(dados))
      .catch(erro=>res.status(500).jsonp(erro))
  }
  else if(req.query.periodo!=null){
    Obras.listarPeriodo(req.query.periodo)
      .then(dados=>res.jsonp(dados))
      .catch(erro=>res.status(500).jsonp(erro))
  }
  else if(req.query.compositor!=null && req.query.duracao!=null){
    Obras.listarCompositorDuracao(req.query.compositor,req.query.duracao)
      .then(dados=>res.jsonp(dados))
      .catch(erro=>res.status(500).jsonp(erro))
  }
  else{
    Obras.listar()
      .then(dados=>res.jsonp(dados))
      .catch(erro=>res.status(500).jsonp(erro))
  }
});

router.get("/compositor", function(req, res, next){
  Obras.listarCompositores()
    .then(dados=>res.jsonp(dados))
    .catch(erro=>res.status(500).jsonp(erro))
})

router.get("/periodo", function(req, res, next){
  Obras.listarCompositores()
    .then(dados=>res.jsonp(dados))
    .catch(erro=>res.status(500).jsonp(erro))
})

router.get('/obras/:id', function(req, res, next) {
  Obras.listarId(req.params.id)
      .then(dados=>res.jsonp(dados))
      .catch(erro=>res.status(500).jsonp(erro))
});



module.exports = router;
