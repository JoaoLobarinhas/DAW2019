var Arquivo = require("../models/arquivoMusical")

module.exports.listar=()=>{
    return Arquivo.find({},{"titulo":1,"tipo":1,"compositor":1}).exec()
}

module.exports.listarId=(id)=>{
    return Arquivo.find({_id:id}).exec()
}

module.exports.listarTipos=()=>{
    return Arquivo.find({},{_id:0,"tipo":1}).distinct("tipo").exec()
}

module.exports.listarCompositor=(compositor)=>{
    return Arquivo.find({"compositor":compositor}).exec()
}

module.exports.listarInstrumento=(instrumento)=>{
    return Arquivo.find({"instrumentos.designacao":instrumento}).exec()
}

module.exports.listarPartitura=()=>{
    return Arquivo.aggregate([ {$project:{_id:1,titulo:1, partitura:{ $cond: { if: { $isArray: "$instrumentos" }, then: { $size: "$instrumentos" }, else: "NA"}}} }]).exec()
}

