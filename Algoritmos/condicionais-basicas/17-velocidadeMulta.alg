algoritmo "semnome"
var
velocidade, valMulta, calc: real
inicio
escreva ("Qual a velocidade do carro? ")
leia(velocidade)

se (velocidade > 80) entao
   calc <- velocidade - 80
   valmulta <- calc * 5
   escreva ("Voce foi multado em R$", valmulta)
fimse
fimalgoritmo
