algoritmo "atividadeFisica"
var
horas: inteiro
pontos, total: real
inicio
escrevaL ("---------------------PONTOS DE ATIVIDADE----------------")
escreval (" ")
escreval ("- Até 10h de atividade no mês: 2 pontos por hora")
escreval ("- De 10h até 20h de atividade no mês: 5 pontos por hora")
escreval ("- Acima de 20h de atividade no mês: 10 pontos por hora")
escreval ("- A cada ponto ganho, o cliente fatura R$0,05 (centavos)")
escreval (" ")
escreva ("Horas de atividades praticadas no mês: ")
leia(horas)

se (horas <= 10) entao
   pontos <- horas*2
   total <- pontos*0.10
   escreval (" ")
   escreval ("Seu total de pontos =",pontos)
   escreval ("Ganho de R$",total)
senao
     se (horas > 10) e (horas <= 20) entao
        pontos <- horas*5
        total <- pontos*0.10
        escreval (" ")
        escreval ("Seu total de pontos =",pontos)
        escreval ("Ganho de R$",total)
     senao
          se (horas > 20) entao
             pontos <- horas*10
             total <- pontos*0.10
             escreval (" ")
             escreval ("Seu total de pontos =",pontos)
             escreval ("Ganho de R$",total)
          fimse
     fimse
fimse
fimalgoritmo
