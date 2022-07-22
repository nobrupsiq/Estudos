// Escopo de função

// Variáveis declaradas dentro de funções não são acessadas fora das mesmas.

var carro = "Fusca";
function mostrarCarro() {
  console.log(carro);
}
mostrarCarro(); // Fusca no console
console.log(carro);

// Variável Global (Erro)

// Declarar variáveis sem a palavra chave var, const ou let, cria uma variável que pode ser acessada em qualquer escopo(global). isso é um erro.

function mostrarCarro() {
  carro = "Fusca";
  console.log(carro);
}

mostrarCarro(); // Fusca
console.log(carro); // Fusca
// 'use strict' impede isso.

// ESCOPO DE FUNÇÃO
// Variáveis declaradas no escopo pai da função, conseguem ser acessadas pelas funções.

var carro = "Fusca";

function mostrarCarro() {
  var frase = `Meu carro é um ${carro}`;
  console.log(frase);
}

mostrarCarro(); // Meu carro é um fusca
console.log(carro); // Fusca

// ESCOPO DE BLOCO

// Variáveis criadas com var, vazam o bloco. Por isso com a introdução do ES6 a melhor forma de declarmos uma variável é utilizando const e let, pois estas respeitam o escopo de bloco.

if (true) {
  let mes = "Maio";
  console.log(mes);
}

// Var Vaza o bloco mesmo com a condição falsa, a variável ainda será declarada utilizando hoisting e o valor ficará como undefined.

if (false) {
  var ano = 1995;
  console.log(ano);
}
console.log(ano);

// {} CRIA UM BLOCO
// Chaves {} criam um escopo de bloco, não confundir com a criação de objetos = {}

{
  var moto = "CB";
  const cidade = "Rio de Janeiro";
}
console.log(moto);
// console.log(cidade);

//FOR LOOP
// Ao utilizar var dentro de um forloop, que é um bloco, o valor do variável utilizada irá vazar e existir fora do loop.

for (let i = 0; i < 10; i++) {
  console.log(`Número ${i}`);
}
// console.log(i); //10

// CONST
// Mantém o escopo no bloco, impede a redeclaração e impede a modificação do valor da variável, evitando bugs no código.

const nome = "Bruno";
// nome = "Juber"; // ERRO tentou modificar o valor
// const semana; // ERRO declarou sem valor

const data = {
  dia: 28,
  mes: "Dezembro",
  ano: 2008,
};

data.dia = 29; // Funciona
// data = "Janeiro"; // ERRO

// LET
// Mantém o escopo no bloco, impede a redeclaração, mas permite a modificação do valor da variável.

let natal;
natal = 25;
natal++;
natal = 50;
console.log(natal); //26

// let ano = 2020; // erro, redeclarou a variável
