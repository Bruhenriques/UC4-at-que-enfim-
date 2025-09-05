import { Forma } from "./Forma";

export class Retangulo extends Forma {
  private largura: number;
  private altura: number;

  constructor(largura: number, altura: number) {
    super();
    this.largura = largura;
    this.altura = altura;
  }

  calcularArea(): number {
    return this.largura * this.altura;
  }
}
