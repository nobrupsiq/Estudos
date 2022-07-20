// nomeie 3 propriedades ou métodos de strings
var nome = "bruno";
nome.toUpperCase();
nome.length;
nome.toLowerCase();

// nomeie 5 propriedades ou métodos de elementos do DOM
var btn2 = document.querySelector("#btn2");
// btn2.addEventListener();
// btn2.appendChild();
// btn2.animate();
// btn2.innerHTML;
// btn2.id;
console.log(btn2);

// busque na web um objeto (método) capaz de interagir com o clipboard,
// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V

var btn = document.querySelector("#copy");

btn.addEventListener("click", function () {
  var textArea = document.querySelector(".text");
  textArea.select(); // método select, seleciona todo o texto de um elemento, ou em um elemento input do tipo texto
  document.execCommand("copy");
});
