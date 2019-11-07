var express = require('express');
var router = express.Router();
var jsonfile = require('jsonfile')

var myBD = __dirname+"/../arq-son-EVO.json"
console.log(myBD)
var init=true

/* GET home page. */
router.get('/', function(req, res, next) {
  jsonfile.readFile(myBD,(erro, musicas)=>{
    if(erro){
      res.render('error',{error:erro})
    }
    else{
      if(init){
        console.log("Estou no init")
        let id=0
        musicas.forEach(element => {
          element["id"]=id
          id++
        });
        jsonfile.writeFile(myBD,musicas,erro=>{
          if(erro){
              console.log("Erro a gravar o json: "+erro)
          }
          else{
              console.log("Gravou o ficheiro")
              init=false
          }
        })
      }
      res.render('index', {lista:musicas });
    }
  })
});

router.get('/:id', function(req, res, next){
  let id = req.params.id
  jsonfile.readFile(myBD,(erro,musicas)=>{
    if(erro){
      res.render('error',{error:erro})
    }
    else{
      let musica = musicas.find(m => m.id == id)
      if(musica != null){
        res.render('detalhe',{musica:musica})
      }
      else{
        console.log("Erro ao encontrar o id")
      }
    }
  })
})

module.exports = router;
