let heroi = "TESTE";
let xp = 2000;

//Se XP for menor do que 1.000 = Ferro
if(xp <= 1000){
    console.log("O Herói de nome " + heroi + " está no nível Ferro")
}
//Se XP for entre 1.001 e 2.000 = Bronze
else if(1000 < xp <= 2000){
    console.log("O Herói de nome " + heroi + " está no nível Bronze")
}
//Se XP for entre 2.001 e 5.000 = Prata
else if(2000 < xp <= 5000){
    console.log("O Herói de nome " + heroi + " está no nível Prata")
}
//Se XP for entre 5.001 e 7.000 = Ouro
else if(5000 < xp <= 7000){
    console.log("O Herói de nome " + heroi + " está no nível Ouro")
}
//Se XP for entre 7.001 e 8.000 = Platina
else if(7000 < xp <= 8000){
    console.log("O Herói de nome " + heroi + " está no nível Platina")
}
//Se XP for entre 8.001 e 9.000 = Ascendente
else if(8000 < xp <= 9000){
    console.log("O Herói de nome " + heroi + " está no nível Ascendente")
}
//Se XP for entre 9.001 e 10.000 = Imortal
else if(9000 < xp <= 10000){
    console.log("O Herói de nome " + heroi + " está no nível Imortal")
}
//Se XP for maior ou igual a 10.001 = Radiante
else {
    console.log("O Herói de nome " + heroi + " está no nível Radiante")
}