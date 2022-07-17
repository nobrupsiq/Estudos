algoritmo "semnome"
var
   n: caractere
   c: inteiro
inicio
      escreva("Digite o seu nome: ")
      leia(n)
      escreval("Total de letras do seu nome: ", compr(n))
      escreval("Seu nome em maiusculas e: ", maiusc(n))
      escreval("Seu nome em minusculas e: ", minusc(n))
      escreval("A primeira letra do seu nome e: ", copia(n, 1, 1))
      escreval("A ultima letra do seu nome e ", copia(maiusc(n), compr(n),1))
      escreval("Seu nome tem a letra U na posicao ", pos("u", n))
      escreval("O codigo da letra U e", asc("u"))
      escreval("A letra de codigo 117 e ", carac(117))
      
      para c := compr(n) ate 1 passo -1 faca
           escreva(copia(Maiusc(n),c,1))
      fimpara
fimalgoritmo
