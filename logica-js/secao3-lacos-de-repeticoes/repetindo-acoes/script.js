// Pedir para o usuário digitar um número e mostrar a tabuada desse numero de 1 a 100

var numero = parseFloat(prompt("Digite um número: "));

var indice = 1;

while (indice <= 10) {
   document.write(numero + "x" + indice + " = " + numero * indice + " <br>");
   indice = indice + 1;
}
document.write("saiu do loop");
