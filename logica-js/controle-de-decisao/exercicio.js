// fazer jogador1 digitar um numero
var jogador1 = parseInt(prompt("Jogador 1 digite um número: "));

// fazer jogador2 digitar um numero
var jogador2 = parseInt(prompt("Jogador 2 digite um número: "));

// se forem iguais, mostrar mensagem 'empate' e encerra o programa
// se forem diferentes, sortear um numero entre 0 e 1. Se o numero sorteado for 0, ganha quem escolher o numero MENOR, senão, ganha quem escolheu o MAIOR

if (jogador1 === jogador2) {
   alert("EMPATE");
} else {
   var nSorteado = parseInt(Math.random(0, 1) * 2);
   if (nSorteado === 0) {
      if (jogador1 < jogador2) {
         console.log(nSorteado, "Ganhou o jogador 1");
      } else {
         console.log(nSorteado, "Ganhou o jogador 2");
      }
   } else {
      if (jogador1 > jogador2) {
         console.log(nSorteado, "Ganhou o jogador 1");
      } else {
         console.log(nSorteado, "Ganhou o jogador 2");
      }
   }
}
