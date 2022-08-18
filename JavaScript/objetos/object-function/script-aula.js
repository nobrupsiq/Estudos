// FUNCTION
// Toda função é criada com o construtor Function e por isso herda as suas propriedades e métodos.

function areQuadrado(lado) {
  return lado * lado;
}

const perimetroQuadrado = new Function('lado', 'return lado * 4');



// PROPRIEDADES
// Function.length retorna o total de argumentos da função. Function.name retorna uma string com o nome da função.

function somar(n1, n2) {
  return n1 + n2;
}
somar.length // 2
somar.name; // 'somar'


// FUNCTION.CALL()
// function.call(this, arg1, arg2, ...) executa a função, sendo possível passarmos uma nova referência ao this da mesma.

// const carro = {
//   marca: 'Ford',
//   ano: 2018
// }

// function descricaoCarro() {
//   console.log(this.marca + ' ' + this.ano);
// }

// descricaoCarro() // undefined undefined
// descricaoCarro.call() // undefined undefined
// descricaoCarro.call(carro) // Ford 2018


// THIS
// O valor de this faz referência ao objeto criado durante a construção do objeto (Constructor Function). Podemos trocar a referência do método ao this, utilizando o call().

const carros = ['Ford', 'Fiat', 'VW'];

carros.forEach((item) => {
  // console.log(item)
});
// Log de cada carro

carros.forEach.call(carros, (item) => {
  // console.log(item);
});
// Log de cada carro

// ************************************************

const frutas = ['Banana', 'Uva', 'Pêra']

carros.forEach.call(frutas, (item) => {
  // console.log(item);
});
// Log de cada fruta



// EXEMPLO REAL
// O objeto atribuído a lista será o substituído pelo primeiro argumento de call()

function Dom(seletor) {
  this.element = document.querySelector(seletor);
};

Dom.prototype.ativo = function(classe) {
  // console.log(this)
  this.element.classList.add(classe)
}

const li = {
  element: document.querySelector('li')
}

Dom.prototype.ativo.call(li, 'ativo');

// const ul = new Dom('ul')





// ul.ativo.call(li, 'ativo')
// ul.ativo('ativar')

// console.log(ul);


// O OBJETO DEVE SER PARECIDO
// O novo valor de this deve ser semelhante a estrutura do valor do this original do método. Caso contrário o método não conseguirá interagir de forma correta com o novo this.

const novoSeletor = {
  element: document.querySelector('li')
}

// Dom.prototype.ativo.call(novoSeletor, 'ativar');


// ARRAY'S E CALL
// É comum utilizarmos o call() nas funções do protótipo do construtor Array. Assim podemos estender todos os métodos de Array à objetos que se parecem com uma Array (array-like).


Array.prototype.mostreThis = function() {
  // console.log(this);
}

const frutas2 = ['Uva', 'Maçã', 'Banana'];
frutas2.mostreThis(); // ['Uva', 'Maçã', 'Banana']

Array.prototype.pop.call(frutas2); // Remove Banana
frutas2.pop(); // Mesma coisa que a função acima


// ARRAY-LIKE
// HTMLCollection, NodeList e demais objetos do Dom, são parecidos com uma array. Por isso conseguimos utilizar os mesmos na substituição do this em call.

const li2 = document.querySelectorAll('li');
const arrayLi = Array.from(li2);

const filtro = arrayLi.filter((item) => {
  return item.classList.contains('ativo')
});
// OBS: quando transformei Minha NodeList em uma Array, não precisei utilizar o objeto Array nativo, nem o prototype e nem o call

const filtro2 = Array.prototype.filter.call(li, (item) => {
  return item.classList.contains('ativo')
});
// OBS: por padrão no NodeList não possui o método filter por isso tive que passar ele da forma acima


// OBS: Só vou utilizar array.prototype... quando eu tiver um objeto que se pareça com um array



// FUNCTION.APPLY()
// O apply(this, [arg1, arg2, ...]) funciona como o call, a única diferença é que os argumentos da função são passados através de uma array.


const numeros = [3, 4, 6, 1, 34, 44, 32];

const teste = Math.max.call(null, numeros); // NaN
// teste irá retornar "NaN" not a number
const teste2 = Math.max.apply(null, numeros); // 44
// O apply consegue recerber uma Array
// irá retornar o maior número


// APPLY VS CALL
// A única diferença é a array como segundo argumento

const li3 = document.querySelectorAll('li');

function itemPossuiAtivo(item) {
  return item.classList.contains('ativo');
}

const filtro1 = Array.prototype.filter.call(li, itemPossuiAtivo);
const filtro3 = Array.prototype.filter.apply(li, [itemPossuiAtivo]);


// FUNCTION.BIND()
// Diferente de call e apply, bind(this, arg1, arg2, ...) não irá executar a função mas sim retornar a mesma com o novo contexto de this.


const li4 = document.querySelectorAll('li');

const filtrarLi = Array.prototype.filter.bind(li, function(item) {
  return item.classList.contains('ativo');
});

filtrarLi();

const $ = document.querySelectorAll.bind(document)
const teste4 = $('li')



// ARGUMENTOS E BIND
// Não precisamos passar todos os argumentos no momento do bind, podemos passar os mesmos na nova função no momento da execução da mesma.

const carro = {
  marca: 'Ford',
  ano: 2018,
  acelerar: function(aceleracao, tempo) {
    return `${this.marca} acelerou ${aceleracao}km em ${tempo}min`;
  }
}
carro.acelerar(100, 20);

const honda = {
  marca: 'Honda',
};

const acelerarHonda = carro.acelerar.bind(honda);

acelerarHonda(200, 10);


// ARGUMENTOS COMUNS
// Podemos passar argumentos padrões para uma função e retornar uma nova função.

function imc(altura, peso) {
  return peso / (altura * altura);
}
const imc180 = imc.bind(null, 1.80);
imc(1.80, 70); // 21.6
imc180(70); // 21.6