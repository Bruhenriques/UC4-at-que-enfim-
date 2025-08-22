import { Pagamento } from "./Pagamento";

export class CartaoCredito extends Pagamento {
    processar(): void {
        console.log("Pagamento com Cartão de Crédito aprovado ");
    }
}
