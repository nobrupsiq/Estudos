// Retorne um número aleatório
// entre 1050 e 2000

console.log(Math.floor(Math.random() * (1050 - 2000 + 1)) + 2000)

// Retorne o maior número da lista abaixo
let numeros = '4, 5, 20, 8, 9';



// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
const listaPrecos = ['R$ 59,99', ' R$ 100,222',
                     'R$ 230  ', 'r$  200'];


listaPrecos.forEach((item) => {
  item = item.toLowerCase();
  item = item.trim();

  const limpador = item.replace('r$ ', '');
})
                    