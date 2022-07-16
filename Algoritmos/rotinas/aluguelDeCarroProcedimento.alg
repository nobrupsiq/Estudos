algoritmo "AluguelDeCarroProcedimento"
//A locadora de carros precisa da sua ajuda para cobrar seus serviços. Escreva
//um programa que pergunte a quantidade de Km percorridos por um carro alugado e a
//quantidade de dias pelos quais ele foi alugado. Calcule o preço total a pagar,
//sabendo que o carro custa R$90 por dia e R$0,20 por Km rodado.
var
km: real
dias: inteiro

procedimento valorAluguel(a,b:real)
var
total: real
inicio
a := a * 0.20
b := b * 90
total := a + b
escreval ("O valor total a ser pago R$",total)
fimprocedimento

inicio
escreva ("Distância percorrida em [KM]: ")
leia(km)
escreva ("Quantos dias ficou alugado? ")
leia(dias)

valorAluguel(km, dias)
fimalgoritmo
