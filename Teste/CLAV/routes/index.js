var express = require('express');
var router = express.Router();
var axios = require('axios')

let url="http://clav-api.dglab.gov.pt/api/entidades"
let urlT="http://clav-api.dglab.gov.pt/api/tipologias"
let apiKey = "?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1Nzg4NjAwNTQsImV4cCI6MTU4MTQ1MjA1NH0.HIlH4_Ao6504qaLhhbZ2_OtDzaZaG5FeYy-Yc2d9lwQ"

/* GET home page. */
router.get('/', function(req, res, next) {
  axios.get(url+apiKey)
  .then(data=>{
    res.render('index', {data:data.data});
  })
  .catch(erro=>{
    res.render('error',{error:erro})
  })
});

router.get('/:id', function(req, res, next) {
  axios.get(url+"/"+req.params.id+apiKey)
  .then(data=>{
    let datas = data.data
    axios.get(url+"/"+req.params.id+"/tipologias"+apiKey)
      .then(data=>{
        let tipologias = data.data
        axios.get(url+"/"+req.params.id+"/intervencao/dono"+apiKey)
          .then(data=>{
            let procD = data.data
            axios.get(url+"/"+req.params.id+"/intervencao/participante"+apiKey)
              .then(data=>{
                let procT = data.data
                res.render('detail',{m:datas, tipologias:tipologias, procD:procD, procT:procT})
              })
              .catch(erro=>{
                res.render('error',{error:erro})
              })
          })
          .catch(erro=>{
            res.render('error',{error:erro})
          })
      })
      .catch(erro=>{
        res.render('error',{error:erro})
      })
  })
  .catch(erro=>{
    res.render('error',{error:erro})
  })
});

router.get('/tipologias/:id', function(req, res, next) {
  console.log(urlT+"/"+req.params.id+apiKey)
  res.redirect(urlT+"/"+req.params.id+apiKey)
});

module.exports = router;
