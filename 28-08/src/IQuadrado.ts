import { IFormaGeometrica } from "./IFormaGeometrica";

export class IQuadrado implements IFormaGeometrica {
    private lado: number;

    constructor(lado: number) {
        this.lado = lado;
    }

    calcularArea(): number {
        return this.lado * this.lado;
    }
}

