algoritmo "anoBissextoProcedimento"

//Fa�a um algoritmo que leia um determinado ano e mostre se ele � ou n�o
//BISSEXTO.

var
ano: inteiro

procedimento anoBissexto(a: inteiro)
var

inicio
se (a % 4 = 0) entao
   escreva("ANO BISSEXTO")
senao
     escreva("ANO NORMAL")
fimse
fimprocedimento

inicio
escreva ("Digite o ano atual [YYYY]: ")
leia(ano)
anoBissexto(ano)
fimalgoritmo
