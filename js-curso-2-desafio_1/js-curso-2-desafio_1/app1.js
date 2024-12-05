function atividade1(){
//2-Altere o conteúdo da tag h1 com document.querySelector e atribua o seguinte texto: Hora do Desafio.
let titulo = document.querySelector('h1')
//dentro do  HTML
titulo.innerHTML = 'Hora do Desafio';


//3-Crie uma função que exiba no console a mensagem O botão foi clicado sempre que o botão Console for pressionado.
function botaoConsole(){
    console.log('O botão Console foi clicado');
}

//4-Crie uma função que exiba um alerta com a mensagem: Eu amo JS, sempre que o botão Alerta for pressionado.
function euamojs(){
    alert('Eu amo JS');
}

//5-Crie uma função que é executada quando o botão prompt é clicado, perguntando o nome de uma cidade do Brasil. 
//Em seguida, exiba um alerta com a mensagem concatenando a resposta com o texto: Estive em {cidade} e lembrei de você.
function botaoPrompt(){
let nomeUsuario = prompt('Qual seu nome?');
let cidadeUsuario = prompt('Qual a cidade em que vc está?');
alert(`Eu estive na cidade ${cidadeUsuario} e lembrei de você`);
}

//6-Ao clicar no botão soma, peça 2 números inteiros e exiba o resultado da soma em um alerta.
function botaoSoma(){
    let numero1 = prompt('Insira um número:');
    let numero2 = prompt('Insira um segundo número:');
    let resultadoSoma = numero1+numero2;
    alert(`O resultado da soma é de ${resultadoSoma}`);
}
}


function atividade2(){
//1-Criar uma função que exibe "Olá, mundo!" no console.
function exibirOla(){
    console.log('Olá mundo');
}
exibirOla();

//2-Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
function exibirNome(nome){
    console.log(`Olá, ${nome}`)
}
exibirNome('Ingrid');

//3-Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
function calcularDobro(numero) {
    return numero * 2;
  }
  
  let resultadoDobro = calcularDobro(5);
  console.log(resultadoDobro);

//4-Criar uma função que recebe três números como parâmetros e retorna a média deles.
function calcularMedia(a, b, c) {
    return (a + b + c) / 3;
  }
  
  let media = calcularMedia(4, 7, 10);
  console.log(media);

//5-Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
//function retornaMaior(num1,num2){
    function encontrarMaior(a, b) {
        return a > b ? a : b;
      }
      
      let maiorNumero = encontrarMaior(15, 9);
      console.log(maiorNumero);

//6-Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo
function quadrado(numero) {
    return numero * numero;
  }
  
  let resultado = quadrado(2);
  console.log(resultado); 
}

