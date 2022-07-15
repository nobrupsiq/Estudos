algoritmo "maiorEmenorValor"
var
i: inteiro
menor, maior, valor: real
inicio
i <- 1

enquanto (i <= 3) faca
         escreva("Digite o valor do ",i,"° produto: ")
         leia(valor)
         se (i = 1) entao
            menor <- valor
            maior <- valor
         fimse
         se (valor > maior) entao
            maior <- valor
         fimse
         se (valor < menor) entao
            menor <- valor
         fimse
         i <- i + 1
fimenquanto
escreval ("O produto mais caro teve o valor de: R$", maior)
escreval ("O produto mais barato teve o valor de: R$", menor)

fimalgoritmo
