algoritmo "valorDeDeltaProcedimento"
var
n1, n2, n3: real

procedimento delta(a, b, c: real)
var
formula: real
inicio
formula := (b^2)-(4*a*c)
escreval("O valor de DELTA: ",formula)
fimprocedimento

inicio
escreva ("Digite o valor de A: ")
leia(n1)
escreva ("Digite o valor de B: ")
leia(n2)
escreva ("Digite o valor de C: ")
leia(n3)


delta(n1, n2, n3)
fimalgoritmo
