function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.toLocaleTimeString()
    //var min = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} Horas.`
    if (hora >= 0 && hora < 12) {
    //Foto de Dia
        img.src = 'imagens/fotodia.jpg'
        
    }else if (hora >= 12 && hora <= 18) {
    //Foto de Tarde
        img.src = 'imagens/fototarde.jpg'
        document.body.style.background = 'rgb(191, 113, 38)'
    }else {
    //Foto de Noite
        img.src = 'imagens/fotonoite.jpg'
        document.body.style.background = 'rgb(44, 107, 125)'
    }
}