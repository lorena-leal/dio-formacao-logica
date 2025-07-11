let nivel;

let saldoVitorias = rankeadas(50, 20);

function rankeadas(vitorias, derrotas){
    let saldoRankeadas = vitorias - derrotas;
    return saldoRankeadas;
}

if(saldoVitorias <= 10){
    nivel = "Ferro"; //Se vitórias for menor do que 10 = Ferro
} else if(saldoVitorias >= 11 && saldoVitorias <= 20){
    nivel = "Bronze"; //Se vitórias for entre 11 e 20 = Bronze
} else if(saldoVitorias >= 21 && saldoVitorias <= 50){
    nivel = "Prata"; //Se vitórias for entre 21 e 50 = Prata
} else if(saldoVitorias >= 51 && saldoVitorias <= 80){
    nivel = "Ouro"; //Se vitórias for entre 51 e 80 = Ouro
} else if(saldoVitorias >= 81 && saldoVitorias <= 90){
    nivel = "Diamante"; //Se vitórias for entre 81 e 90 = Diamante
} else if(saldoVitorias >= 91 && saldoVitorias <= 100){
    nivel = "Lendário"; //Se vitórias for entre 91 e 100 = Lendário
} else {
    nivel = "Imortal"; //Se vitórias for maior ou igual a 101 = Imortal
}

console.log(`O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}.`);