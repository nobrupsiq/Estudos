algoritmo "fumanteDiasPerdidosProcedimento"

//[DESAFIO] Escreva um programa para calcular a redução do tempo de vida de um
//fumante. Pergunte a quantidade de cigarros fumados por dias e quantos anos ele
//já fumou. Considere que um fumante perde 10 min de vida a cada cigarro. Calcule
//quantos dias de vida um fumante perderá e exiba o total em dias.

var
qtdCigarros, anos: inteiro

procedimento diasVidaPerdido(a, b: inteiro)
var
dias, totalcig, diasperdidos, diaPminutos: inteiro
diasDeVida: real
inicio
dias := b * 365                       // Anos em Dias
totalcig := a * dias                  // total de cigarros em dias
diasperdidos := totalcig              // diasperdidos recebendo o total de cigarros fumados por dia
diaPminutos := dias * 1440            // transformando dias para minutos
diasDeVida := (totalcig * 10) / 1440  // total de cigarros*10(10 minutos a cada cigarro) dividido por 1440 minutos(1 dia)

escreva ("Você ja perdeu ", diasDeVida:2," Dias de vida!")
fimprocedimento

inicio
escreva ("Quantidade de cigarros fumados por dia: ")
leia(qtdCigarros)
escreva ("Fuma a quantos anos: ")
leia(anos)
diasVidaPerdido(qtdCigarros, anos)
fimalgoritmo
