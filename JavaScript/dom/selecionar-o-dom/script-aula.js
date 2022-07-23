// Seleciona pelo ID

const animaisSection = document.getElementById('animais');
const contatoSection = document.getElementById('contato');

// CLASSE E TAG
// getElementsByClassName e getElementsByTagName selecionam e retornam uma lista de elementos do DOM. A lista retornada está ao vivo, significa que se elementos forem adicionados, ela será automaticamente atualizada.

const gridSection = document.getElementsByClassName('grid-section'); // Animais, faq, contato
const contato = document.getElementsByClassName('grid-section contato'); // as que tiverem as duas classes

// seleciona todas as UL's, retorna uma HTMLCollection
const ul = document.getElementsByTagName('ul');

// Retorna o primeiro elemeneto
console.log(gridSection[0]);



// SELETOR GERAL ÚNICO
// querySelector retorna o primeiro elemento que combinar com o seu seletor CSS.


const animais = document.querySelector('.animais');
const contato2 = document.querySelector('#contato');
const ultimoItem = document.querySelector('.animais-lista li:last-child');
const linkInterno = document.querySelector('[href^="#"]');
const primeiraUl = document.querySelector('ul');

// Busca dentro do Ul apenas
const navItem = primeiraUl.querySelector('li');

console.log(linkInterno)

// SELETOR GERAL LISTA
// querySelectorAll retorna todos os elementos compatíveis com o seletor CSS em uma NodeList

const gridSection2 = document.querySelectorAll('.grid-section');
const listas = document.querySelectorAll('ul');
const titulos = document.querySelectorAll('.titulo');
const fotosAnimais = document.querySelectorAll('.animais-lista img');

// Retorna o segundo elemento

console.log(fotosAnimais[1]);


//************** */ DIFERENÇA DE HTMLCOLLECTION VS NODELIST *************

// A diferença está nos métodos e propriedades de ambas. Além disso a NodeList retornada com querySelectorAll é estática.

const titulo2 = document.querySelector('.titulo');
const gridSectionHTML = document.getElementsByClassName('grid-section');
const gridSectionNode = document.querySelectorAll('.grid-section');

titulo2.classList.add('grid-section');

console.log(gridSectionHTML); // 4 itens AO VIVO
console.log(gridSectionNode); // 3 itens ESTÁTICO



// ARRAY-LIKE
// HTMLCollection e NodeList são array-like, parecem uma array mas não são. O método de Array forEach() por exemplo, existe apenas em NodeList.


gridSectionNode.forEach(function(item, index){
 console.log(item);
});

const arrayGrid = Array.from(gridSectionHTML)

arrayGrid.forEach(function(item, index){
  console.log(item, index);
})

// const gridSection3 = document.querySelectorAll('.grid-section');

// gridSection3.forEach(function(gridItem, index, array) {
//   gridItem.classList.add('azul');
//   console.log(index) // index do item na array
//   console.log(array) // a array completa
// });
// //É possível transformar array-like em uma Array real, utilizando o método Array.from(gridSection)