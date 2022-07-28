// OUTERHTML, INNERHTML E INNERTEXT
// Propriedades que retornam uma string contendo o html ou texto. É possível atribuir um novo valor para as mesmas element.innerText = 'Novo Texto'.

const h1 = document.querySelector('h1');
const animaisLista = document.querySelector('.animais-descricao');
// console.log(h1.innerHTML) // retorna apenas o texto do meu h1
// console.log(h1.outerHTML) // pega tudo de fora

// h1.outerHTML = '<p>Novo Título</p>';
// console.log(animaisLista.innerText);



// TRASVERSING
// Como navegar pelo DOM, utilizando suas propriedades e métodos.


const lista = document.querySelector('.animais-lista');

lista.parentElement; // pai
lista.parentElement.parentElement; // pai do pai
lista.previousElementSibling; // elemento acima
lista.nextElementSibling; // elemento abaixo

lista.children; // HTMLcollection com os filhos
lista.children[0]; // primeiro filho
lista.children[--lista.children.length]; // último filho

lista.querySelectorAll('li'); // todas as LI's
lista.querySelector('li:last-child'); // último filho


// ELEMENT VS NODE
// Element's represetam um elemento html, ou seja, uma tag. Node representa um nó, e pode ser um elemento (Element), texto, comentário, quebra de linha e mais.

const lista2 = document.querySelector('.animais-lista');

lista2.previousElementSibling; // elemento acima
lista2.previousSibling; // node acima

lista2.fisrtChild; // primeiro node child
lista2.childNodes; // todos os node child

// console.log(lista2.previousSibling)



// MANIPULANDO ELEMENTOS
// É possível mover elementos no dom com métodos de Node.
const animais = document.querySelector('.animais');
const contato = document.querySelector('.contato');
const titulo = contato.querySelector('.titulo');
const mapa = document.querySelector('.mapa');



// contato.appendChild(lista); // move lista para o final de contato
// contato.insertBefore(lista, titulo); // insere a lista antes do titulo
// contato.removeChild(titulo); // remove titulo de contato
// contato.replaceChild(lista, titulo); // subistitui titulo por lista




// NOVOS ELEMENTOS
// Podemos criar novos elementos com o método createElement()

const animais2 = document.querySelector('.animais');

const novoH1 = document.createElement('h1');
novoH1.innerText = 'Novo Título';
novoH1.classList.add('titulo');

animais2.appendChild(novoH1);



// CLONAR ELEMENTOS
// Todo elemento selecionado é único. Para criarmos um novo elemento baseado no anterior, é necessário utilizar o método cloneNode()


const titulo3 = document.querySelector('h1');
const titulo4 = document.querySelector('h1');
const novoTitulo = titulo3;
// titulo3, titulo4 e novoTitulo são iguais

const cloneTitulo = titulo3.cloneNode(true);  // true sinaliza para incluir os filhos do elemento
const contato2 = document.querySelector('.contato');
contato2.appendChild(cloneTitulo);
