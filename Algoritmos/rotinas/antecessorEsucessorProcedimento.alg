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
escreval ("O Antecessor de",a," �", ant)
escreval ("O Sucessor de",a," �", suc)
fimprocedimento

//Global
inicio
escreva("Digite um n�mero: ")
leia(n)
antSuces(n)
fimalgoritmo
