// STRING
// É a construtora de strings, toda string possui as propriedades e métodos do prototype de String.

const comida = 'Pizza';
const liquido = new String('Água');
const ano = new String(2018);

// STR.LENGTH
// Propriedade com o total de caracteres da string

const frase = 'A melhor comida';

comida.length; // 5
frase.length; // 15

comida[0] // P
frase[0] // A
frase[frase.length - 1] // a  Passou a frase.length tipo um index. EX frase[3]


// STR.CHARAT(N)
// Retorna o caracter de acordo com o index de (n).

const linguagem = 'JavaScript';

linguagem.charAt(0); // J
linguagem.charAt(2); // v
linguagem.charAt(linguagem.length - 1); // t


// STR.CONCAT(STR2, STR3, ...)
// Concatena as strings e retorna o resultado.

const text = 'A melhor linguagem é ';
const js = 'JavaScript';

const fraseCompleta = text.concat(js, '!!');


// STR.INCLUDES(SEARCH, POSITION)
// Procura pela string exata dentro de outra string. A procura é case sensitive.

const fruta = 'Banana';
const listaFrutas = 'Melancia, Banana, Laranja';

console.log(listaFrutas.includes(fruta, 10)); // true ListaFrutas contem a lista inteira da constante fruta
fruta.includes(listaFrutas); // false //a constante fruta nao contem a string inteira da constante listaFrutas


// STR.ENDSWITH(SEARCH)[termina com] E STR.STARTSWITH(SEARCH)[começa com]
// Procura pela string exata dentro de outra string. A procura é case sensitive.


console.log(fruta.startsWith('B')); // começa com 'B' true
console.log(fruta.endsWith('na')); // termina com 'na' true


// STR.SLICE(START, END)

const transacao1 = 'Depósito de cliente';
const transacao2 = 'Depósito de fornecedor';
const transacao3 = 'Taxa de camisas';

transacao1.slice(0, 3); // Dep
transacao2.slice(0, 3); // Dep
transacao3.slice(0, 3); // Tax

transacao1.slice(12); // cliente
transacao1.slice(-4); // ente
transacao1.slice(3, 6); // ósi

// STR.SUBSTRING(START, END)
// Corta a string de acordo com os valores de start e end. Não funcionar com valores negativos como o slice.

const linguagem2 = 'JavaScript';
linguagem.substring(3,5); // aS
linguagem.substring(0,4); // Java
linguagem.substring(4); // Script
linguagem.substring(-3); // JavaScript


// STR.INDEXOF(SEARCH) E STR.LASTINDEXOF(SEARCH)
// Retorna o index da string, assim que achar o primeiro resultado ele já retorna. No caso do lastIndexOf ele retorna o último resultado.

const instrumento = 'Guitarra';

instrumento.indexOf('r'); // 5
instrumento.lastIndexOf('r'); // 6
instrumento.indexOf('ta'); // 3

// STR.PADSTART(N, STR) E STR.PADEND(N, STR)
// Aumenta o tamanho da string para o valor de n. Ou seja, uma string com 8 caracteres, se passarmos n = 10, ela passará a ter 10 caracteres. O preenchimento é feito com espaços, caso não seja declarado o segundo argumento.

const listaPrecos = ['R$ 99', 'R$ 199', 'R$ 12000'];
listaPrecos.forEach((item) => {
  console.log(item.padStart(10, '-'));
})

listaPrecos[0].padStart(10, '.'); // .....R$ 99
listaPrecos[0].padEnd(10,'.'); // R$ 99.....


// STR.REPEAT(N)
// Repete a string (n) vezes.

const gato = 'Miau '
gato.repeat(3); // Miau Miau Miau


// STR.REPLACE(REGEXP|SUBSTR, NEWSTR|FUNCTION)
// Troca parte da string por outra. Podemos utilizar uma regular expression ou um valor direto. Se usarmos um valor direto ele irá trocar apenas o primeiro valor que encontrar.

let listaItens = 'Camisas Bonés Calças Bermudas Vestidos Saias';

listaItens = listaItens.replace(/[ ]+/g, ', ');
// MAIS SOBRE REGULAR EXPRESSION NAS PROXIMAS AULAS


// STR.SPLIT(PADRAO)
// Divide a string de acordo com o padrão passado e retorna uma array.

const listaItens2 = 'Camisas Bonés Calças Bermudas Vestidos Saias';
const arrayItens = listaItens2.split('l');

const htmlText = '<div>O melhor item</div><div>A melhor lista</div>';
const htmlArray = htmlText.split('div');
const htmlNovo = htmlArray.join('section');
// join() junta a array


// STR.TOLOWERCASE() E STR.TOUPPERCASE()
// Retorna a string em letras maiúsculas ou minúsculas. Bom para verificarmos input de usuários.

const sexo1 = 'Feminino';
const sexo2 = 'feminino';
const sexo3 = 'FEMININO';

console.log((sexo1.toUpperCase() === 'FEMININO')); // true


// STR.TRIM(), STR.TRIMSTART(), STR.TRIMEND()
// Remove espaço em branco do início ou final de uma string.

const valor = '  R$ 23.00   '

valor.trim(); // 'R$ 23.00'
valor.trimStart(); // 'R$ 23.00   '
valor.trimEnd(); // '   R$ 23.00'