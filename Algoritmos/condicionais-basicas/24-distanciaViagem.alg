algoritmo "distanciaViagem"
var
dist, valor, total: real
inicio
escreva ("Digite a distancia que deseja percorrer [KM]:")
leia(dist)

se (dist <= 200) entao
   total <- dist*0.5
   escreva ("total a pagar pela viagem R$",total," Reais")
fimse
se (dist > 200) entao
   total <- dist*0.45
   escreva ("total a pagar pela viagem R$",total," Reais")
fimse

fimalgoritmo
