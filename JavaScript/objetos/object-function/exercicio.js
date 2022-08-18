// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce
const paragrafos = document.querySelectorAll('p');

const totalCaracteres = Array.prototype.reduce.call(paragrafos, (ac, item) => {
  return ac + item.innerText.length
}, 0)


// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.

function novosElementos(tag, classe, conteudo) {
  const elemento = document.createElement(tag);
  classe ? elemento.classList.add(classe) : null;
  conteudo ? elemento.innerHTML = conteudo : null;
  return elemento
}
console.log(novosElementos('li', 'ativa', 'Bom Dia!'))

// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico

const h1Titulo = novosElementos.bind(null, 'h1', 'titulo')

const cursosJS = h1Titulo('Cursos de JavaScript');
const cursosReact = h1Titulo('Cursos de React');

console.log(cursosJS, cursosReact)
