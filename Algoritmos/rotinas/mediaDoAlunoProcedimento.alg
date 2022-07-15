algoritmo "MediaDoAlunoProcedimento"
var
n1, n2: real
procedimento notaFinal(a,b: inteiro)
var
media: real

inicio
media := (n1 + n2) / 2
escreval ("A média do aluno foi", media)
fimprocedimento

inicio
escreva ("Digite a primeira nota do aluno: ")
leia(n1)
escreva ("Digite a segunda nota do aluno: ")
leia(n2)
notaFinal(n1, n2)
fimalgoritmo
