import { Cla } from "./Cla";

export class ClaHyuuga extends Cla {
    constructor() {
        super("Hyuuga", "Hiashi");
    }

    habilidadeEspecial(): void {
        console.log("Habilidade Especial: Byakugan - vira o google street view");
    }

    ataqueEspecial(): void {
        console.log("Ataque Especial: Punho Suave - Vara o soco");
    }
}
