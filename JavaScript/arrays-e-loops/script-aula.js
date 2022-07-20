// Array é um grupo de valores geralmente relacionados. Servem para guardarmos diferentes valores em uma única variável.

var videoGames = ["Switch", "PS4", "XBox"];

videoGames[0]; // Switch
videoGames[2]; // Xbox

// MÉTODOS E PROPRIEDADES DE UMA ARRAY

// videoGames.pop(); // Remove o último item e retorna ele
videoGames.push("3DS"); // Adiciona ao final da array
videoGames.length; // 3

// LOOP

// for (var numero = 0; numero <= 10; numero++) {
//   console.log(numero);
// }

// WHILE LOOP

var i = 0;
while (i <= 4) {
  console.log(i);
  i++;
}

// ARRAYS E LOOPS

for (var i = 0; i < videoGames.length; i++) {
  console.log(videoGames[i]);
}

// BREAK

for (var i = 0; i < videoGames.length; i++) {
  console.log(videoGames[i]);
  if (videoGames[i] === "PS4") {
    console.log("-BREAK-");
    break;
  }
}

// FOREACH

// ForEach é um método que executa uma função para cada item da Array. É uma forma mais simples de utilizarmos um loop com arrays (ou array-like)

var frutas = ["Banana", "Pera", "Maçã", "Abacaxi", "Uva"];

frutas.forEach(function (fruta, index, array) {
  console.log(fruta, index, array);
});

var videoGames = ["Switch", "PS4", "Xbox", "3DS"];
videoGames.forEach(function (item) {
  console.log(item);
});
//O argumento item será atribuído dinamicamente
//Podemos passar os seguintes parâmetros (item, index e array)
