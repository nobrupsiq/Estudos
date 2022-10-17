export default function initFuncionamento() {}

const agora = new Date();
const futuro = new Date("Dec 24 2022");

console.log(agora.getMonth());
console.log(futuro);

//O método getTime() mostra o tempo total em milessegundos desde o dia 1 de janeiro de 1970.
const mile = new Date();
console.log(mile.getTime());

const diasPassados = mile.getTime() / (24 * 60 * 60 * 1000);
console.log(diasPassados);
