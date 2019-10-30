var http = require('http')
var url = require('url')
var pug = require('pug')
var fs = require('fs')
var jsonfile = require('jsonfile')
 
var {parse} = require('querystring')

const port = 5005
var myBD = "tarefas.json"

http.createServer((req,res)=>{
    var purl = url.parse(req.url,true)
    console.log(req.method + ' ' + purl.pathname)
    if(req.method=='GET'){
        if(purl.pathname == '/'){
            loadIndex(res)
        }
        else if( purl.pathname == '/w3.css'){
            res.writeHead(200,{'Content-Type':'text/css'})
            fs.readFile('css/w3.css', (erro,dados)=>{
                if(!erro){
                    res.write(dados)
                }
                else{
                    res.write("<p>Erro "+ erro +"</p>")
                }
                res.end()
            })
            
        }
    }
    if(req.method=='POST'){
        if(purl.pathname=='/registo'){
            recuperaInfo(req, resultado=>{
                jsonfile.readFile(myBD,(erro, data)=>{
                    if(!erro){
                        data.push(resultado)
                        jsonfile.writeFile(myBD,data,erro=>{
                            if(erro){
                                console.log(erro)
                            }
                            else{
                                console.log("Registo gravado com sucesso...")
                                loadIndex(res)
                            }
                        })
                    }
                    else{
                        console.log("JSON read file: "+erro)
                    }
                })
            })
        }
    }
}).listen(port)

function recuperaInfo(request,callback){
    console.log(1)
    console.log(request.headers['content-type'])
    if(request.headers['content-type'] == 'application/x-www-form-urlencoded'){
        console.log(2)
        let body = '' 
        request.on('data',bloco=>{
            body += bloco.toString()
        })
        request.on('end', ()=>{
            callback(parse(body))
        })
    }
}

function loadIndex(res){
    jsonfile.readFile(myBD, (erro,data)=>{
        res.writeHead(200,{
            'Content-Type': "text/html; charset=utf-8"
        })
        if(!erro){
            res.write(pug.renderFile('index.pug',{lista:data}))
        }
        else{
            res.write(pug.renderFile('erro.pug'),{e:"Erro a listar"})
        }
        res.end()
    })
}