algoritmo "semnome"
var
larg, alt, area, tinta: real

inicio
escreva ("Qual a altura da parede? ")
leia(alt)
escreva ("Qual a largura da parede? ")
leia(larg)
area <- (alt + larg)^2
tinta <- tinta + area^(1/2)
escreval (area,"M²")
escreval ("Voce ira precisar de", tinta,"L, para pintar a parede")

fimalgoritmo
