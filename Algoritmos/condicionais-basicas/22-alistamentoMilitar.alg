algoritmo "alistamento"
var
nasc, idade, alist: real
inicio
escreva ("Ano de nascimento: ")
leia(nasc)

idade <- 2022 - nasc

se (idade > 18) entao
   alist <- idade -18
   escreva (idade," ja passou",alist," Anos da epoca de alistamento")
fimse
se (idade < 18) entao
   alist <- 18 - idade
   escreva (idade," Ainda faltam",alist," Anos para o alistamento")
fimse
se (idade = 18) entao
   escreva(idade," Esse é o ano do seu alistamento")
fimse

fimalgoritmo
