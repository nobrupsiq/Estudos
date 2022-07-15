algoritmo "numeroIncrementado2"
var
vinicial, vfinal, incremento, i: inteiro
inicio

escreva ("Digite o valor INICIAL: ")
leia(vinicial)
escreva ("Digite o valor FINAL: ")
leia(vfinal)
escreva ("Digite o INCREMENTO: ")
leia(incremento)

i <- vinicial

se (i > vfinal) entao
   enquanto (i > vfinal) faca
            escreva(i)
            i <- i - incremento
   fimenquanto
senao
     se (i < vfinal) entao
         enquanto (i < vfinal) faca
                  escreva(i)
                  i <- i + incremento
         fimenquanto
     fimse
fimse
escreval (" ACABOU!")
fimalgoritmo
