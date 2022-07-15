algoritmo "semnome"
var
p1, p2: caractere
inicio
escreval ("-----------------")
escreval ("    JO-KEN-PO    ")
escreval ("-----------------")

escreval ("--DIGITE--")
escreval ("[1] PEDRA")
escreval ("[2] PAPEL")
escreval ("[3] TESOURA")
escreval (" ")
escreva ("PLAYER 1: ")
leia(p1)

limpatela


escreval ("-----------------")
escreval ("    JO-KEN-PO    ")
escreval ("-----------------")

escreval ("--DIGITE--")
escreval ("[1] PEDRA")
escreval ("[2] PAPEL")
escreval ("[3] TESOURA")
escreval (" ")
escreva ("PLAYER 2: ")
leia(p2)

se (p1 = 1) e (p2 = 3) entao
   escreval (" ")
   escreval ("Player 1: PEDRA")
   escreval ("Player 2: TESOURA")
   escreval (" ")
   escreval ("---PLAYER 1 WINNER---")
senao
     se (p1 = 1) e (p2 = 2) entao
        escreval ("Player 1: PEDRA")
        escreval ("Player 2: PAPEL")
        escreval (" ")
        escreval ("---PLAYER 2 WINNER---")
     senao
          se (p1 = 1) e (p2 = 1) entao
             escreval ("Player 1: PEDRA")
             escreval ("Player 2: PEDRA")
             escreval (" ")
             escreval ("----EMPATE----")
          senao
               se (p1 = 2) e (p2 = 3) entao
                  escreval ("Player 1: PAPEL")
                  escreval ("Player 2: TESOURA")
                  escreval (" ")
                  escreval ("---PLAYER 2 WINNER---")
               senao
                    se (p1 = 2) e (p2 = 1) entao
                       escreval ("Player 1: PAPEL")
                       escreval ("Player 2: PEDRA")
                       escreval (" ")
                       escreval ("---PLAYER 1 WINNER---")
                    senao
                         se (p1 = 2) e (p2 = 2) entao
                            escreval ("Player 1: PAPEL")
                            escreval ("Player 2: PAPEL")
                            escreval (" ")
                            escreval ("----EMPATE----")
                         senao
                              se (p1 = 3) e (p2 = 1) entao
                                 escreval ("Player 1: TESOURA")
                                 escreval ("Player 2: PEDRA")
                                 escreval (" ")
                                 escreval ("---PLAYER 2 WINNER---")
                              senao
                                   se (p1 = 3) e (p2 = 2) entao
                                      escreval ("Player 1: TESOURA")
                                      escreval ("Player 2: PAPEL")
                                      escreval (" ")
                                      escreval ("---PLAYER 1 WINNER---")
                                   senao
                                        se (p1 = 3) e (p2 = 3) entao
                                           escreval ("Player 1: TESOURA")
                                           escreval ("Player 2: TESOURA")
                                           escreval (" ")
                                           escreval ("----EMPATE----")
                                        fimse
                                   fimse
                              fimse
                         fimse
                    fimse
               fimse
          fimse
     fimse
fimse
fimalgoritmo
