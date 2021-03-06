//DOCUMENT OBJECT MODEL (DOM)

// uma interface que representa documentos HTML e XML através de objetos. Com ela é possível manipular a estrutura, estilo e conteúdo destes documentos.

console.log(window);
// window é o objeto global do browser
// possui diferentes métodos e propriedades

window.innerHeight; // retorna a altura do browser

const href = window.location.href;
console.log(href);

if (href === "http://127.0.0.1:5500/dom/o-que-e-o-dom/") {
  console.log("É igual");
}

const texto = document.querySelector("h1");

//WINDOW E DOCUMENT
// São os objetos principais do DOM, boa parte da manipulação é feita através dos seus métodos e propriedades.

document.querySelector("h1"); // Seleciona o primeiro h1
document.body; // Retorna o bod

//window é o objeto global, por isso não precisamos chamar ele na frente dos seus métodos e propriedades.
