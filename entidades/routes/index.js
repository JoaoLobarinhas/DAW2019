var express = require('express');
var router = express.Router();
var axios = require('axios')

let url = "http://clav-api.dglab.gov.pt/api/entidades"
let apiKey = "?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1NzM0ODgwMDgsImV4cCI6MTU3NjA4MDAwOH0.UD0UdMrzKcWDop8HlwqdeOuK_ZzZxHvOMOP2DMkIjUQ"

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
        let tipos = data.data
        axios.get(url+"/"+req.params.id+"/intervencao/dono"+apiKey)
          .then(data=>{
            let dono = data.data
            axios.get(url+"/"+req.params.id+"/intervencao/participante"+apiKey)
              .then(data=>{
                let participante = data.data
                res.render('detail',{m:datas, tipo:tipos, dono:dono, part:participante})
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


module.exports = router;
