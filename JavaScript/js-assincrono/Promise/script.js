//Promise é uma função construtora de promessas. Existem dois resultados possíveis de uma promessa, ela pode ser resolvida, com a execução do primeiro argumento, ou rejeitada se o segundo argumento for ativado.

// const promesa = new Promise(function (resolve, reject) {
//     reject(Error("Um erro ocorreu na promise"));
// });

// console.log(promesa)

// RESOLVE()
// Podemos passar um argumento na função resolve(), este será enviado junto com a resolução da Promise.

// REJECT()
// Quando a condição de resolução da promise não é atingida, ativamos a função reject para rejeitar a mesma. Podemos indicar no console um erro, informando que a promise foi rejeitada.

// const promesa2 = new Promise(function (resolve, reject) {
//     let condicao = true;
//     if (condicao) {
//         resolve("Estou pronto!");
//     } else {
//         reject(Error("Um erro ocorreu na promise"));
//     }
// });
// console.log(promesa2);

// THEN()
// O poder das Promises está no método then() do seu protótipo. O Callback deste método só será ativado quando a promise for resolvida. O argumento do callback será o valor passado na função resolve.

const promesa = new Promise((resolve, reject) => {
    let condicao = true;
    if (condicao) {
        resolve({ nome: 'Bruno', idade: 26 });
    } else {
        reject(Error('Um erro ocorreu na promise'));
    }
});

// promesa.then((resolucao) => console.log(resolucao));

// ASSÍNCRONO
// As promises não fazem sentido quando o código executado dentro da mesma é apenas código síncrono. O poder está na execução de código assíncrono que executará o resolve() ao final dele.

// const promesa2 = new Promise((resolve, reject) => {
//     let condicao = false;
//     if (condicao) {
//         setTimeout(() => {
//             resolve({ nome: 'Bruno', idade: 26 });
//         }, 1000);
//     } else {
//         reject(Error('Um erro ocorreu na promise'));
//     }
// });

// promesa2.then((resolucao) => console.log(resolucao));

// THEN().THEN()
// O método then() retorna outra Promise. Podemos colocar then() após then() e fazer um encadeamento de promessas. O valor do primeiro argumento de cada then, será o valor do retorno anterior.

// const retorno = promesa2
//     .then((resolucao) => {
//         console.log(resolucao);
//         resolucao.profissao = 'Designer';
//         return resolucao;
//     })
//     .then((resolucao) => {
//         console.log(resolucao);
//         resolucao.teste = 'Analista';
//         return resolucao;
//     })
//     .then(
//         (resolucao) => {
//             console.log(resolucao);
//         },
//         (rejeitada) => {
//             console.log(rejeitada);
//         }
//     )
//     .finally(() => {
//         console.log('Acabou!');
//     });

// console.log(retorno);

// PROMISE.ALL()
// Retornará uma nova promise assim que todas as promises dentro dela forem resolvidas ou pelo menos uma rejeitada. A reposta é uma array com as respostas de cada promise

const login = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Usuário Logado');
    }, 1000);
});

const dados = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Dados Carregados');
    }, 1500);
});

// const carregouTudo = Promise.all([login, dados]);
// carregouTudo.then((resolucao) => {
//     console.log(resolucao);
// });

// PROMISE.RACE();
// Retornará uma nova promise assim que a primeira promise for resolvida ou rejeitada. Essa nova promise terá a resposta da primeira resolvida.

const carregouPrimeiro = Promise.race([login, dados]);

carregouPrimeiro.then((resposta) => {
    console.log(resposta);
});
