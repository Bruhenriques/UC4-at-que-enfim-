import { Pagamento } from "./Pagamento";

export class Boleto extends Pagamento {
    processar(): void {
        console.log("Pagamento com Boleto registrado. Aguarde a compensação ");
    }
}
