algoritmo "FatorialFuncao"
var
n, f: inteiro

funcao fatorial(v: inteiro):inteiro
var
   contador, resultado: inteiro
inicio
      resultado := 1
      para contador <- 1 ate v faca
           resultado <- resultado * contador
      fimpara
      retorne resultado
fimfuncao


inicio
      escreva("Digite um numero: ")
      leia(n)
      f <- fatorial(n)
      escreval ("O valor de",n, "! e igual a ",f)
fimalgoritmo
