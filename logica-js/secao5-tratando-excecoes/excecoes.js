var n2 = parseFloat(prompt("Digite um número: "));
saida(n2);

function iniciarCalculo(operador) {
   var n1 = parseFloat(document.querySelector("#output").textContent);
   var n2 = parseFloat(prompt("digite outro numero: "));

   try {
      var msg = calcular(operador, n1, n2);
   } catch (e) {
      alert(e);
      return;
   }

   saida(msg);
}

function saida(numero) {
   // aqui eu preciso esperar receber o parametro
   var output = document.querySelector("#output");
   output.innerHTML = numero;
}

function calcular(operador, n1, n2) {
   if (
      operador !== "+" &&
      operador !== "-" &&
      operador !== "*" &&
      operador !== "/"
   ) {
      throw new Error("Digite um simbolo valido");
   }
   // Se o n1 puder ser convertido pra numero ou se n2 puder ser convertido para número
   if (isNaN(n1) || isNaN(n2)) {
      throw new Error("Digite somente números");
   }

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
