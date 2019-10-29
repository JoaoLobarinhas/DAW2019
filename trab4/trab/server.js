var http = require('http')
var url = require('url')
var fs = require('fs')

const porta = 7777

http.createServer((req,res)=>{
    var partes = req.url.split('/')
    var pag = partes[partes.length-1] 

    if(pag>0 && pag<123){
        fs.readFile(`xmls/arq${pag}.xml`, function (err, data) {
            if(err){
                res.writeHead(200, { 'Content-Type': 'text/html' })
                res.write(`Error on file ${pag}`)
                console.log(err)
                res.end()
            }
            else{
                res.writeHead(200, { 'Content-Type': 'text/xml' })
                res.write(data)
                res.end()
            }
        })
    }
    else if(pag.match(/arq.xsl/)){
        fs.readFile('arq.xsl',function(err,data){
            res.writeHead(200,{'Content-Type':'text/xsl'})
            res.write(data);
            res.end();
        })
    }
    else{
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write(`File not found: ${pag}`)
        res.end
    }
}).listen(porta)

console.log(`Servidor a escuta na ${porta}`)