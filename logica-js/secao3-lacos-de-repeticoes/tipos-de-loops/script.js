// Pedir para o usuário digitar um número e mostrar a tabuada desse numero de 1 a 100

// WHILE

// var numero = parseFloat(prompt("Digite um número: "));

// var indice = 1;

// while (indice <= 10) {
//    document.write(numero + "x" + indice + " = " + numero * indice + " <br>");
//    indice = indice + 1;
// }
// document.write("saiu do loop");

// DO WHILE(se eu quiser que meu bloco seja executado pelo menos uma vez)

// var numero = parseFloat(prompt("Digite um número: "));

// var indice = 1001;

// do {
//    // EXECUTA O BLOCO UMA VEZ
//    document.write(numero + "x" + indice + " = " + numero * indice + " <br>");
//    indice = indice + 1;
// } while (indice <= 10); // E AQUI ELE ENCERRA PORQUÊ DEU FALSO

// document.write("saiu do loop");

// **FOR ele junta tudo em uma única linha**

var numero = parseFloat(prompt("Digite um número: "));

for (var i = 1; i <= 10; i++) {
   document.write(numero + "x" + i + " = " + numero * i + " <br>");
}
document.write("saiu do loop");
