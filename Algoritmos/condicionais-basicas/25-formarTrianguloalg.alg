algoritmo "formarTriangulo"
var
R1, R2, R3: real

inicio
escreva ("Reta 1: ")
leia(R1)
escreva ("Reta 2: ")
leia(R2)
escreva ("Reta 3: ")
leia(R3)

se (R1 + R2 = R3) entao
   escreva ("Pode formar um triangulo")
fimse
se (R2 + R3 = R1) entao
   escreva ("Pode formar um triangulo")
fimse
se (R3 + R1 = R2) entao
   escreva ("Pode formar um triangulo")
fimse
fimalgoritmo
