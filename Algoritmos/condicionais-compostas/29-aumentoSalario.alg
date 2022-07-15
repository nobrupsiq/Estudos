algoritmo "semnome"
var
nome: caracter
idade, tempo: inteiro
sal, nvsal: real
inicio
escreva ("Digite o nome do funcionario: ")
leia(nome)
escreva ("Digite a idade do funcionario: ")
leia(idade)
escreva ("Digite o salário do funcionario R$:")
leia(sal)
escreva ("Quntos anos o funcionario trabalha na empresa: ")
leia(tempo)

se (tempo <= 3) entao
   nvsal <- sal + sal*(3/100)
   escreva ("Novo salario de ",nome," é R$",nvsal, " Reais")
senao
     se (tempo > 3) e (tempo <= 10) entao
        nvsal <- sal + sal*(12.5/100)
        escreva ("Novo salario de ",nome," é R$", nvsal," Reais")
     senao
          se (tempo > 10) entao
             nvsal <- sal + sal*(20/100)
             escreva ("Novo salario de ",nome, " é R$", nvsal," Reais")
          fimse
     fimse
fimse
fimalgoritmo
