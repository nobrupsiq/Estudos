algoritmo "semnome"

var
cig, tempo,calc, ano, dia, min, calc2, calc3, calc4, calc5: real
inicio
escreval ("--------------------------------------------")
escreval ("VOCE PERDE 10 MINUTOS DE VIDA A CADA CIGARRO")
escreval ("--------------------------------------------")
escreval (" ")
escreva ("Quantidade de cigarros fumados por dia? :")
leia(cig)
escreva ("Fuma por quantos anos? :")
leia(tempo)

ano <- 365
min <- 525600
dia <- 1440

calc <- dia - cig * 10  //1320
calc2 <- calc * ano     //1320 * 365 = 481.800
calc3 <- min - calc2    //525600 - 481.800 = 43.800
calc4 <- calc3/dia      //43.800 / 1440 = 30 DIAS
calc5 <- calc4 * tempo  //30 * tempo que a pessoa digitar

escreval ("---------------------------")
escreval ("| PERDEU: ", calc5:2, " DIAS DE VIDA |")
escreval ("---------------------------")

fimalgoritmo
