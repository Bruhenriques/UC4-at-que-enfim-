export class Monstro {
    nome: string;
    vidaMax: number;
    vida: number;
    forca: number;

    constructor(nome: string) {
        this.nome = nome;
        this.vidaMax = 80;
        this.vida = this.vidaMax;
        this.forca = 12;
    }

    atacar(alvo: { dano: (valor: number) => void; nome: string; }) {
        console.log(`${this.nome} ataca ${alvo.nome} com ${this.forca} de força!`);
        alvo.dano(this.forca);
    }

    dano(valor: number) {
        this.vida -= valor;
        if (this.vida < 0) this.vida = 0;
        console.log(`${this.nome} recebeu ${valor} de dano. Vida atual: ${this.vida}/${this.vidaMax}`);
    }

    status() {
        return `${this.nome} - Vida: ${this.vida}/${this.vidaMax}, Força: ${this.forca}`;
    }
}
