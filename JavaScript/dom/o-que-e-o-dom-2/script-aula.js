// NODE
// Toda tag html é representada pelo objeto Element e por isso herda os seus métodos e propriedades. Element é um tipo de objeto Node.

const titulo = document.querySelector("h1");

titulo.innerText; // retorna o texto;
titulo.classList; // retorna a classe;
titulo.id; // retorna o id;
titulo.offsetHeight; // retorna a altura do elemento;

function callbackh1() {
  console.log("Clicou em", titulo);
}
titulo.addEventListener("click", callbackh1);
// ativa a função callback ao click no titulo
