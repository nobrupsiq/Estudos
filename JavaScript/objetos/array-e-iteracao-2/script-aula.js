// PODEMOS RETORNAR OUTROS VALORES

const aulas = [
  {
    nome: 'HTML 1',
    min: 15
  },
  {
    nome: 'HTML 2',
    min: 10
  },
  {
    nome: 'CSS 1',
    min: 20
  },
  {
    nome: 'JS 1',
    min: 25
  },
]

const listaAulas = aulas.reduce((acumulador, aula, index) => {
  acumulador[index] = aula.nome;
    return acumulador;
}, {})


// PASSO A PASSO REDUCE
// Passo a passo do método reduce criando um Objeto.

// 1
// aulas.reduce(({}, {nome: 'HTML 1', min: 15}, 0) => {
//   {}[0] = 'HTML 1';
//   return {0: 'HTML 1'};
// }, {})

// // 2
// aulas.reduce(({0: 'HTML 1'}, {nome: 'HTML 2', min: 10}, 1) => {
//   {0: 'HTML 1'}[1] = 'HTML 2';
//   return {0: 'HTML 1', 1: 'HTML 2'};
// }, {})

// // 3
// aulas.reduce(({0: 'HTML 1', 1: 'HTML 2'}, {nome: 'CSS 1', min: 20}, 2) => {
//   {0: 'HTML 1', 1: 'HTML 2'}[2] = 'CSS 1';
//   return {0: 'HTML 1', 1: 'HTML 2', 2: 'CSS 1'};
// }, {})

// // 4
// aulas.reduce(({0: 'HTML 1', 1: 'HTML 2', 2: 'CSS 1'}, {nome: 'JS 1', min: 25}, 3) => {
//   {0: 'HTML 1', 1: 'HTML 2', 2: 'CSS 1'}[3] = 'JS 1';
//   return {0: 'HTML 1', 1: 'HTML 2', 2: 'CSS 1', 3: 'JS 1'};
// }, {})


// [].REDUCERIGHT()
// Existe também o método [].reduceRight(), a diferença é que este começa a iterar da direita para a esquerda, enquanto o reduce itera da esquerda para a direita.

const frutas = ['Banana', 'Pêra', 'Uva'];

const frutasRight = frutas.reduceRight((acc, fruta) => acc + ' ' + fruta);
const frutasLeft = frutas.reduce((acc, fruta) => `${acc} ${fruta}`);

frutasRight; // Uva Pêra Banana
frutasLeft; // Banana Pêra Uva


// [].SOME()
// [].some(), se pelo menos um return da iteração for truthy, ele retorna true.

const frutas2 = ['Banana', 'Pêra', 'Uva'];

const temUva = frutas2.some((i) => {
  return i === 'Uva';
});


// [].EVERY()
// [].every(), se todos os returns das iterações forem truthy, o método irá retornar true. Se pelo menos um for falsy, ele irá retornar false.

const frutas3 = ['Banana', 'Pêra', 'Uva', ''];
// False pois pelo menos uma fruta
// está vazia '', o que é um valor falsy
const arraysCheias = frutas3.every((fruta) => {
  return fruta; // false
});

const numeros = [6, 43, 22, 88, 101, 29];
const maiorQue3 = numeros.every(n => n > 3); // true

