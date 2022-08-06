// OBJETOS
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


// CONSTRUCTOR FUNCTIONS
// Para isso existem as Constructor Functions, ou seja, Funções Construtoras que são responsáveis por construir novos objetos sempre que chamamos a mesma.


// function Carro(marcaAtribuida, precoAtribuido) {
//   this.marca = marcaAtribuida;
//   this.preco = precoAtribuido;
// }

// const honda = new Carro('Honda', 2000);
// const fiat = new Carro('Fiat', 4000);




// NEW KEYWORD
// A palavra chave new é responsável por criar um novo objeto baseado na função que passarmos a frente dela.


