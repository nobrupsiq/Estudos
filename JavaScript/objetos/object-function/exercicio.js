// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce
const p = document.querySelectorAll('section p');
const pArray = Array.from(p)
const pMap = pArray.map((item) => {
  return item.innerText.length;
})
const totalCaracter = pMap.reduce((ct, item) => {
  return ct + item;
})
console.log(totalCaracter)


// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.

function novosElementos(tag, classe, conteudo) {
  document.createElement(tag);
  tag.classList.add(classe);
  tag.innerHTML = conteudo;
}

novosElementos('h1', 'ativando', 'testando');

// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico


