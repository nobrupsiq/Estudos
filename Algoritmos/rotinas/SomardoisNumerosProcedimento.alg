algoritmo "SomardoisNumerosProcedimento"
var
n1, n2: inteiro

procedimento soma(a,b: inteiro)
var
calculo: inteiro
inicio
calculo <- a + b
escreval("A soma entre",a," e",b," � igual a ",calculo)
fimprocedimento

inicio
escreva ("Digite um n�mero: ")
leia(n1)
escreva ("Digite outro n�mero: ")
leia(n2)
soma(n1,n2)
fimalgoritmo
