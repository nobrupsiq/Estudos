// fazer jogador1 digitar um numero
var jogador1 = parseInt(prompt("Digite um numero"));

// fazer jogador2 digitar um numero
var jogador2 = parseInt(prompt("Digite um numero"));

// se forem iguais, mostrar mensagem 'empate'
if (jogador1 === jogador2) {
   alert("EMPATE");
} else {
   var nSorteado = parseInt(Math.random(0, 1) * 2);
   alert("nSorteado: " + nSorteado);
   if (
      (nSorteado === 0 && jogador1 < jogador2) ||
      (nSorteado === 1 && jogador1 > jogador2)
   ) {
      alert("JOGADOR 1 É O VENCEDOR!");
   } else {
      alert("JOGADOR 2 É O VENCEDOR!");
   }
}
// se nao forem iguais, sortear um numero entre 1 e 0

// se o numero sorteado for 0, ganha quem escolher o MENOR

// se o numero sorteado for 1, ganha quem escolher o MAIOR
