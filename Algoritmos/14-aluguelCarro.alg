algoritmo "AluguelDeCarro"

var
km, dia, calc: real
inicio
escreva ("Quantidade de KM que o carro percorreu? ")
leia(km)
escreva ("Quantos dias o carro ficou alugado: ")
leia(dia)
calc <- (km * 0.20) + (dia * 90)

escreva ("Total a ser pago R$", calc)

fimalgoritmo
