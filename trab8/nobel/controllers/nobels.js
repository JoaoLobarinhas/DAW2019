var Nobel = require('../models/nobel')
var mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId


module.exports.listar = () =>{
    return Nobel
        .find({},{_id:1, year:1, category:1})
        .exec()
}

module.exports.listarPremiosId = id =>{
    return Nobel
        .find({_id:ObjectId(id)})
        .exec()
}

module.exports.listarCategorias = () =>{
    return Nobel
        .find({},{"_id":0, "category":1}).distinct("category")
        .exec()
}

module.exports.listarPremiosCategoria = category =>{
    return Nobel
        .find({category:category})
        .exec()
}

module.exports.listarPremiosCategoriaAno = (category,year) =>{
    return Nobel
        .find({category:category, year:{$gt: year}})
        .exec()
}

module.exports.listarLaureados = category =>{
    return Nobel.aggregate([
        {
          $unwind: {
            'path': '$laureates'
          }
        }, {
          $group: {
            _id: '$laureates.id', 
            firstname: {
              $first: '$laureates.firstname'
            }, 
            surname: {
              $first: '$laureates.surname'
            }, 
            nobel: {
              $push: {
                year: '$year', 
                category: '$category'
              }
            }
          }
        }, {
          $project: {
            firstname: 1, 
            surname: 1, 
            nobel: 1, 
            _id: 0
          }
        }, {
          $sort: {
            firstname: 1, 
            surname: 1
          }
        }
      ]).exec()
}



