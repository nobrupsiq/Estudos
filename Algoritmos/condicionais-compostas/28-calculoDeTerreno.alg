algoritmo "semnome"
var
larg, comp, terreno: real
inicio
escreva ("Digite a largura do terreno em [M]:")
leia(larg)
escreva ("Digite o comprimento do terreno em [M]:")
leia(comp)

terreno <- larg * comp

se (terreno < 100^2) entao
   escreva ("Abaixo de 100m� = TERRENO POPULAR")
senao
     se (terreno >= 100^2) e (terreno <= 500^2) entao
        escreva ("Entre 100m� e 500m� = TERRENO MASTER")
     senao
          se (terreno > 500^2) entao
             escreva ("Acima de 500m� = TERRENO VIP")
          fimse
     fimse
fimse

fimalgoritmo
