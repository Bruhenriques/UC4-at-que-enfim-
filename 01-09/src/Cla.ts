export abstract class Cla {
    protected nomeDoCla: string;
    protected lider: string;

    constructor(nomeDoCla: string, lider: string) {
        this.nomeDoCla = nomeDoCla;
        this.lider = lider;
    }

    abstract habilidadeEspecial(): void;
    abstract ataqueEspecial(): void;

    exibirDetalhes(): void {
        console.log(`Clã: ${this.nomeDoCla} | Líder: ${this.lider}`);
    }
}