algoritmo "aumento15%salarioProcedimento"
//Fa�a um algoritmo que leia o sal�rio de um funcion�rio, calcule e mostre o
//seu novo sal�rio, com 15% de aumento.
var
sal: real
procedimento aumento(a: real)
var
nvsal: real
inicio
nvsal := sal + sal*(15/100)
escreval("Sal�rio do funcion�rio com 15% de aumento R$",nvsal)
fimprocedimento

inicio
escreva ("Sal�rio do funcion�rio R$:")
leia(sal)
aumento(sal)
fimalgoritmo
