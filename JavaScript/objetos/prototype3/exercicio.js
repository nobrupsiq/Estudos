// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa
function Pessoa(nome, sobrenome, idade) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.idade = idade;
}

const bruno = new Pessoa('Bruno', 'Pires', 27);

Pessoa.prototype.nomeCompleto = function()  {
  return `${this.nome} ${this.sobrenome}`
}

// Liste os métodos acessados por 
// dados criados com NodeList,
// HTMLCollection, Document
Object.getOwnPropertyNames(NodeList.prototype);
Object.getOwnPropertyNames(HTMLCollection.prototype);
Object.getOwnPropertyNames(Document.prototype);

// Liste os construtores dos dados abaixo
const li = document.querySelector('li');

li;
li.click;
li.innerText;
li.value;
li.hidden;
li.offsetLeft;
li.click();

// li.constructor.name // HTMLLIElement
// li.click.constructor.name // Function
// li.innerText.constructor.name // String
// li.value.constructor.name // Number
// li.hidden.constructor.name // Boolean
// li.offsetLeft.constructor.name // Number
// li.click().constructor.name // Undefined

// // Qual o construtor do dado abaixo:
// li.hidden.constructor.name;
// String
