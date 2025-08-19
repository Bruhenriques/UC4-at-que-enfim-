export class Personagem {
    private _nome: string;
    private _classe: string;
    private _vida: number;
    private _forca: number;
    private _vidaMaxima: number;

    constructor(nome: string, classe: string, vida: number, forca: number) {
        this._nome = nome;
        this._classe = classe;
        this._vida = vida;
        this._vidaMaxima = vida;
        this._forca = forca;
    }


    get nome(): string {
        return this._nome;
    }

    set nome(valor: string) {
        this._nome = valor;
    }

    get classe(): string {
        return this._classe;
    }

    set classe(valor: string) {
        this._classe = valor;
    }

    get vida(): number {
        return this._vida;
    }

    set vida(valor: number) {
        if (valor < 0) this._vida = 0;
        else if (valor > this._vidaMaxima) this._vida = this._vidaMaxima;
        else this._vida = valor;
    }

    get forca(): number {
        return this._forca;
    }

    set forca(valor: number) {
        this._forca = valor;
    }

    // Métodos
    public atacar(alvo: { dano: (valor: number) => void }): void {
        console.log(`${this._nome} ataca com força ${this._forca}!`);
        alvo.dano(this._forca);
    }

    public dano(valor: number): void {
        this.vida -= valor; // usa o setter de vida
        console.log(`${this._nome} recebeu ${valor} de dano. Vida atual: ${this._vida}/${this._vidaMaxima}`);
    }

    public curar(valor: number): void {
        this.vida += valor; // usa o setter de vida
        console.log(`${this._nome} foi curado em ${valor}. Vida atual: ${this._vida}/${this._vidaMaxima}`);
    }

    public status(): void {
        console.log(`=== ${this._nome} (${this._classe}) ===`);
        console.log(`Vida: ${this._vida}/${this._vidaMaxima}`);
        console.log(`Força: ${this._forca}`);
    }
}
