var Movie = require('../models/movie')

module.exports.listar = () =>{
    return Movie
        .find()
        .sort({year:-1})
        .exec()
}

module.exports.consultar = id =>{
    return Movie
        .findOne({_id:id})
        .exec()
}

module.exports.insert = movie =>{
    var movies = new Movie(movie)
    return movies.save()
}

module.exports.delete = id =>{
    return Movie
        .deleteOne({_id:id})
        .exec()
}

module.exports.update = (id, data) =>{
    return Movie
        .findOneAndUpdate({ _id: id }, data)
        .exec();
}

