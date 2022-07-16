algoritmo "dobroTerçaparteProcedimento"
var
n: real
procedimento dobroTerca(a:real)
var
dobro, terca: real
inicio
dobro := a * 2
terca := a/3
escreval ("O dobro de",a," é",dobro)
escreval ("A terça parte de",a," é ",terca:7:5)
fimprocedimento
inicio
escreva ("Digite um número real: ")
leia(n)
dobroTerca(n)
fimalgoritmo
