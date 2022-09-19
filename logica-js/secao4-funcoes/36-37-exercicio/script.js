var n1 = parseFloat(prompt("Digite um número: "));

saida();

function saida() {
   var output = document.querySelector("#output");
   output.innerHTML = n1.toFixed(2);
}

function adi() {
   var n = parseFloat(prompt("Digite outro número: "));
   n1 += n;
   saida();
}

function sub() {
   var n = parseFloat(prompt("Digite outro número: "));
   n1 -= n;
   saida();
}

function mult() {
   var n = parseFloat(prompt("Digite outro número: "));
   n1 *= n;
   saida();
}

function div() {
   var n = parseFloat(prompt("Digite outro número: "));
   n1 /= n;
   saida();
}
