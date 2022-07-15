algoritmo "imc"
var
alt, peso, imc: real

inicio
escreva ("Qual é a sua altura?(M): ")
leia(alt)
escreva ("Qual o seu peso?(KG): ")
leia(peso)

imc <- peso/(alt*2)

se (imc < 18.5) entao
   escreva ("Abaixo do peso")
senao
     se (imc > 18.5) e (imc <= 25) entao
        escreval ("Peso ideal")
     senao
          se (imc > 25) e (imc <= 30) entao
             escreva ("Sobrepeso")
          senao
               se (imc > 30) e (imc <=40) entao
                  escreva ("Obesidade")
               senao
                    se (imc > 40) entao
                       escreva ("Obesidade mórbida")
                    fimse
               fimse
          fimse
     fimse
fimse
fimalgoritmo
