algoritmo "parOuImparProcedimento"

//Desenvolva um programa que leia um n�mero inteiro e mostre se ele � PAR ou
//�MPAR

var
n: inteiro

procedimento parOUimpar(a: inteiro)
var

inicio
se (a % 2 = 0) entao
   escreva(a, " � PAR")
senao
     escreva(a, " � �MPAR")
fimse
fimprocedimento

inicio
escreva ("Digite um n�mero inteiro: ")
leia(n)
parOUimpar(n)
fimalgoritmo
