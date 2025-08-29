import { IFormaGeometrica } from "./IFormaGeometrica";

export class ICirculo implements IFormaGeometrica {
    private raio: number;

    constructor(raio: number) {
        this.raio = raio;
    }

    calcularArea(): number {
        return Math.PI * (this.raio * this.raio);
    }
}

