import { Cla } from "./Cla";

export class ClaAkimichi extends Cla {
    constructor() {
        super("Akimichi", "Chouza");
    }

    habilidadeEspecial(): void {
        console.log("Habilidade Especial: Ampliação corporal - engorda com whey");
    }

    ataqueEspecial(): void {
        console.log("Ataque Especial: Baika no Jutsu - fica gordo pra pular nos inimigo");
    }
}