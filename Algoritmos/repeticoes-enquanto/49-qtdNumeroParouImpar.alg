algoritmo "quantidadeIMPouPAR"
var
i, n, contimpar, contpar: inteiro

inicio
i <- 1

enquanto (i <= 6 ) faca
         escreva (i,"° Numero: ")
         leia(n)
         se (n % 2 = 0) entao
            contpar <- contpar + 1
         senao
              se (n % 2 <> 0) entao
                 contimpar <- contimpar + 1
              fimse
         fimse
         i <- i + 1
fimenquanto
escreval ("NUMERO PAR:",contpar)
escreval ("NUMERO IMPAR:",contimpar)
fimalgoritmo
