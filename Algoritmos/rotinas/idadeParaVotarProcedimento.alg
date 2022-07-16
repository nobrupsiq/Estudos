algoritmo "idadeParaVotarProcedimento"

//Faça um programa que leia o ano de nascimento de uma pessoa, calcule a idade
//dela e depois mostre se ela pode ou não votar
var
ano: inteiro

procedimento calculoIdade(i: inteiro)
var
anoAtual: inteiro
inicio
anoAtual := 2022
i := anoAtual - ano
se (i >= 18) entao
   escreva(i, " Anos! Já tem idade para votar!")
senao
     escreva(i, "Anos! Ainda não tem idade para votar!")
fimse
fimprocedimento
inicio
escreva ("Digite seu ano de nascimento [YYYY]: ")
leia(ano)
calculoIdade(ano)
fimalgoritmo
