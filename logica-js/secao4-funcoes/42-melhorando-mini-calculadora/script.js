var n2 = parseFloat(prompt("Digite um número: "));
saida(n2);

function iniciarCalculo(operador) {
   var n1 = parseFloat(document.querySelector("#output").textContent);
   var n2 = parseFloat(prompt("digite outro numero: "));
   var msg = calcular(operador, n1, n2);
   saida(msg);
}

function saida(numero) {
   // aqui eu preciso esperar receber o parametro
   var output = document.querySelector("#output");
   output.innerHTML = numero;
}

function calcular(operador, n1, n2) {
   var numeroCalculado = null;

   switch (operador) {
      case "+":
         numeroCalculado = n1 + n2;
         break;
      case "-":
         numeroCalculado = n1 - n2;
         break;
      case "*":
         numeroCalculado = n1 * n2;
         break;
      case "/":
         numeroCalculado = n1 / n2;
         break;
   }
   return numeroCalculado;
}
