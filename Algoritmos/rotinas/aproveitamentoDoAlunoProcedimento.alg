algoritmo "mediaDoAlunoProcedimento"

//Crie um algoritmo que leia o nome e as duas notas de um aluno, calcule a sua
//média e mostre na tela. No final, analise a média e mostre se o aluno teve ou
//não um bom aproveitamento (se ficou acima da média 7.0).

var
n1, n2: real

procedimento calculoNota(a, b: real)
var
media: real
inicio
media := (a + b)/2
escreval("MEDIA: ",media)
se (media >= 7) entao
   escreva ("O aluno teve um bom aproveitamento!")
senao
     escreva ("O aluno não teve um bom aproveitamento!")
fimse
fimprocedimento

inicio
escreva ("Primeita nota: ")
leia(n1)
escreva ("Segunda nota: ")
leia(n2)

calculoNota(n1, n2)
fimalgoritmo
