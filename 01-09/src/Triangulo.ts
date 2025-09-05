import { Forma } from "./Forma";

export class Triangulo extends Forma {
  private base: number;
  private altura: number;

  constructor(base: number, altura: number) {
    super();
    this.base = base;
    this.altura = altura;
  }

  calcularArea(): number {
    return (this.base * this.altura) / 2;
  }
}