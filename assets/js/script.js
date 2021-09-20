/*
Case Sensitive 

Por Tag: getElementByTagName
Por Id: getElementById
Por Classe: getElementsByClassName
Por Nome: getElementsByName
Por Seletor: querySelector
*/

let nome = window.document.getElementById('nome')
let email = document.querySelector ('#email')
let assunto = document.querySelector('#assunto')
let nomeOK = false
let emailOK = false
let assuntoOK = false
let mapa = document.querySelector('#mapa')

nome.style.width = "100%"
email.style.width = "100%"


function validaNome() {
    let txt = document.querySelector('#txtNome')
    if(nome.value.length <= 2){
        txt.innerHTML = 'Nome Inválido'
        txt.style.color = 'red'
    }
    else{
        txt.innerHTML = ''
        nomeOK = true
    }

}

function validaEmail() {
    let txtemail = document.querySelector ('#txtEmail')
    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
    txtemail.innerHTML = 'E-mail inválido'
    txtemail.style.color ='red'
}
else {
    txtemail.innerHTML = ''
    emailOK = true
}
}

function validaAssunto() {
    let txtAssunto = document.querySelector ('#txtAssunto')

    if(assunto.value.length > 100){
    txtAssunto.innerHTML = 'O texto é muito grande'
    txtAssunto.style.color = 'red'
    txtAssunto.style.display = 'block'
}

else {
    txtAssunto.style.display = 'none'
    assuntoOK = true

}
}

function enviar (){
    if(nomeOK == true && emailOK==true && assuntoOK==true)
    {
        window.alert ('Sua mensagem foi enviada!')
    }

    else{
        window.alert ('Preencha o formulário corretamente')
    }
}

function mapaZoom() {
    mapa.style.width = '500px'
    mapa.style.height = '350px'

}

function mapaNormal() {
    mapa.style.width = '400px'
    mapa.style.height = '250px'

}