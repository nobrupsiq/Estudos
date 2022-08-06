//**************************** */ OBJETOS *******************************
// Criar um objeto é simples, basta definirmos uma variável e iniciar a definição do seu valor com chaves {}. Mas e se precisarmos criar um novo objeto, com as mesmas características do anterior? É possível com o Object.create, mas veremos ele mais tarde.

// const carro = {
//   marca: 'Marca',
//   preco: 0,
// }

// const honda = carro;
// honda.marca = 'honda';
// honda.preco = 2000;


// const fiat = carro;
// honda.marca = 'fiat';
// honda.preco = 3000;


// ******************************* CONSTRUCTOR FUNCTIONS ******************************
// Para isso existem as Constructor Functions, ou seja, Funções Construtoras que são responsáveis por construir novos objetos sempre que chamamos a mesma.


// function Carro(marcaAtribuida, precoAtribuido) {
//   this.marca = marcaAtribuida;
//   this.preco = precoAtribuido;
// }

// const honda = new Carro('Honda', 2000);
// const fiat = new Carro('Fiat', 4000);




// */ ****************** NEW KEYWORD *****************************
// A palavra chave new é responsável por criar um novo objeto baseado na função que passarmos a frente dela.


// const honda = new Carro();

// // 1 Cria um novo objeto
// honda = {};

// // 2 Define o protótipo
// honda.prototype = Carro.prototype;

// // 3 Aponta a variável this para o objeto
// this = honda;

// // 4 Executa a função, substituindo this pelo objeto
// honda.marca = 'Marca';
// honda.preco = 0;

// // 5 Retorna o novo objeto
// return honda = {
//   marca: 'Marca',
//   preco: 0,
// }



// ********************** THIS KEYWORD ***************************** 
// O this faz referência ao próprio objeto construído com a Constructor Function.


function Carro2(marca, precoInicial) {
  const taxa = 1.2;
  const precoFinal = precoInicial * taxa;
  this.marca = marca;
  this.preco = precoFinal;
}

const mazda = new Carro2('Mazda', 5000);

//Variáveis dentro da Constructor estão "protegidas".


//***************************** */ EXEMPLO REAL ***************************************
// Quando mudamos a propriedade seletor, o objeto Dom irá passar a selecionar o novo seletor em seus métodos.

// const Dom = {
//   seletor: 'li',
//   element() {
//     return document.querySelector(this.seletor);
//   },
//   ativar() {
//     this.element().classList.add('ativar');
//   }
// }


// **************** CONSTRUCTOR FUNCTION REAL *****************
// Um objeto criado com uma Constructor, não irá influenciar em outro objeto criado com a mesma Constructor.

// function Dom() {
//   this.seletor = 'li';
//   const element = document.querySelector(this.seletor);
//   this.ativo = function() {
//     element.classList.add('ativo');
//   };
// }

// const lista = new Dom();
// lista.seletor = 'ul';
// lista.ativo();

// const lastLi = new Dom();
// lastLi.seletor = 'li:last-child';
// lastLi.ativo();

// *************** LEMBRE-SE DE USAR PARÂMETROS ************************

function Dom(seletor) {
  const element = document.querySelector(seletor);
  this.ativo = function(classe) {
    element.classList.add(classe);
  };
}

const lista = new Dom('ul');
lista.ativo('ativo');

const lastLi = new Dom('li:last-child');
lastLi.ativo('ativo');
