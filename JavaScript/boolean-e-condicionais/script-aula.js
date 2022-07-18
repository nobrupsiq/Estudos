if (5 - 5 && 5 + 5) {
  console.log("Verdadeiro");
} else {
  console.log("Falso");
}

if (5 - 10 && 5 + 5) {
  console.log("Verdadeiro");
} else {
  console.log("Falso");
}

var condicional2 = (5 - 5) || (5 + 5) && (10 - 2);
console.log(condicional2);


// SWITCH CASE

var corFavorita = 'Verde';

switch (corFavorita) {
  case 'Azul':
    console.log('Olhe para o céu.')
    break
  case 'Vermelho':
    console.log('Olhe para rosas.')
    break
  case 'Verde':
    console.log('Olhe para a floresta')
    break
  default:
    console.log('Feche os olhos')
}