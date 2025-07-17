class heroi{
    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo.toLowerCase();
    }

    atacar(){
        let ataque;
        if(this.tipo == "guerreiro"){
            ataque = "espada";
        } else if(this.tipo == "mago"){
            ataque = "magia";
        } else if(this.tipo == "monge"){
            ataque = "artes marciais";
        } else if(this.tipo == "ninja"){
            ataque = "shuriken";
        }
        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

const heroi1 = new heroi("Shan Hu", 22, "Guerreiro");
const heroi2 = new heroi("Ke Xing", 29, "monge");

heroi1.atacar();
heroi2.atacar();