//Function
function clicou(){
  document.getElementById("agradecimento").innerHTML = "Obrigado por clicar";
  // console.log(document.getElementById("agradecimento"));
  // //alert("Obrigado por clicar");
}
function redirecionar(){
  //Abre uma outra janela/aba - window.open
  window.open("https://www.recodepro.org.br/");
  //Abre na mesma janela/aba que clicou - window.location.href
  window.location.href = "https://www.recodepro.org.br/";
}
 
function trocar(elemento){
  // document.getElementById("mousemove").innerHTML = "Passou o mouse e o trocou o texto";
  elemento.innerHTML = "Obrigado por passar o mouse"
  // alert("trocar texto");
}

function voltar(elemento){
  // document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
  elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
  alert("Página carregada")
};

function funcaoChange(elemento){
  console.log(elemento.value)
}


// // ALERT
// alert("Meu primeiro js!");

// //Variaveis
// var nome = "Suhailah Alves";
// var idade = 30;
// var idade2 = 6;
// var frase = "Bora aprender esse joça";
// var n1 = 10;
// var n2 = 3;

// //variavel foi concatenada utilizando o +
// alert("Bem vindo " + nome  + " tem: " + idade + " anos ");

// //A Soma das variáveis 
// alert(idade + idade2);

// //Console => Objeto com diversos métodos
// //Log => O método log(), existe essencialmente para permitir o envio de dados para a consola de depuração do navegador. 
// console.log(nome);

// //Soma das idades
// console.log(idade+idade2);

// //Comando REPLACE => Serve para substituir uma palavra, pela outra
// console.log(frase.replace("joça" , "JavaScript"));
// alert(frase.replace("joça" , "JavaScript"));

// //Comando toUpperCase => Serve para que as letras fiquem em  maiúsculo
// console.log(frase.toUpperCase());
// alert(frase.toUpperCase());

// //Comando toUpperCase => Serve para que as letras fiquem em  minúsculo
// console.log(frase.toLowerCase());
// alert(frase.toLowerCase());

// console.log(n1*n2);

//Array
// var lista = ["maça", "pêra", "laranja"];
// console.log(lista);

// //Imprime só um item da lista
// console.log(lista[1]);

// //Inserir uma fruta na lista
// lista.push("uva");
// console.log(lista);

// //O método pop(), remove o último elemento 
// lista.pop();
// console.log(lista);

// //O método shift(), remove o primeiro elemento
// lista.shift();
// console.log(lista);

// // O método length, retorna o tamanho/quantidade
// console.log(lista.length);

// //O método reverse, trás o valores ao contrário
// console.log(lista.reverse());

// //Imprime em String
// console.log(lista);
// console.log(lista.toString());
// console.log(lista.join(" | "))

// //Dicionario
// var fruta = {nome: "maça", cor:"vermelha"};
// console.log(fruta.nome);

// //Lista de Dicionário
// var frutas = [{nome:"maça" , cor:"vermelha"}, {nome:"uva", cor:"roxa"}];
// console.log(frutas[1]);


//Condicionais

//O Comando prompt => faz uma pergunta.
// var idade = prompt("Qual é a sua idade?")
// if(idade >= 18) {
//   alert("Maior de idade");
// }else{
//   alert("Menor de idade");
// }

//Laços de repetição

//Estrutura de repetição WHILE
// var count = 0;
// while (count <= 5){
//   console.log(count);
//   count = count + 1;
//   //ou count = count++;
// };

//Estrutura de repetição FOR
// var count;
// for(count=0; count <= 5; count++){
//   console.log(count);
// };

//Date
// var d = new Date();
// alert(d.getMonth()+1);
// alert(d.getHours());
// alert(d.getFullYear());
  

// console.log(soma(10,30));

// function validaIdade(idade){
//   var validar;
//   if (idade >= 18){
//     validar = true
//   }else{
//     validar = false
//   } 
//   return validar; 
// }
// var idade = prompt("Qual a sua idade: ");
// console.log(validaIdade(idade));

