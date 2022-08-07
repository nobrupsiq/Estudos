// CONSTRUTORES NATIVOS
// Objetos, Funções, Números, Strings e outros tipos de dados são criados utilizando construtores. Esses construtores possuem um protótipo com propriedades e métodos, que poderão ser acessadas pelo tipo de dado.

const pais = 'Brasil';
const cidade = new String('Rio')

pais.charAt(0); // B
cidade.charAt(0); // R

String.prototype

// *** É POSSÍVEL ACESSAR A FUNÇÃO DO PROTÓTIPO **********
// É comum, principalmente em códigos mais antigos, o uso direto de funções do protótipo do construtor Array

const listaAnimais = ['Cachorro', 'Gato', 'cavalo'];


const lista = document.querySelectorAll('li');

// Transforma em uma array
const listaArray1 = Array.prototype.slice.call(lista);
const listaArray2 = Array.from(lista);

// O método call invoca uma função com um dado valor THIS ou seja 'dê slice nisso'()


// ***** MÉTODO DO OBJETO VS PROTÓTIPO *********
// Nos objetos nativos existem métodos linkados diretamente ao Objeto e outros linkados ao protótipo.

Array.from(lista); // Novo método de Array

// Retorna uma lista com os métodos / propriedades
Object.getOwnPropertyNames(Array);
Object.getOwnPropertyNames(Array.prototype);

// dado.constructor.name, retorna o nome do construtor


// *** APENAS OS MÉTODOS DO PROTÓTIPO SÃO HERDADOS ***

// [1, 2, 3].slice(); // existe
// [1, 2, 3].from(); // não existe


// **** ENTENDA O QUE ESTÁ SENDO RETORNADO ****
// Os métodos e propriedades acessado com o . são referentes ao tipo de dados que é retornado antes desse .


const Carro = {
  marca: 'Ford',
  preco: 2000,
  acelerar() {
    return true;
  }
}

Carro // Object
Carro.marca // string
Carro.acelerar // function
Carro.acelerar() // boolean
Carro.marca.charAt // function
Carro.marca.charAt(0) // string

// Carro.constructor.name
// 'Object'
// Carro.marca.constructor.name
// 'String'
// Carro.acelerar.constructor.name
// 'Function'
// Carro.acelerar().constructor.name
// 'Boolean'
// Carro.marca.charAt.constructor.name
// 'Function'
// Carro.marca.charAt(0).constructor.name
// 'String'