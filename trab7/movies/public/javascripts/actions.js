function deleteMovie(id){
    axios.delete('/api/list/'+id)
        .then(response=>window.location.assign('/'))
        .catch(erro=>console.log(erro))
}

function updateMovie(id){
    title = ""+document.getElementById('title').value
    year = document.getElementById('year').value
    cast = ""+document.getElementById('cast').value
    genres = ""+document.getElementById('genres').values
    cast = cast.replace(/\s/g, '');
    genres = genres.replace(/\s/g, '');
    cast = cast.split(",");
    genres = genres.split(",")

    content = {title,year,genres,cast}

    axios.put('/api/updateMovie/'+id,content)
        .then(response=>window.location.assign('/'+id))
        .catch(erro=>console.log(erro))
}

