// HEIGHT E WIDTH
// Estas são propriedades e métodos dos objetos Element e HTMLElement, a maioria delas são Read Only

const section = document.querySelectorAll('.animais');

console.log(section.clientHeight); // height + padding
section.offsetHeight; // height + padding + border
section.scrollHeight; // height total, mesmo dentro de scroll

// Mesma coisa para o Width, clientWidth...

const listaAnimais = document.querySelector('.animais-lista');
const height = listaAnimais.scrollHeight;
// console.log(height);



// OFFSETTOP E OFFSETLEFT

const animaisTop = listaAnimais.offsetTop;
// console.log(animaisTop)

const primeiroh2 = document.querySelector('h2');
const  h2left = primeiroh2.offsetLeft;
// console.log(h2left)



// Distância entre o topo do elemento e o topo da página
section.offsetTop;

// Distância entre o canto esquerdo do elemento
// e o canto esquerdo da página
section.offsetLeft;


// GETBOUNDINGCLIENTRECT()
// Método que retorna um objeto com valores de width, height, distâncias do elemento e mais.

const section2 = document.querySelector('h2');

const rect = section2.getBoundingClientRect();
rect.height; // height do elemento
rect.width; // width do elemento
rect.top; // distância entre o topo do elemento e o scroll

console.log(rect)


// WINDOW

window.innerWidth; // width da janela
window.outerWidth; // soma dev tools também
window.innerHeight; // height da janela
window.outerWidth; // soma a barra de endereço

window.pageYOffset; // distância total do scroll horizontal
window.pageXOffset; // distância total do scroll vertical

console.log(
  window.innerWidth,
  window.outerWidth,
  window.innerHeight,
  window.outerHeight,
  window.pageYOffset,
  window.pageXOffset
);

if(window.innerWidth < 600) {
  // console.log('Tela menor que 600px');
}

if(rect.top < 0) {
  console.log('Passou do elemento')
}

// MATCHMEDIA();
// Utilize um media-querie como no CSS para verificar a largura do browser

const small = window.matchMedia('(max-width: 600px)');
console.log(small)

if(small.matches) {
  console.log('Usuário Mobile')
} else {
  console.log('Usuário Desktop')
}
