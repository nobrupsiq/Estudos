algoritmo "semnome"
var
n1, n2, media: real

inicio
escreva ("Digite a primeira nota do aluno: ")
leia(n1)
escreva ("Digite a segunda nota do aluno: ")
leia(n2)

media <- (n1 + n2)/2

escreval("MEDIA",media)

se (media >=7) entao
   escreva ("O aluno teve um bom aproveitamento")
senao
     escreva ("O aluno não teve um bom aproveitamento!")
fimse

fimalgoritmo
