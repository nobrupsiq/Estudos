algoritmo "diasTrabalhadosR$"
//Crie um programa que leia o n�mero de dias trabalhados em um m�s e mostre o
//sal�rio de um funcion�rio, sabendo que ele trabalha 8 horas por dia e ganha R$25
//por hora trabalhada.
var
dias: inteiro

procedimento trabalhoSal(d: inteiro)
var
salario: real
inicio
salario := d * 200
escreval ("Trabalhou",d," Dia(s) O seu sal�rio da um total de R$",salario," Reais")
fimprocedimento

inicio
escreva ("Dias trabalhados no m�s: ")
leia(dias)

trabalhoSal(dias)
fimalgoritmo
