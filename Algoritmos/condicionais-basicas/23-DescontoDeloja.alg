algoritmo "semnome"
var
sexo, nome: caractere
valorCompras, desconto, total: real

inicio
escreva ("Digite o seu nome: ")
leia(nome)
escreva ("Digite o seu sexo [M/F]: ")
leia(sexo)
escreva ("Valor total das suas compras R$")
leia(valorCompras)

se (sexo = "m") entao
   desconto <- valorCompras*(5/100)
   total <- valorCompras - desconto
   escreval ("Voce receberá um desconto de R$",desconto," Reais. TOTAL: R$", total)
fimse
se (sexo = "f") entao
   desconto <- valorCompras*(13/100)
   total <- valorCompras - desconto
   escreval ("Voce recebera um desconto de R$",desconto," Reais. TOTAL: R$",total)
fimse
fimalgoritmo
