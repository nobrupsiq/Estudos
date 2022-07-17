algoritmo "parOUimparFuncao"
var
   n: inteiro
   r: caractere
funcao parOuImpar(v: inteiro) :caractere
inicio
      se (v % 2 = 0) entao
      retorne "PAR"
      senao
           retorne "IMPAR"
      fimse
fimfuncao

inicio
      escreva("Digite um número: ")
      leia(n)
      r <- parOuImpar(n)
      escreva ("O numero",n," e um valor ",r)
fimalgoritmo
