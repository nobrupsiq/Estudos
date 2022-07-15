algoritmo "fibonacciProcedimento"
var
count, n1, n2, n3: inteiro
procedimento proximoFibonacci(var a, b: inteiro)
var c: inteiro
inicio
c := a + b
escreva (c)
a := b
b := c
fimprocedimento

inicio
n1 <- 0
escreva (n1)
n2 <- 1
escreva (n2)
para count <- 3 ate 10 faca
     proximoFibonacci(n1, n2)
fimpara
fimalgoritmo
