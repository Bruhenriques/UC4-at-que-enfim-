import { Personagem } from "./Personagem";
import { Monstro } from "./Monstro";

const heroi = new Personagem("Arthas", "Guerreiro", 100, 20);
const monstro = new Monstro("Goblin", 50, 10);

heroi.status();
monstro.status();

console.log("\n=== BATALHA INICIA ===\n");

heroi.atacar(monstro);
monstro.atacar(heroi);

heroi.curar(15);

heroi.atacar(monstro);
monstro.atacar(heroi);

console.log("\n=== STATUS FINAL ===\n");
heroi.status();
monstro.status();
