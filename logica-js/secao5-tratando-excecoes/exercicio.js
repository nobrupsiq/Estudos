function mostrarAreaAlert() {
    var largura = parseFloat(prompt('Digite a largura:'))
    var altura = parseFloat(prompt('Digite a altura: '))
    var area = calculaArea(largura, altura);

    alert(`a área total é: ${area}`);
}

function mostrarAreaOutput() {
     var largura = parseFloat(prompt('Digite a largura:'))
    var altura = parseFloat(prompt('Digite a altura: '))
    var area = calculaArea(largura, altura);

    document.querySelector('#output').innerHTML = `a area total é: ${area}`;
}

mostrarAreaAlert();

function calcularArea(l, a) {
    if (l === undefined || a === undefined) {
        throw new Error('calcularArea precisa receber dois números')
    }
    if (isNaN(l) || isNaN(a)) {
        throw new Error('Apenas números')
    }
    return l * a;
}
