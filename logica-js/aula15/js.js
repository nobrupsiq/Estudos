// Problema

// Pedir para o usuário digitar dois números
// e mostrar uma mensagem informando
// se foi aprovado ou não
// a nota de corte é 5

// Resolvendo o problema em pequenas partes

// 1 vou precisar fazer uma comparação pra saber se a nota é maior é maior que 5

// E depois eu vou precisar tomar uma decisão (eu mostro aprovado ou reprovado?)
//

var n1 = parseFloat(prompt("Digite o um número: "));
var n2 = parseFloat(prompt("Digite outro número: "));
var media = (n1 + n2) / 2;

if (media > 5) {
   alert("APROVADO!");
} else {
   alert("REPROVADO!");
}
