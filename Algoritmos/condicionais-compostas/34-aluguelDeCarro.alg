algoritmo "semnome"
var
opcao, dias: inteiro
km, total: real

inicio
escreval ("*--ALUGUEL DE CARRO--*")
escreval (" ")
escreval ("ESCOLHA O TIPO DE CARRO:")
escreval (" ")
escreval ("[1] CARRO POPULAR R$90/DIA")
escreval ("[2] CARRO DE LUXO R$150/DIA")
leia(opcao)
escreva ("Por quantos dias? ")
leia (dias)
escreva ("Quantos KM foram percorridos? ")
leia (km)

se (opcao = 1) e (km <= 100) entao
   total <- dias*90 + km*0.10
   escreval ("O total a ser pago é R$", total)
senao
     se (opcao = 2) e (km > 100) entao
        total <- dias*150 + km*0.30
        escreval ("O total a ser pago é R$", total)
     fimse
fimse
fimalgoritmo
