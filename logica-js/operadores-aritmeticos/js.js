// Pedir para o usuário digitar dois números e mostrar a média

var n1 = prompt("Digite o primeiro número: ");
n1 = parseFloat(n1);

var n2 = prompt("Digite o segundo número: ");
n2 = parseFloat(n2);

var media = (n1 + n2) / 2; // Prioridade de operadores aritméticos

alert("A média é: " + media);
