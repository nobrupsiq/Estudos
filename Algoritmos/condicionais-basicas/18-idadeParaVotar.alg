algoritmo "semnome"
var
ano, idade: inteiro

inicio
escreva ("Digite seu ano de nascimento[yyyy]: ")
leia(ano)

idade <- 2022 - ano

se (idade >= 18) entao
   escreval(idade," Anos voce ja pode votar")
senao
     escreval(idade," Anos ainda nao pode votar")
fimse
fimalgoritmo
