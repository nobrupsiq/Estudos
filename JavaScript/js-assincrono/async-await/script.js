// async function puxarDados() {
//     try {
//         const responseDados = await fetch('./dados.json');
//         const jsonDados = await responseDados.json();
//         document.body.innerText = jsonDados.aula;
//     } catch (erro) {
//         console.log('teste');
//     }
// }

// puxarDados();

// TRY / CATCH
// Para lidarmos com erros nas promises, podemos utilizar o try e o catch na função.

// INICIAR FETCH AO MESMO TEMPO
// Não precisamos esperar um fetch para começarmos outro. Porém precisamos esperar a resposta resolvida do fetch para transformarmos a response em json.

async function puxarDados() {
    const responseDados = fetch('./dados.json');
    const responseClientes = fetch('./cliente.json');

    const jsonDados = await (await responseDados).json();
    const jsonClientes = await (await responseClientes).json();

    console.log(jsonDados);
    console.log(jsonClientes);
}
// puxarDados();

// PROMISE
// O resultado da expressão à frente de await tem que ser uma promise. E o retorno do await será sempre o resultado desta promise.

async function asyncSemPromise() {
    // Console não irá esperar.
    await setTimeout(() => console.log('Depois de 1s'), 1000);
    console.log('acabou');
}
asyncSemPromise();

async function iniciarAsync() {
    await new Promise((resolve) => {
        setTimeout(() => resolve(), 1000);
    });
    console.log('depois de 1s');
}
// iniciarAsync();
