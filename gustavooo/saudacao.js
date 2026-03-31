function saudacao(nome, hora) {
    if(hora > 5 && hora <12) {
        console.log("Bom dia, " + nome);
    } else if(hora >= 12 && hora < 18) {
        console.log("Boa tarde, " 
            + nome);
    } else if(hora > 18 && hora <= 24) {
        console.log("Boa noite, " + nome);
    } else {
        console.log("Inválido.")
    }
}

const nome = "Gustavo";
const hora = 24;

saudacao(nome, hora);