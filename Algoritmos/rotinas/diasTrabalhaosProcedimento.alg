algoritmo "diasTrabalhadosR$"
//Crie um programa que leia o número de dias trabalhados em um mês e mostre o
//salário de um funcionário, sabendo que ele trabalha 8 horas por dia e ganha R$25
//por hora trabalhada.
var
dias: inteiro

procedimento trabalhoSal(d: inteiro)
var
salario: real
inicio
salario := d * 200
escreval ("Trabalhou",d," Dia(s) O seu salário da um total de R$",salario," Reais")
fimprocedimento

inicio
escreva ("Dias trabalhados no mês: ")
leia(dias)

trabalhoSal(dias)
fimalgoritmo
