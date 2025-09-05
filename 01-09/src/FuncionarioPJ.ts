import { Funcionario } from "./Funcionario";

export class FuncionarioPJ extends Funcionario {
  private valorHora: number;
  private horasTrabalhadas: number;

  constructor(nome: string, valorHora: number, horasTrabalhadas: number) {
    super(nome);
    this.valorHora = valorHora;
    this.horasTrabalhadas = horasTrabalhadas;
  }

  calcularSalario(): number {
    return this.valorHora * this.horasTrabalhadas;
  }
}