// CLASSLIST
// Retorna uma lista com as classes do elemento. Permite adicionar, remover e verificar se contém.

const menu = document.querySelector('.menu');

menu.className; // string
menu.classList; // lista de classes
menu.classList.add('ativo'); 
menu.classList.add('ativo', 'mobile'); // Duas classes
menu.classList.remove('ativo');
menu.classList.toggle('ativo'); // adiciona/remove a classe
menu.classList.contains('ativo') // true ou false
menu.classList.replace('ativo', 'inativo'); // substitui

if(menu.classList.contains('inativo')) {
  console.log('Possui a classe inativo');
}