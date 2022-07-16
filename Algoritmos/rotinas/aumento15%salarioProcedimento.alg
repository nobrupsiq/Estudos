algoritmo "aumento15%salarioProcedimento"
//Faça um algoritmo que leia o salário de um funcionário, calcule e mostre o
//seu novo salário, com 15% de aumento.
var
sal: real
procedimento aumento(a: real)
var
nvsal: real
inicio
nvsal := sal + sal*(15/100)
escreval("Salário do funcionário com 15% de aumento R$",nvsal)
fimprocedimento

inicio
escreva ("Salário do funcionário R$:")
leia(sal)
aumento(sal)
fimalgoritmo
