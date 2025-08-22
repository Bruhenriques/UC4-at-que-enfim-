import { Veiculo } from "./Veiculo";

export class Bicicleta extends Veiculo {
    mover(): void {
        console.log("A bicicleta está pedalando pela ciclovia 🚴");
    }
}