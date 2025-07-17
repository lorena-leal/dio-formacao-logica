let saldoRankeadas = calcularRankeadas(50, 20);
let saldoVitorias = calcularVitorias(saldoRankeadas);

function calcularRankeadas(vitorias, derrotas){
    let saldoPartidas = vitorias - derrotas;
    return saldoPartidas;
}

function calcularVitorias(saldo){
    let nivel;
    if(saldo <= 10){
        nivel = "Ferro"; //Se vitórias for menor do que 10 = Ferro
    } else if(saldo >= 11 && saldo <= 20){
        nivel = "Bronze"; //Se vitórias for entre 11 e 20 = Bronze
    } else if(saldo >= 21 && saldo <= 50){
        nivel = "Prata"; //Se vitórias for entre 21 e 50 = Prata
    } else if(saldo >= 51 && saldo <= 80){
        nivel = "Ouro"; //Se vitórias for entre 51 e 80 = Ouro
    } else if(saldo >= 81 && saldo <= 90){
        nivel = "Diamante"; //Se vitórias for entre 81 e 90 = Diamante
    } else if(saldo >= 91 && saldo <= 100){
        nivel = "Lendário"; //Se vitórias for entre 91 e 100 = Lendário
    } else {
        nivel = "Imortal"; //Se vitórias for maior ou igual a 101 = Imortal
    }
}

console.log(`O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}.`);