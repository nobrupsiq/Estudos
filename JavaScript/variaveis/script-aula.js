var nome = "Bruno";
var idade = 23;
var possuiFaculdade = true;

console.log(nome, possuiFaculdade, idade);

// Evitam repetiçoes
// Conceito DRY(don't repeat yourself)

var preco = 25;
var totalComprado = 5;
var totalPreco = totalComprado * preco;

console.log(totalPreco);

//Vírgula - Utilizei a vírgulapara criar mais de uma variável, sem repetir a palavra chave var.

var sobrenome = "Pires",
  cidade = "Rio",
  possuiFaculdade = false;

console.log(sobrenome, cidade);

//Sem valor - Pode declarar a variável sem valor a ela

var semDefinir;
console.log(semDefinir);

// console.log(aindaNaoDefine);

// Hosting - São movidas para cima do código, porém o valor atribuído não é movido.

console.log(nome);
var nome = "Bruno";
// retorna undefined

var profissao = "Designer";
console.log(profissao);

// const time = "Vasco";
// time = "Flamengo";
// console.log(time);
