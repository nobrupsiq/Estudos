// ************* PROTOTYPE ***********************
// A propriedade prototype é um objeto adicionado a uma função quando a mesma é criada.

function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
  // this.abracar = function() {
  //   return 'abraçou';
  // }
}

const bruno = new Pessoa('Bruno', 27);
const julia = new Pessoa('Julia', 24);

// ************ FUNCAO.PROTOTYPE *******************
// É possível adicionar novas propriedades e métodos ao objeto prototype.

Pessoa.prototype.andar = function() {
  return this.nome + ' Pessoa andou';
}
Pessoa.prototype.nadar = function() {
  return this.nome + ' Pessoa nadou';
}
Pessoa.prototype.abracar = function() {
  return this.nome + ' Abraçou';
}

console.log(Pessoa.prototype);
console.log(bruno.prototype);


// ACESSO AO PROTÓTIPO
// O objeto criado utilizando o construtor, possui acesso aos métodos e propriedades do protótipo deste construtor. Lembrando, prototype é uma propriedade de funções apenas.


// ************** PROTO *******************
// O novo objeto acessa os métodos e propriedades do protótipo através da propriedade __proto__. É papel da engine fazer essa busca, não devemos falar com __proto__ diretamente.


// Acessam o mesmo método
// mas __proto__ não terá
// acesso ao this.nome

// *********** HERANÇA DE PROTÓTIPO ****************
// O objeto possui acesso aos métodos e propriedades do protótipo do construtor responsável por criar este objeto. O objeto abaixo possui acesso a métodos que nunca definimos, mas são herdados do protótipo de Object.

