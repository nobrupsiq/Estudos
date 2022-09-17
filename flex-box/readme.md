# FlexBlog!

> Projeto desenvolvido durante o curso de Flexbox na Origamid 🐺

<br>

![preview](./.github/preview.png)

[🔗 Clique aqui para acessar](https://nobrupsiq.github.io/Estudos/flex-box/)

<br>

## ⚙ Tecnologias

-  HTML
-  CSS

## O que eu aprendi? 📚

Algumas coisas que foram novas para mim durante essa jornada e algumas que foram reforçadas.

-  Usar o `padding: 60px calc((100% - 960px) / 2)` na seção Newsletter me ajudou a economizar algumas linhas de código. Não preciso necessariamente criar um container se eu quiser que o meu background pegue 100% da minha página.

-  Atalho muito bom no uso do Flexbox `flex: 1 1 0` sendo o primeiro número o `GROW`, o segundo número o `SHRINK` e o terceiro número o `BASIS`.

-  `flex: 1` Define `flex-grow: 1` , `flex-shrink: 1` e `flex-basis: 0` (em alguns browsers define como 0%, pois estes ignoram valores sem unidades, porém a função de 0 e 0% é a mesma.

-  `flex: 0 1 auto` Esse é o padrão, se você não definir nenhum valor de flex ou para as outras propriedades separadas, o normal será `flex-grow: 0`, `flex-shrink: 1` e `flex-basis: auto`.

-  `flex: 2`, Define exatamente da mesma forma que o `flex: 1` porém neste caso o `flex-grow` será de 2, o `flex-shrink` continuará `1` e o `flex-basis 0`.

-  `flex: 3 2 300px`, `flex-grow: 3`, `flex-shrink: 2` e `flex-basis: 300px`;
