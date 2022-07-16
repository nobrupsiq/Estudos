algoritmo "diasTrabalhadosR$"
//Crie um programa que leia o número de dias trabalhados em um mês e mostre o
//salário de um funcionário, sabendo que ele trabalha 8 horas por dia e ganha R$25
//por hora trabalhada.
var
dias: inteiro

procedimento trabalhoSal(d: inteiro)
var
trab, hora := real
inicio
trab := 8
hora := 25


fimprocedimento

inicio
escreva ("Dias trabalhados no mês: ")
leia(dias)

trabalhoSal(dias)
fimalgoritmo
