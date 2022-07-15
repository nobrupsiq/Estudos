algoritmo "detectorPesado"
var
i: inteiro
n, pesado: caractere
p, mai: real
procedimento topo()
inicio
limpatela
escreval ("----------------------------------")
escreval (" D E T E C T O R  DE  P E S A D O ")
escreval (" Maior Peso ate agora: ", mai, "kg")
escreval ("----------------------------------")
fimprocedimento

inicio

topo()
para i <- 1 ate 2 faca
   escreva("Digite o nome: ")
   leia(n)
   escreva("Digite o peso de ", n, ": ")
   leia(p)
   se (p > mai) entao
      mai <- p
      pesado <- n
   fimse
      topo()
fimpara

limpatela

topo()
escreval ("A pessoa mais pesada foi ",pesado,", com",mai," quilos.")

fimalgoritmo
