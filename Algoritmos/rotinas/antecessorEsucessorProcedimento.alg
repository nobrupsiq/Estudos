algoritmo "semnome"
var
n: inteiro

//Local
procedimento antSuces(a: inteiro)
var
ant, suc: inteiro
inicio
ant := a - 1
suc := a + 1
escreval ("O Antecessor de",a," é", ant)
escreval ("O Sucessor de",a," é", suc)
fimprocedimento

//Global
inicio
escreva("Digite um número: ")
leia(n)
antSuces(n)
fimalgoritmo
