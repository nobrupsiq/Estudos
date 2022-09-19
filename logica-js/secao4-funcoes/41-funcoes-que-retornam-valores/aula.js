// PROBLEMA

// Pedir para o usuário digitar dois números que representam os lados de um retângulo. Mostrar na tela a área total de duas formas distintas: Num alert ou na div#output(dependendo do botão clicado). Esse código não precisa ser executado quando a página é aberta.

var largura = parseFloat(prompt("Digite a largura: "));
var altura = parseFloat(prompt("Digite a altura: "));

function mostrarAreaAlert() {
   var largura = parseFloat(prompt("Digite a largura: "));
   var altura = parseFloat(prompt("Digite a altura: "));
   var area = calcularArea(largura, altura);
   alert(`Área total é: ${area}`);
}

function mostrarAreaOutput() {
   var largura = parseFloat(prompt("Digite a largura: "));
   var altura = parseFloat(prompt("Digite a altura: "));
   var area = calcularArea(largura, altura);
   document.querySelector("#output").innerHTML = `Área total é: ${area}`;
}

function calcularArea(l, a) {
   return l * a;
}
