algoritmo "valorMaiorOUmenor"
var
n1, n2: inteiro
inicio
escreva("Digite um valor: ")
leia(n1)
escreva ("Digite outro valor: ")
leia(n2)

se (n1 > n2) entao
   escreva("O primeiro valor é o maior")
senao
     se (n2 > n1) entao
        escreva("O segundo valor é o maior")
     senao
          se (n1 = n2) entao
             escreva ("Não existe valor maior, os dois são iguais")
          fimse
     fimse
fimse


fimalgoritmo
