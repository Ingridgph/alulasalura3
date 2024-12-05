//IMPORTANTE!
let numeroSecreto = 2;
let tentativas =1;

function exibirTextoNaTela(tag,texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function mensagemIncial(){
exibirTextoNaTela('h1','Se divirta');
exibirTextoNaTela('p','Escolha um número entre 1 e 10.');
}
mensagemIncial();
function verificarChute(){
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto){
        exibirTextoNaTela('h1',"Acertou!");
        let palavraTentativa = tentativas >1? 'tentativas': 'tentativa';
        let mensagemTentativas = `Você acertou o número secreto com o total de ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela('p',mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(chute>numeroSecreto){
            exibirTextoNaTela('h1','Quase lá!');
            exibirTextoNaTela('p','O numero secreto é menor');
        }
        else if(chute<numeroSecreto){
            exibirTextoNaTela('h1','Quase lá!');
            exibirTextoNaTela('p','O numero secreto é maior');
        }
        tentativas++;
        limparCampo();
        
    }

}

function gerarNumeroAleatorio(){
   return parseInt(Math.random() * 10 + 1);
}
function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto= gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    mensagemIncial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}