var output = document.querySelector("#output");

var mensagem = "";

function mostrarTabuada() {
   //perguntar o numero para o usuário
   var n = parseFloat(prompt("digite um número: "));
   limparTabuada();
   //criar uma variável que servira de indice
   var i = 0;
   //enquanto indice <=1000
   //concatena na variável mensagem
   while (i <= 10) {
      var resultado = i * n;
      mensagem += `${n} X ${i} = ${resultado} <br>`;
      i++;
   }
   // mostrar mensagem no output
   output.innerHTML = mensagem;
}

function limparTabuada() {
   mensagem = "";
   output.innerHTML = mensagem;
}

// Tambémm consigo fazer isso com o metodo addEventListener
// button.addEventListener("click", mostrarTabuada);
