algoritmo "idadeAlistamentoProcedimento"

//Escreva um programa que leia o ano de nascimento de um rapaz e mostre a sua
//situa��o em rela��o ao alistamento militar.
// - Se estiver antes dos 18 anos, mostre em quantos anos faltam para o
//alistamento.
// - Se j� tiver depois dos 18 anos, mostre quantos anos j� se passaram do
//alistamento.

var
nasc: inteiro

procedimento alistamento(a: inteiro)
var
idade, anoAtual, tempo: inteiro
inicio
anoAtual := 2022
idade := anoAtual - a
se (idade < 18) entao
   tempo := 18 - idade
   escreva(idade, " Anos! Faltam",tempo, " Anos para o Alistamento Militar!")
fimse
se (idade > 18) entao
   tempo := idade - 18
   escreva(idade, " Anos! J� se passaram",tempo, " Anos do seu Alistamento Militar!")
fimse
fimprocedimento

inicio
escreva("Digite o ano de nascimento [YYYY]: ")
leia(nasc)
alistamento(nasc)
fimalgoritmo
