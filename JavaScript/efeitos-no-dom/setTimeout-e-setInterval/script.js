// setTimeout -  método assíncrono que ativa o callback após tempo. Não existe garantia de que o código será executado exatamente após o tempo, pois o callback entra na fila e espera pela Call Stack estar vazia.

const btn = document.querySelector('button');
btn.addEventListener('click', handleClick);


//Quando utilizamos uma Arrow Function como callback, o contexto de this passa a ser do local onde o setTimeout foi iniciado.
function handleClick() {
    setTimeout(() => {
        this.classList.add('active');
    }, 1000)
}


setTimeout(() => {
    console.log('testando')
}, 0);

// for (let i = 0; i < 5; i++) {
//     setTimeout(() => {
//         console.log(i)
//     }, 1000 * i)
// }


// SETINTERVAL
// irá ativar o callback toda vez que a quantidade de tempo passar.

function loop(texto) {
    console.log(texto);
}
// loop a cada segundo
// setInterval(loop, 300, '300ms')

let i = 0;
const meuLoop = setInterval(() => {
    console.log(i++)
    if (i > 20) {
        clearInterval(meuLoop)
    }
}, 300, '300ms')


// CLEARINTERVAL
// podemos parar um intervalo com o clearInterval. Para isso precisamos atribuir o setInterval a uma variável.
