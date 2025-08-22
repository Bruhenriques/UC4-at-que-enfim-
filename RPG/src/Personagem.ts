export class Personagem {
    nome: string;
    classe: string;
    vidaMax: number;
    vida: number;
    forca: number;

    constructor(nome: string, classe: string) {
        this.nome = nome;
        this.classe = classe;
        this.vidaMax = 100;
        this.vida = this.vidaMax;

        switch (classe.toLowerCase()) {
            case "guerreiro":
                this.forca = 15;
                break;
            case "mago":
                this.forca = 10;
                break;
            case "arqueiro":
                this.forca = 12;
                break;
            default:
                this.forca = 10;
        }
    }

    atacar(alvo: { dano: (valor: number) => void; nome: string; }) {
        console.log(`${this.nome} (${this.classe}) ataca ${alvo.nome} com ${this.forca} de força!`);
        alvo.dano(this.forca);
    }

    dano(valor: number) {
        this.vida -= valor;
        if (this.vida < 0) this.vida = 0;
        console.log(`${this.nome} recebeu ${valor} de dano. Vida atual: ${this.vida}/${this.vidaMax}`);
    }

    curar(valor: number) {
        this.vida += valor;
        if (this.vida > this.vidaMax) this.vida = this.vidaMax;
        console.log(`${this.nome} se curou ${valor} pontos. Vida atual: ${this.vida}/${this.vidaMax}`);
    }

    status() {
        return `${this.nome} (${this.classe}) - Vida: ${this.vida}/${this.vidaMax}, Força: ${this.forca}`;
    }
}
