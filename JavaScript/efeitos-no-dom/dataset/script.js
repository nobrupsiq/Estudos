// HTMLELEMENT
// Todo elemento HTML do DOM herda propriedades e métodos do construtor HTMLElement.

const h1 = document.querySelector('h1');
Object.prototype.toString.call(h1); // [object HTMLHeadingElement]
// HTMLHeadingElement > HTMLElement > element > Node > EventTarget > Object

// DATASET
// dataset é uma propriedade de HTMLElement, essa propriedade é um objeto do tipo DOMStringMap. Dentro desse objeto existe uma coleção de chave / valor, com todos os atributos do elemento html que começarem com data-.

let div = document.querySelector('div');

div = document.querySelector('[data-cor]');
div = document.querySelector('[data-cor="azul"]');

div.dataset.cor;
div.dataset.width;
div.dataset.tempo = 1000;

// DATA ATRIBUTES
// Os atributos e valores que começarem com data- poderão ser utilizados como forma de configuração de plugins e interações DOM / JS.

const divs = document.querySelectorAll('[data-anima]');
divs.forEach((div) => {
  div.classList.add(div.dataset.anima);
});

// adiciona em cada div
// uma classe com o mesmo nome
// que o valor de data



// DATA VS CLASS
// A vantagem de se utilizar data atributes é que torna mais fácil evitarmos conflitos com estilos do CSS. Além de deixar a estrutura da tag mais organizada.



// NOMENCLATURA
// Por padrão o JavaScript não aceita - (traço) como caracter válido para nomear propriedades. Então qualquer traço será removido e a letra seguinte transformada em maiúscula.

const divScroll = document.querySelector('[data-anima-scroll]');
divScroll.dataset;
// {animaScroll: 'left'}
divScroll.dataset.animaScroll; // left
divScroll.dataset.tempoTotal = 1000;
// Na div vira data-tempo-total='1000'

delete divScroll.dataset.animaScroll; // remove o atributo