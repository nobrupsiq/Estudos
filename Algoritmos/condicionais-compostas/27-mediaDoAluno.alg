algoritmo "semnome"
var
n1, n2, media: real
inicio
escreva ("Digite a primeira nota: ")
leia(n1)
escreva ("Digite a segunda nota: ")
leia(n2)

media <- (n1 + n2) / 2

se (media < 4.9) entao
   escreva ("Média até 4.9: REPROVADO")
senao
     se (media > 5) e (media < 6.9) entao
        escreva ("Média entre 5.0 e 6.9: RECUPERAÇÃO")
     senao
          se (media >= 7) entao
             escreva ("Média 7.0 ou superior: APROVADO")
          fimse
     fimse
fimse

fimalgoritmo
