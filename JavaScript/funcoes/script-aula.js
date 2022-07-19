function areaQuadrado(lado) {
  return lado * lado;
}

console.log(areaQuadrado(10));

function pi() {
  return 3.14;
}
var total = 5 * pi();

console.log(pi());

function imc(peso, altura) {
  var imc = peso / altura ** 2;
  return imc;
}

console.log(imc(80, 1.8)); // 80 e 1.80 são os argumentos

function corFavorita(cor) {
  if (cor === "azul") {
    return "Você gosta do céu";
  } else if (cor === "verde") {
    return "Você gosta de mato";
  } else {
    return "Você não gosta de nada";
  }
}
corFavorita(); // retorna 'Você não gosta de nada'

addEventListener("click", function () {
  console.log("Clicou");
});
// A função possui dois argumentos
// Primeiro é a string 'click'
// Segundo é uma função anônima

// PODE OU NÃO RETORNAR UM VALOR

function imc2(peso, altura) {
  const imc = peso / altura ** 2;
  console.log(imc);
  return imc;
}

imc2(90, 1.8);
console.log(imc2(70, 1.8));

function terceiraIdade(idade) {
  console.log(typeof idade);
  if (typeof idade !== "number") {
    return "Por favor preencha um número!";
  } else if (idade >= 60) {
    return true;
  } else {
    return false;
  }
}
console.log(terceiraIdade(60));

// ESCOPO

function faltaVisitar(paisesVisitados) {
  var totalPaises = 193;
  return `Faltam visitar ${totalPaises - paisesVisitados} paises`;
}

// ESCOPO LÉXICO

var profissao = "Designer";

function dados() {
  var nome = "Bruno";
  var idade = 28;
  function outrosDados() {
    var endereco = "Rio de Janeiro";
    var idade = 29;
    return `${nome}, ${idade}, ${endereco}, ${profissao}`;
  }
  return outrosDados();
}

console.log(dados()); // Retorna 'Bruno', 29, Rio de Janeiro, Designer'
// outrosDados(); // retorna um erro

// HOSTING
// Antes de excutar uma função o JS move todas as funções declaradas para a memória

imc3(80, 1.8);

function imc3(peso, altura) {
  const imc = peso / altura ** 2;
  console.log(imc);
}
