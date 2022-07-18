var total = 10 + 5 + 10;
var divisao = 200 / 5;
var modulo = 123124123 / 3;

var testeNaN = "100" / 2;
console.log(isNaN(testeNaN));

var total1 = 20 + 5 * 2; //30
var total2 = (20 + 5) * 2; //50
var total3 = (20 / 2) * 5; // 50
var total4 = 10 + 10 * 2 + 20 / 2; // 40

//Operadores aritméticos unários

var incremento = 5;
console.log(incremento++); //5
console.log(incremento); //6

var incremento2 = 5;
console.log(++incremento2); //6
console.log(incremento2); //6

var frase = "isso é um teste";
+frase; //NaN
-frase; //NaN
console.log(frase);

var idade = "28";
+idade; // 28(número)
-idade; // -28(número)
console.log(+idade + 5); //33

var possuiFaculdade = true;
console.log(+possuiFaculdade); //1
