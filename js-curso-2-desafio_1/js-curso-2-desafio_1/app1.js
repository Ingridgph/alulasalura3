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

function atividade3(){
//1-Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, 
//a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.
function IMC(altura,peso){
    return (peso/(altura*altura));
}
let resultadoImc = IMC(1.75,80);
console.log(resultadoImc);


//2-Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.
function calcularFatorial(numero) {
    if (numero === 0 || numero === 1) {
      return 1;
    }
    let fatorial = 1;
    for (let i = 2; i <= numero; i++) {
      fatorial *= i;
    }
    return fatorial;
  }
  // Exemplo de uso
  let numero = 5;
  let resultado = calcularFatorial(numero);
  console.log(`O fatorial de ${numero} é ${resultado}`);


//3-Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna 
//o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.
function converteDolar(dolar){
    let real = 0;
    real = dolar*4.8;
    console.log(`O valor $${dolar} dólar, em reais é igual a R$${real}`);
}
converteDolar(1);


//4-Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, 
//utilizando altura e largura que serão dadas como parâmetro.
function areaPerimetro(h,l){
    let area=h*l;
    let perimetro=h+h+l+l;
    console.log(`A área da sua sala retangular é igual ${area}, e o seu perimetro é ${perimetro}. Dada sua altura ${h}, e sua largura ${l}.`)
}
areaPerimetro(1,2);

//5-Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio 
//que será fornecido como parâmetro. Considere Pi = 3,14.
function areaCircular(raio){
    let area=3.14*(raio*raio);
    let perimetro =2*3.14*raio;
    console.log(`A área da sua sala circular é igual ${area}, e o seu perimetro é ${perimetro}.`)
}
areaCircular(1);

//6-Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.
function tabuada(numero){
    let i =1;
    while(i<11){
        let resultado =numero *i;
        console.log(`${numero}*${i}=${resultado}`);
        i++;
    }
    
}
tabuada(1);
}

function atividade4(){
//1-Crie uma lista vazia, com o nome listaGenerica.
let listaGenerica=[];

//2-Crie uma lista de linguagens de programação chamada linguagensDeProgramacao com os seguintes elementos: 
//'JavaScript','C','C++', 'Kotlin' e 'Python'.
let linguagensDeProgramacao=['JavaScript','C','C++', 'Kotlin','Python'];

//3-Adicione à lista linguagensDeProgramacao os 
//seguintes elementos: 'Java', 'Ruby' e 'GoLang'.
linguagensDeProgramacao.push('Java', 'Ruby','GoLang');
console.log(linguagensDeProgramacao);

//4-Crie uma lista com 3 nomes 
//e exiba no console apenas o primeiro elemento.
let listaDeTresNomes=['Ingrid','Luiz','Hugo'];
console.log(listaDeTresNomes[0]);

//5- exiba no console apenas o segundo elemento.
console.log(listaDeTresNomes[1]);

//6-exiba no console apenas o último elemento.
console.log(listaDeTresNomes[2]);
}

