var express = require('express');
var router = express.Router();
var axios = require('axios')


/* GET home page. */
router.get('/', function(req, res, next) {
  axios.get('http://localhost:3000/api/list')
    .then(data=>{
      res.render('listar', {movies:data.data});
    })
    .catch(erro=>{
      res.render('error',{error:erro})
    })
});

router.get("/insertMovie", function(req,res,next){
  res.render('insertMovie')
})

router.post("/insertMovie", function(req,res,next){
  cast = ""+req.body.cast
  genres = ""+req.body.genres
  cast = cast.replace(/\s/g, '');
  genres = genres.replace(/\s/g, '');
  req.body.cast = cast.split(",");
  req.body.genres = genres.split(",")
  axios.post('http://localhost:3000/api/insertMovie', req.body)
    .then(dados=>{
      res.redirect('/')
    })
    .catch(erro=>{
      res.render('error',{error:erro})
    })
})

router.get("/:id",function(req,res,next){
  axios.get('http://localhost:3000/api/list/'+req.params.id)
    .then(data=>
      res.render('listar_id', {m:data.data}))
    .catch(erro=>{
      res.render('error',{error:erro})
    })
})

router.get("/update/:id",function(req,res,next){
  axios.get('http://localhost:3000/api/list/'+req.params.id)
    .then(data=>
      res.render('update', {m:data.data}))
    .catch(erro=>{
      res.render('error',{error:erro})
    })
})



module.exports = router;
