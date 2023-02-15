// const contato = document.querySelector("#contato");
// const texto = document.querySelector(".texto");
// const erro = document.querySelector(".erro");

// function handleKeyUp(event) {
//   const target = event.target;

//   if (!target.checkValidity()) {
//     target.classList.add("invalido");
//     contato.nome.setCustomValidity("Nome é totalmente necessário");
//     target.nextElementSibling.innerText = target.validationMessage;
//   }
//   texto.innerText = event.target.value;
// }
// contato.addEventListener("change", handleKeyUp);

const form = document.getElementById("contato");
const dados = {};

function handleChange(event) {
  dados[event.target.name] = event.target.value;
}

form.addEventListener("change", handleChange);
