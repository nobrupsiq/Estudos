// Exercício Proposto

// Para esta tarefa reescreva o código da aula anterior, mas inserindo uma linha divisória sempre que mudar a dezena. Ou seja, entre o 10 e o 11, entre o 20 e o 21 e assim por diante.

// Dica: para escrever uma linha horizontal, use a tag <hr>
var numero = parseFloat(prompt("Digite um número: "));

for (var i = 0; i <= 30; i++) {
   document.write(numero + "x" + i + " = " + numero * i + " <br>");
   if (i % 10 === 0 && i > 0) {
      document.write("<hr></hr>");
   }
}

document.write("saiu do loop");
