var n1 = parseFloat(prompt("Digite um número: "));
saida(n1);

function saida(numero) {
   var output = document.querySelector("#output");
   output.innerHTML = numero;
}

function calcular(operador) {
   var n = parseFloat(prompt("Digite outro número: "));
   switch (operador) {
      case "+":
         n1 += n;
         break;
      case "-":
         n1 -= n;
         break;
      case "*":
         n1 *= n;
         break;
      case "/":
         n1 /= n;
         break;
   }

   saida(eval(output.innerHTML + operador + n));
}
