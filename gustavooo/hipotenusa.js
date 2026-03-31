function calcularHipotenusa(cateto1, cateto2) {
    return Math.sqrt(cateto1 ** 2 + cateto2 ** 2);
}

const cateto1 = 6;
const cateto2 = 8;

const hipotenusa = calcularHipotenusa(cateto1, cateto2);

console.log("Cateto 01: " + cateto1);
console.log("Cateto 02: " + cateto2);
console.log("Hipotenusa:" + hipotenusa);