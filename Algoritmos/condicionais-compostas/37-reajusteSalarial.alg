algoritmo "reajusteSalarial"
var
sal, reajuste, novosal: real
tempo: inteiro
genero: caractere
inicio
escreva ("Sal�rio atual do funcion�rio R$: ")
leia(sal)
escreva ("[M/F] ? ")
leia(genero)
escreva ("Quantos anos de empresa [YYYY]: ")
leia(tempo)

se (genero = "f") e (tempo <= 15) entao
   reajuste <- sal*(5/100)
   novosal <- sal + reajuste
   escreval ("O seu novo sal�rio ser� de R$:",novosal)
senao
     se (genero = "f") e (tempo > 15) e (tempo <= 20) entao
        reajuste <- sal*(12/100)
        novosal <- sal + reajuste
        escreval ("O seu novo sal�rio ser� de R$:",novosal)
     senao
          se (genero = "f") e (tempo > 20) entao
             reajuste <- sal*(23/100)
             novosal <- sal + reajuste
             escreval ("O seu novo sal�rio ser� de R$:",novosal)
          fimse
     fimse
fimse

se (genero = "m") e (tempo <= 20) entao
    reajuste <- sal*(3/100)
    novosal <- sal + reajuste
    escreval ("O seu novo sal�rio ser� de R$:",novosal)
senao
     se (genero = "m") e (tempo > 20) e (tempo <= 30) entao
        reajuste <- sal*(13/100)
        novosal <- sal + reajuste
        escreval ("O seu novo sal�rio ser� de R$:",novosal)
     senao
          se (genero = "m") e (tempo > 30) entao
             reajuste <- sal*(25/100)
             novosal <- sal + reajuste
             escreval ("O seu novo sal�rio ser� de R$:",novosal)
          fimse
     fimse
fimse
fimalgoritmo
