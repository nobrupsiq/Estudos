var nome = prompt("Digite seu primeiro nome: ");
var comprimento = nome.length;

switch (comprimento) {
   case 1:
      alert("oi");
      break;
   case 2:
      alert("ola");
      break;
   case 3:
      alert("teste");
      break;
   default:
      alert("algo deu errado");
}

var numero = 10;

switch (typeof numero) {
   case "number":
      alert("é número");
      break;
   case "string":
      alert("é string");
      break;
}
if (typeof numero === "number") {
   alert("é número");
} else if (typeof numero === "string") {
   alert("é string");
}
