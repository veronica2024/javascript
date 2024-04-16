function verificar () {
    
    var data = new Date()
    var hora =  1 // data.gethours()//
   
    msg.innerHTML = `agora são ${hora} horas`

if (hora >= 0 && hora < 12){
    //bom dia//
    img.src='foto_dia.png'
    document.body.style.background = '#e9cfaa'
    document.getElementsByClassName('texto')[0].style.color = 'black'
    document.getElementsByClassName('texto')[1].style.color = 'black'
}

 else if (hora >= 12 && hora <= 18){
    //boa tarde//
    img.src='foto_tarde.png'
    document.body.style.background = '#e7bf6a'
} else {
    //boa noite//
    img.src='foto_noite.png'
    document.body.style.background = '#012035'
}
}