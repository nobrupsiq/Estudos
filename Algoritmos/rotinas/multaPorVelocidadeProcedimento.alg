algoritmo "multaPorVelocidade"

//Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse
//80Km/h, exiba uma mensagem dizendo que o usuário foi multado. Nesse caso, exiba
//o valor da multa, cobrando R$5 por cada Km acima da velocidade permitida.

var
velo: inteiro

procedimento veloMulta(v: inteiro)
var
multa: real
inicio
se (v > 80) entao
   v := v - 80
   multa := v * 5
   escreval ("VOCÊ FOI MULTADO")
fimse
escreva ("O valor da multa R$",multa," Reais")
fimprocedimento

inicio
escreva ("Qual a velocidade do carro em [KM]: ")
leia(velo)
veloMulta(velo)
fimalgoritmo
