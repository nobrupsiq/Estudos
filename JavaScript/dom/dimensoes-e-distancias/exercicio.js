// ****  DICA ****

// SELECIONE O ELEMENTO NO INSPETOR (DOM)
// ABRA O CONSOLE E DIGITE $0 PARA SELECIONAR O MESMO
// OS ELEMENTOS SELECIONADOS ANTERIORMENTE SÃO $1, $2 ...

//****  EXERCÍCIO ****

// Verifique a distância da primeira imagem
// em relação ao topo da página
const primeiraImagem = document.querySelector('img');
const imgTop = primeiraImagem.offsetTop;
console.log(`Altura da primeira imagem com o TOPO ${imgTop}`);


// Retorne a soma da largura de todas as imagens
function somaImagens() {
  const imgs = document.querySelectorAll('img');
  let soma = 0;
  imgs.forEach((imagem) => {
    soma += imagem.offsetWidth;
  });
  console.log(soma);
}
// JS não consegue saber a largura da imagem se não for especificada no HTML, então ele só consegue saber a largura da imagem quando ela carrega, e o JS carrega primeiro que a imagem.
// a propriedade do window que é a onload faz com que o JS aguarde as imagens carregarem ou tudo que estiver dentro de uma função pra depois executar o script
window.onload = function()  { // função de callback que é executada quando o onload acontece   
  somaImagens();
}

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
const links = document.querySelectorAll('a');
console.log(links);
links.forEach((link) => {
  const linkWidth = link.offsetWidth;
  const linkHeight = link.offsetHeight;
  if(linkWidth >= 48 && linkHeight >= 48) {
    console.log(link, 'Possui boa acessibilidade')
  } else {
    console.log(link, 'Não possui boa acessibilidade')
  } 
});



// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu

const browser = window.matchMedia('(max-width: 720px)').matches;

if(browser) {
  const menuMobile = document.querySelector('.menu');
  menuMobile.classList.add('menu-mobile');
}