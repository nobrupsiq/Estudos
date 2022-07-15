algoritmo "semnome"

var
metros, km, hm, dam, dm, cm, mm: real
inicio
escreva ("Digite uma distancia em metros: ")
leia(metros)

km <- metros/1000
hm <- metros/100
dam <- metros/10
dm <- metros*10
cm <- metros*100
mm <- metros*1000

escreval (km," KM")
escreval (hm," HM")
escreval (dam," DAM")
escreval (dm," DM")
escreval (cm," CM")
escreval (mm," MM")

fimalgoritmo
