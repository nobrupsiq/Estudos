algoritmo "realParaDolarProcedimento"
var
reais: real

procedimento conversor(x: real)
var
total: real
inicio
total := x / 3.45
escreval ("COTAÇÃO US$3.45")
escreva ("Com R$",x," Reais você conseguira comprar US$",total:6:2)
fimprocedimento

inicio
escreva ("Valor em dinheiro R$: ")
leia(reais)
conversor(reais)
fimalgoritmo
