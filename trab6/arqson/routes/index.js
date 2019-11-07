var express = require('express');
var router = express.Router();
var jsonfile = require('jsonfile')

var myBD = __dirname+"/../arq-son-EVO.json"
console.log(myBD)
var init=true
var id=0

/* GET home page. */
router.get('/', function(req, res, next) {
  jsonfile.readFile(myBD,(erro, musicas)=>{
    if(erro){
      res.render('error',{error:erro})
    }
    else{
      insertIDs(musicas)
      res.render('index', {lista:musicas });
    }
  })
});

router.get('/registo', function(req, res, next){
  if(!init){
    res.render('registo',{id:id+1})
  }
  else if (init){
    jsonfile.readFile(myBD,(erro, musicas)=>{
      if(erro){
        res.render('error',{error:erro})
      }
      else{
        insertIDs(musicas)
        res.render('registo',{id:id+1})
      }
    })
  }
  else{
    res.render('error',{error:"Erro ao ler os dados"})
  }
})

router.get('/listar/:id', function(req, res, next){
  let id = req.params.id
  jsonfile.readFile(myBD,(erro, musicas)=>{
    if(erro){
      res.render('error',{error:erro})
    }
    else{
      insertIDs(musicas)
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

router.get('/editar/:id', function(req, res, next){
  let id = req.params.id
  jsonfile.readFile(myBD,(erro, musicas)=>{
    if(erro){
      res.render('error',{error:erro})
    }
    else{
      insertIDs(musicas)
      let musica = musicas.find(m => m.id == id)
      if(musica != null){
        res.render('editar',{musica:musica})
      }
      else{
        console.log("Erro ao encontrar o id")
      }
    }
  })
})

router.put('/editar/:id', function(req,res,next){
  let id = req.params.id
  jsonfile.readFile(myBD,(erro, musicas)=>{
    if(erro){
      res.render('error',{error:erro})
    }
    else{
      let index = musicas.findIndex(m => m.id == id)
      if(index>-1){
          musicas.splice(index,1)
          musicas.push(req.body)
          jsonfile.writeFile(myBD, musicas, erro => {
            if(erro) console.log(erro)
            else{
              res.render('index', {lista:musicas });
              console.log('Registo gravado com sucesso.')
            } 
          })
      }
      else{
        console.log("Erro ao encontrar o id")
      }
    }
  })
})

router.post('/registo', function(req, res, next){
  jsonfile.readFile(myBD,(erro, musicas)=>{
    if(erro){
      res.render('error',{error:erro})
    }
    else{
      musicas.push(req.body)
      jsonfile.writeFile(myBD, musicas, erro => {
        if(erro) console.log(erro)
        else{
          id++
          res.render('registo',{id:id+1})
          console.log('Registo gravado com sucesso.')
        } 
      })
    }
  })
})

router.delete('/apagar/:id', function(req,res,next){
  let id = req.params.id
  jsonfile.readFile(myBD,(erro, musicas)=>{
    if(erro){
      res.render('error',{error:erro})
    }
    else{
      let index = musicas.findIndex(m => m.id == id)
      if(index>-1){
          musicas.splice(index,1)
          jsonfile.writeFile(myBD, musicas, erro => {
            if(erro) console.log(erro)
            else{
              res.render('index', {lista:musicas });
              console.log('Registo gravado com sucesso.')
            } 
          })
      }
      else{
        console.log("Erro ao encontrar o id")
      }
    }
  })
})

function insertIDs(musicas){
  if(init){
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
}



module.exports = router;
