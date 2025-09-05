import { Cla } from "./Cla";

export class ClaNara extends Cla {
    constructor() {
        super("Nara", "Shikamaru");
    }

    habilidadeEspecial(): void {
        console.log("Habilidade Especial: Controla as alminhas");
    }

    ataqueEspecial(): void {
        console.log("Ataque Especial: Prisão da Sombra - Taca le no central");
    }
}