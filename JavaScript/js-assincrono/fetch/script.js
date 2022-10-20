// FETCH API
// Permite fazermos requisições HTTP através do método fetch(). Este método retorna a resolução de uma Promise. Podemos então utilizar o then para interagirmos com a resposta, que é um objeto do tipo Response.

const sobre = fetch('./sobre.html');

// O primeiro then vai retornar um response object

const div = document.createElement('div');

sobre
    .then((r) => r.text())
    .then((body) => {
        div.innerHTML = body;
        const titulo = div.querySelector('h1');
        document.querySelector('h1').innerText = titulo.innerText;
        console.log(titulo);
    });
