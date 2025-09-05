import { Funcionario } from "./Funcionario";

export class FuncionarioCLT extends Funcionario {
  private salarioFixo: number;

  constructor(nome: string, salarioFixo: number) {
    super(nome);
    this.salarioFixo = salarioFixo;
  }

  calcularSalario(): number {
    return this.salarioFixo;
  }
}