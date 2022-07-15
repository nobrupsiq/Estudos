algoritmo "ParOuImparProcedimento"
var
n:inteiro
procedimento ParOuImpar(v: inteiro)
inicio
se (v % 2 = 0) entao
   escreva (v," E PAR")
senao
     escreva (v," E IMPAR")
fimse
Fimprocedimento
inicio
escreva ("Digite um numero: ")
leia(n)
ParOuImpar(n)
escreval("O valor de v e ",v)
escreval("O valor de n e ",n)
fimalgoritmo
