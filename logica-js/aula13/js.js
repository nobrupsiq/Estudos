/* PROBLEMA
Pedir para o usuário digitar dois números e mostrar um boolean
indicando se a média for maior que 5
*/

// Quebrar o problema em pequenas partes

// 1 - pedir para o usuário digitar os dois números
// 2 - preciso converter para numero(prompt sempre retorna string)
var n1 = parseFloat(prompt("Digite um número: "));
var n2 = parseFloat(prompt("Dgite outro número: "));

// 3 - preciso calcular a média
var media = (n1 + n2) / 2;

// 4 - saber se o da média é maior que 5
alert(media > 5);

/* OPERADORES DE COMPARAÇÃO

== igualdade (valor)
!= Diferente (valor)
=== igualdade (valor e tipo)
!== diferente (valor e tipo)
> maior
>= maior ou igual
< menor
<= menor ou igual
*/
