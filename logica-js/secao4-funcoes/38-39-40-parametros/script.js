// Problema

// Pedir para o usuário digitar dois números que representam os lados de um retângulo assim que a página é carregada. Mostrar na tela a área total quando clicar num botão

var largura = prompt("Digite a largura: ");
largura = parseFloat(largura);

var altura = prompt("Digite a altura: ");
altura = parseFloat(altura);

function mostrarArea(l, a) {
   alert(`Área total: ${l * a}`);
}
