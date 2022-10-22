// FETCH API
// Permite fazermos requisições HTTP através do método fetch(). Este método retorna a resolução de uma Promise. Podemos então utilizar o then para interagirmos com a resposta, que é um objeto do tipo Response.

const sobre = fetch('./sobre.html');

// O primeiro then vai retornar um response object

// const div = document.createElement('div');

// sobre
//     .then((r) => r.text())
//     .then((body) => {
//         div.innerHTML = body;
//         const titulo = div.querySelector('h1');
//         document.querySelector('h1').innerText = titulo.innerText;
//         console.log(titulo);
//     });

// .BLOB()
// Um blob é um tipo de objeto utilizado para representação de dados de um arquivo. O blob pode ser utilizado para transformarmos requisições de imagens por exemplo. O blob gera um URL único.

const imagem = fetch('./kkshi.png');

imagem
    .then((r) => r.blob())
    .then((body) => {
        const blobUrl = URL.createObjectURL(body);
        const imagemDom = document.querySelector('img');
        imagemDom.src = blobUrl;
    });

// .CLONE()
// Ao utilizarmos os métodos acima, text, json e blob, a resposta é modificada. Por isso existe o método clone, caso você necessite transformar uma resposta em diferentes valores.

const cepzada = fetch('https://viacep.com.br/ws/01001000/json/');

cepzada
    .then((r) => {
        const r2 = r.clone();
        r.text().then((text) => {
            // console.log(text);
        });
        r2.json().then((json) => {
            // console.log(json);
        });
    })
    .then((body) => {
        // console.log(body);
    });

// .HEADERS
// É uma propriedade que possui os cabeçalhos da requisição. É um tipo de dado iterável então podemos utilizar o forEach para vermos cada um deles.

const divHeader = fetch('https://viacep.com.br/ws/01001000/json/');

divHeader.then((response) => {
    // console.log(response);
    // response.headers.forEach(console.log);
});

// .STATUS E .OK
// Retorna o status da requisição. Se foi 404, 200, 202 e mais. ok retorna um valor booleano sendo true para uma requisição de sucesso e false para uma sem sucesso.

const teste = fetch('https://viacep.com.br/ws/01001000/json/');
console.log(teste);

teste.then((response) => {
    response.json().then((btJson) => {
        console.log(btJson);
    });
});

// .URL E .TYPE
// .url retorna o url da requisição. .type retorna o tipo da reposta.

// types
// basic: feito na mesma origem
// cors: feito em url body pode estar disponível
// error: erro de conexão
// opaque: no-cors, não permite acesso de outros sites
