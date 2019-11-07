function editar(id){
    musica = {
        id: document.getElementById('id').value,
        prov: document.getElementById('prov').value,
        local: document.getElementById('local').value,
        tit: document.getElementById('tit').value,
        musico: document.getElementById('musico').value,
        duracao: document.getElementById('duracao').value
    }

    axios.put('/editar/' + id, musica)
        .then(response => window.location.assign('/'))
        .catch(error => console.log(error))
}

function apagar(id){
    axios.delete('/apagar/' + id)
        .then(response => window.location.assign('/'))
        .catch(error => console.log(error))
}




