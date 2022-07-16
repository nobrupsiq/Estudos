algoritmo "desconto5%Procedimento"
var
valor: real

procedimento descontao(a: real)
var
calc: real
inicio
calc := a - a*(5/100)
escreval ("5% de desconto total R$", calc)
fimprocedimento

inicio
escreva ("Qual o valor do produto R$")
leia(valor)
escreval ("-----MEGA DESCONTO DE JULHO------")
descontao(valor)

fimalgoritmo
