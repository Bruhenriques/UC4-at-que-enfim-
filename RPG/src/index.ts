import * as readlineSync from 'readline-sync';
import { Personagem } from './Personagem';
import { Monstro } from './Monstro';

// Menu de criação do personagem
console.log("=== Criação de Personagem ===");
const nome = readlineSync.question("Digite o nome do seu personagem: ");

console.log("Escolha a classe do seu personagem:");
console.log("1 - Guerreiro");
console.log("2 - Mago");
console.log("3 - Arqueiro");
const opcao = readlineSync.question("Digite o número da classe: ");

let classe: string;
switch (opcao) {
    case "1":
        classe = "Guerreiro";
        break;
    case "2":
        classe = "Mago";
        break;
    case "3":
        classe = "Arqueiro";
        break;
    default:
        classe = "Guerreiro";
}

const player = new Personagem(nome, classe);
const monstro = new Monstro("Goblin");

console.log("\n=== Batalha Iniciada! ===");

let round = 1;
while (player.vida > 0 && monstro.vida > 0) {
    console.log(`\n--- Round ${round} ---`);
    player.atacar(monstro);
    if (monstro.vida <= 0) {
        console.log(`${monstro.nome} foi derrotado!`);
        break;
    }
    monstro.atacar(player);
    if (player.vida <= 0) {
        console.log(`${player.nome} foi derrotado!`);
        break;
    }
    round++;
}

console.log("\n=== Status Final ===");
console.log(player.status());
console.log(monstro.status());
