// Pedir para o usuário digitar um número de 1 a 6.

// Mostrar na tela uma mensagem diferente para cada número

var n = parseInt(prompt("Digite um número: "));

switch (n) {
   case 1:
      alert("boa escolha");
      break;
   case 2:
      alert("legal");
      break;
   case 3:
      alert("muito bom");
      break;
   default:
      alert("escolha de 1 a 3");
}
