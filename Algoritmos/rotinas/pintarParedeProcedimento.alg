algoritmo "pintarParedeProcedimento"
var
largura, altura, area: real

procedimento pintura(a: real)
var
tinta: real
inicio
tinta := tinta + area^(1/2)
escreval("�rea a ser pintada",a,"M�. Vai ser preciso ",tinta:4:2,"L de tinta")
fimprocedimento

inicio
escreva ("Digite a largura da parede: ")
leia(largura)
escreva ("Digite a altura da parede: ")
leia(altura)
area := (largura + altura)^2
pintura(area)
fimalgoritmo
