function calcDesconto(valor, desconto) {
    return valor - (valor * (desconto / 100));
}

const valor = 80;
const desconto = 20;

const precoFinal = calcDesconto(valor, desconto);

console.log("Valor do produto sem desconto: " +"R$" + valor );
console.log("Valor do desconto: " + desconto+"%");
console.log("Valor do produto com com desconto:", precoFinal);