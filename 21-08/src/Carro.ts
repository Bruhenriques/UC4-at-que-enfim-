import { Veiculo } from "./Veiculo";

export class Carro extends Veiculo {
    mover(): void {
        console.log("O carro está dirigindo pela estrada");
    }
}
