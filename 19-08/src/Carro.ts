import { Veiculo } from "./Veiculo";

export class Carro extends Veiculo {
  acelerar(acelerou: number): void {
    this.velocidade += acelerou;
    console.log(`O carro acelerou. Velocidade atual: ${this.velocidade} km/h`);
  }
}

