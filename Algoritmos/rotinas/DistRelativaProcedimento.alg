algoritmo "DistanciaRelativa"
var
dist: real

procedimento medidas(a:real)
var
km, hm, dam, dm, cm, mm: real
inicio
km := a / 1000
hm := a / 100
dam := a / 10
dm := a * 10
cm := a * 100
mm := a * 1000
escreval (km," KM")
escreval (hm," HM")
escreval (dam," DAM")
escreval (dm," DM")
escreval (cm," CM")
escreval (mm," MM")
fimprocedimento

inicio
escreva ("Digite uma distância em metros: ")
leia(dist)
escreval ("A distância de",dist," corresponde a: ")
medidas(dist)
fimalgoritmo
