algoritmo "emprestimo"
var
casa, sal, vezes, juros, calc, calc2: real
inicio
escreva ("Qual o valor da casa que deseja comprar? R$")
leia(casa)
escreva ("Qual o salario do comprador? R$")
leia(sal)
escreva ("Irá pagar em quantas vezes? ")
leia(vezes)

calc <- sal*(30/100)
juros <- sal - calc
calc2 <- casa/vezes

se (calc2 > juros) entao
   escreva ("EMPRESTIMO NEGADO")
senao
     se (calc2 < juros) entao
        escreva ("EMPRESTIMO APROVADO")
     fimse
fimse

fimalgoritmo
