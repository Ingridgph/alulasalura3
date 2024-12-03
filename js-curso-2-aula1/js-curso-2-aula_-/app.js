//puxando o h1 do index
let titulo = document.querySelector('h1')
//dentro do  HTML
titulo.innerHTML = 'Jogo do número secreto';

let paragrafo = document.querySelector('p');
paragrafo.innerHTML = 'Escolha um número entre 1 a 10';

function verificarChute(){
    console.log('O botão chutar foi clicado');
}