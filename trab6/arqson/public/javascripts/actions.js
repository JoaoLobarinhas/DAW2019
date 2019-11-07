const jsonfile = require('jsonfile');

var myBD = __dirname+"/../arq-son-EVO.json"
var id=0

function increment_ids(){
    jsonfile.readFile(myBD,(erro,data)=>{
        if(erro){
            console.log("actions/increment_ids()")
            console.log("Erro a ler o ficheiro: "+erro)
        }
        else{
            data.array.forEach(element => {
                element["id"]=id
                id++
            });
            jsonfile.writeFile(myBD,data,erro=>{
                if(erro){
                    console.log("Erro a gravar o json: "+erro)
                }
                else{
                    console.log("Gravou o ficheiro")
                }
            })
        }
    })
}
increment_ids()

