import { Cla } from "./Cla";

export class ClaUchiha extends Cla {
    constructor() {
        super("Uchiha", "Sasuke");
    }

    habilidadeEspecial(): void {
        console.log("Habilidade Especial: Sharingan - Imita os outros poderzinhos");
    }

    ataqueEspecial(): void {
        console.log("Ataque Especial: Amaterasu - pega fogo cabaré");
    }
}