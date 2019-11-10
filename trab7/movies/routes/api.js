const express = require('express');
const router = express.Router();
var Movies = require('../controllers/movies')

router.get('/list', function(req,res,next){
    Movies.listar()
        .then(dados=>res.jsonp(dados))
        .catch(erro=>res.status(500).jsonp(erro))
})

router.get('/list/:id', function(req,res,next){
    Movies.consultar(req.params.id)
        .then(dados=>res.jsonp(dados))
        .catch(erro=>res.status(500).jsonp(erro))
})

router.post('/insertMovie', function(req,res,next){
    Movies.insert(req.body)
        .then(dados=>res.jsonp(dados))
        .catch(erro=>res.status(500).jsonp(erro))
})

router.delete('/list/:id', function(req,res,next){
    Movies.delete(req.params.id)
        .then(dados=>res.jsonp(dados))
        .catch(erro=>res.status(500).jsonp(erro))
})

router.put('/updateMovie/:id', function(req,res,next){
    console.log(req.body)
    Movies.update(req.params.id, req.body)
        .then(dados=>res.jsonp(dados))
        .catch(erro=>res.status(500).jsonp(erro))
})

module.exports = router;