var pessoa = {
  nome: "Bruno",
  idade: 27,
  profissao: "Desenvolvedor",
  possuiFaculdade: false,
};
console.log(pessoa.nome);
console.log(pessoa.possuiFaculdade);

// MÉTODOS

var quadrado = {
  lados: 4,
  area: function (lado) {
    return lado * lado;
  },
  perimetro: function (lado) {
    return this.lados * lado;
  },
};

quadrado.lados;
quadrado.area(5);
quadrado.perimetro(5);

// ABREVIAÇÃO ES6

// var quadrado = {
//   lados: 4,
//   area(lado) {
//     return lado * lado;
//   },
//   perimetro(lado) {
//     return this.lados * lado;
//   },
// };

// Organizar o código

Math.PI; // 3.14
Math.random(); // Número aleatório

var pi = Math.PI;
console.log(pi); // 3.14

// CRIAR UM OBJETO

var carro = {};
var pessoa = {};

console.log(typeof carro);

// DOT NOTATION SET

var menu = {
  width: 800,
  height: 50,
  backgroundColor: "#84E",
};
menu.backgroundColor = "#000";
menu.color = "blue";

menu.esconder = function () {
  console.log("Escondi");
};

var bg = menu.backgroundColor;

// PALAVRA CHAVE THIS

var height = 120;
var menu = {
  width: 800,
  height: 50,
  metadeHeight() {
    return this.height / 2;
  },
};
menu.metadeHeight();
