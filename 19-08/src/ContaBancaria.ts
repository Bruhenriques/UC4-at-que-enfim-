export class ContaBancaria {
  protected saldo: number;

  constructor(saldoInicial: number) {
    this.saldo = saldoInicial;
  }

  protected atualizarSaldo(valor: number): void {
    this.saldo += valor;
  }
}
