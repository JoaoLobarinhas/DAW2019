var Obra = require('../models/obra')

module.exports.listar=()=>{
    return Obra.find().exec()
}

module.exports.listarAno=ano=>{
    return Obra.find({anoCriacao:ano}).exec()
}

//fix
module.exports.listarCompositorDuracao=(comp,duracao)=>{
    return Obra.find({compositor:comp, duracao: { $gt: duracao }}).exec()
}

module.exports.listarPeriodo=per=>{
    return Obra.find({periodo:per}).exec()
}

module.exports.listarId=id=>{
    return Obra.find({_id:id}).exec()
}

module.exports.listarCompositores=()=>{
    return Obra.find({},{"_id":0 ,"compositor":1}).distinct("compositor").exec()
}

module.exports.listarPeriodos=()=>{
    return Obra.find({},{"_id":0 ,"periodo":1}).distinct("periodo").exec()
}