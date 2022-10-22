// JSON
// JavaScript Object Notation (JSON) é um formato de organização de dados, compostos por um conjunto de chave e valor. As aspas duplas são obrigatórias, tanto na chave quanto no valor quando este for uma string.

fetch('./dados.json')
    .then((response) => response.json())
    .then((dados) => {
        dados.forEach((item) => {
            // console.log(item.aula);
        });
    });

// JSON.PARSE() E JSON.STRINGIFY()
// JSON.parse() irá transformar um texto JSON em um objeto JavaScript. JSON.stringify() irá transformar um objeto JavaScript em uma string no formato JSON.

const textoJSON = '{"id": 1, "titulo": "JavaScript", "tempo": "25min"}';
const textoOBJ = JSON.parse(textoJSON);

const enderecoOBJ = {
    cidade: 'Rio de Janeiro',
    rua: 'Ali perto',
    pais: 'Brasil',
    numero: 12,
};

const enderecoJSON = JSON.stringify(enderecoOBJ);

// const configuracoes = {
//     player: 'Google',
//     tempo: 25.5,
//     aula: '2.1 JavaScript',
// };

// const stringConfig = JSON.stringify(configuracoes);

// EXEMPLO REAL
// Podemos guardar por exemplo no localStorage, uma string como valor de uma propriedade. E retornar essa string como um objeto.

const configuracoes = {
    player: 'Google',
    tempo: 25.5,
    aula: '2.1 JavaScript',
};

localStorage.config = JSON.stringify(configuracoes);
console.log(JSON.parse(localStorage.config));
