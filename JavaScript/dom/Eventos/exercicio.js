// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links
const linksInternos = document.querySelectorAll('a[href^="#"]');

function handleLink(event) {
  event.preventDefault();
  linksInternos.forEach((link) => {
    link.classList.remove('ativo')
  })
  event.target.classList.add('ativo')
};

linksInternos.forEach((link) => {
  link.addEventListener('click', handleLink)
})


// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
const elementosDoSite = document.querySelectorAll('body *');

function handleElemento(event) {
  // console.log(event.currentTarget)
}

elementosDoSite.forEach((elemento) => {
  elemento.addEventListener('click', handleElemento);
})




// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento
const elementosDoSite2 = document.querySelector('body');

function handleClick3(event) {
  event.target.remove()
}

// elementosDoSite2.addEventListener('click', handleClick3);



// Se o usuário clicar na tecla (t), aumente todo o texto do site. 


// Minha forma
const site = document.querySelector('*');

function handleKeyboard(event) {
  if(event.key === 't')
    site.style.fontSize = "60px";
}

site.addEventListener('keydown', handleKeyboard);


//outra forma

function handleClickR(event) {
  if(event.key === 'r') {
    document.documentElement.classList.toggle('textomaior')
  }
}
window.addEventListener('keydown', handleClickR);
