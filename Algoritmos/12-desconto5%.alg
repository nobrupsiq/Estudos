algoritmo "promocao5%"
var
produto: caractere
valor, desconto: real

inicio
escreva ("Qual o produto que deseja comprar? ")
leia(produto)
escreva ("Qual o valor do produto? ")
leia(valor)
escreval ("O valor do ", produto, " R$", valor)
escreval ("*** PROMOÇAO DE JULHO ***")
desconto <- valor - (valor*(5/100))
escreva ("O VALOR DO PRODUTO COM O DESCONTO DE 5%: R$", desconto)



fimalgoritmo
