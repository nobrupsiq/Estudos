// ADDEVENTLISTENER
// Adiciona uma função ao elemento, esta chamada de callback, que será ativada assim que certo evento ocorrer neste elemento.

// const img = document.querySelector('img');

//elemento.addEventListener(event, callback, option)
// img.addEventListener('click', function() {
//   console.log('Clicou');
// })

// CALLBACK
// É boa prática separar a função de callback do addEventListener, ou seja, declarar uma função ao invés de passar diretamente uma função anônima

const img = document.querySelector("img");

function callback() {
    // console.log('clicou');
}
img.addEventListener("click", callback);

// vai ver muito assim na WEB
img.addEventListener("click", () => {
    // console.log('Clicou');
});

// EVENT
// O primeiro parâmetro do callback é referente ao evento que ocorreu.
const img2 = document.querySelector("img");

function callback2(event) {
    // console.log(event)
}

img2.addEventListener("click", callback2);

//PROPRIEDADES DO EVENT

const animaisLista = document.querySelector(".animais-lista");

function executarCallback(event) {
    const currentTarget = event.currentTarget; // this
    const target = event.target; // onde o clique ocorreu
    const type = event.type; // tipo de evento
    const path = event.path;
    // console.log(path);
}
animaisLista.addEventListener("click", executarCallback);

// EVENT.PREVENTDEFAULT()

//Previne o comportamento padrão do evento no browser. No caso de um link externo, por exemplo, irá previnir que o link seja ativado.

const linkExterno = document.querySelector('a[href^="http"]');

function handleLinkExterno(event) {
    event.preventDefault(); // ← VAI PREVENIR O COMPORTAMENTO PADRÃO
    // console.log(event.currentTarget.href);
}

linkExterno.addEventListener("click", handleLinkExterno);

// THIS
// A palavra chave this é uma palavra especial de JavaScript, que pode fazer referência a diferentes objetos dependendo do contexto. No caso de eventos, ela fará referência ao elemento em que addEventListener foi adicionado.

const img3 = document.querySelector("img");

function callback(event) {
    // console.log(this); // retorna a imagem
    // console.log(this.getAttribute('src'));
}

img3.addEventListener("click", callback);

// Geralmente igual ao event.currentTarget

// DIFERENTES EVENTOS
// Existem diversos eventos como click, scroll, resize, keydown, keyup, mouseenter e mais. Eventos podem ser adicionados a diferentes elementos, como o window e document também.

const h1 = document.querySelector("h1");

function handleEvent(event) {
    // console.log(event.type, event);
}

h1.addEventListener("click", handleEvent);
h1.addEventListener("mouseenter", handleEvent);
window.addEventListener("scroll", handleEvent);
window.addEventListener("resize", handleEvent);
window.addEventListener("keyup", handleEvent);
window.addEventListener("keydown", handleEvent);

// KEYBOARD
// Você pode adicionar atalhos para facilitar a navegação no seu site, através de eventos do keyboard.

function handleKeyboard(event) {
    if (event.key === "a") document.body.classList.toggle("azul");
    else if (event.key === "v") document.body.classList.toggle("vermelho");
}

// window.addEventListener("keydown", handleKeyboard);

// FOREACH E EVENTOS
// O método addEventListener é adicionado à um único elemento, então é necessário um loop entre elementos de uma lista, para adicionarmos à cada um deles.

const imgs = document.querySelectorAll("img");

function imgSrc(event) {
    const src = event.currentTarget.getAttribute("src");
    console.log(src);
}

imgs.forEach((img) => {
    img.addEventListener("click", imgSrc);
});
