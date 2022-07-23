// Mostre no console cada parágrafo do site
const paragrafo = document.querySelectorAll('p');
paragrafo.forEach((item) => {
  console.log(item);
})

// Mostre o texto dos parágrafos no console
paragrafo.forEach((item) => {
  console.log(item.innerText);
})
// Como corrigir os erros abaixo:
const imgs = document.querySelectorAll('img');
// colocando parensetes antes da arrow function
imgs.forEach((item, index) => {
  console.log(item, index);
});

let i = 0;
// colocando parenteses antes da arrow function
imgs.forEach(() => {
  console.log(i++);
});

imgs.forEach(() => i++);
console.log(i)

