/* import { Veiculo } from "./Veiculo";
import { Carro } from "./Carro";
import { Bicicleta } from "./Bicicleta";

const veiculos: Veiculo[] = [
    new Carro(),
    new Bicicleta(),
    new Carro()
];

veiculos[0].mover()

veiculos.forEach(element => {
    element.mover()
}); */

import { Pagamento } from "./Pagamento";
import { CartaoCredito } from "./CartaoCredito";
import { Boleto } from "./Boleto";

const pagamentos: Pagamento[] = [
    new CartaoCredito(),
    new Boleto(),
    new CartaoCredito()
];

pagamentos.forEach(element => {
    element.processar()
});
