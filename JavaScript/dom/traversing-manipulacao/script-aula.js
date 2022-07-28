// OUTERHTML, INNERHTML E INNERTEXT
// Propriedades que retornam uma string contendo o html ou texto. É possível atribuir um novo valor para as mesmas element.innerText = 'Novo Texto'.

const h1 = document.querySelector('h1');
const animaisLista = document.querySelector('.animais-descricao');
// console.log(h1.innerHTML) // retorna apenas o texto do meu h1
// console.log(h1.outerHTML) // pega tudo de fora

h1.outerHTML = '<p>Novo Título</p>';
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

console.log(lista2.previousSibling)