algoritmo "dobroTer�aparteProcedimento"
var
n: real
procedimento dobroTerca(a:real)
var
dobro, terca: real
inicio
dobro := a * 2
terca := a/3
escreval ("O dobro de",a," �",dobro)
escreval ("A ter�a parte de",a," � ",terca:7:5)
fimprocedimento
inicio
escreva ("Digite um n�mero real: ")
leia(n)
dobroTerca(n)
fimalgoritmo
