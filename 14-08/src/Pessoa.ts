export class Pessoa {
    private nome: string;
    private idade: number;

    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade; // usa o setter para validar
    }

    apresentar(): string {
        return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`;
    }

    // Getter e setter para nome
    getNome(): string {
        return this.nome;
    }

    setNome(novoNome: string) {
        this.nome = novoNome;
    }

    // Getter e setter para idade com validação
    getIdade(): number {
        return this.idade;
    }

    setIdade(novaIdade: number) {
        if (novaIdade < 0) {
            throw new Error("A idade não pode ser negativa");
        }
        this.idade = novaIdade;
    }
}
