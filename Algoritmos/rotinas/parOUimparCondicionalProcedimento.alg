algoritmo "parOuImparProcedimento"

//Desenvolva um programa que leia um número inteiro e mostre se ele é PAR ou
//ÍMPAR

var
n: inteiro

procedimento parOUimpar(a: inteiro)
var

inicio
se (a % 2 = 0) entao
   escreva(a, " É PAR")
senao
     escreva(a, " É ÍMPAR")
fimse
fimprocedimento

inicio
escreva ("Digite um número inteiro: ")
leia(n)
parOUimpar(n)
fimalgoritmo
