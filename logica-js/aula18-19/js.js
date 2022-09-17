var n1 = parseFloat(prompt("Digite a primeira nota:"));
var n2 = parseFloat(prompt("Digite a segunda nota: "));

var media = (n1 + n2) / 2;

// if (media > 5 && n1 > 0 && n2 > 0) {
//    alert("Aluno aprovado!");
// } else {
//    alert("Aluno reprovado!");
// }

// OPERADOR OU ||

if (n1 === 0 || n2 === 0 || media <= 5) {
   alert("Aluno REPROVADO!");
} else {
   alert("Aluno APROVADO!");
}
