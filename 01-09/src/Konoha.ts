import { Cla } from "./Cla";
import { ClaUchiha } from "./ClaUchiha";
import { ClaHyuuga } from "./ClaHyuuga";
import { ClaNara } from "./ClaNara";
import { ClaAkimichi } from "./ClaAkimichi";


const clans: Cla[] = [
    new ClaUchiha(),
    new ClaHyuuga(),
    new ClaNara(),
    new ClaAkimichi(),
    
];

clans.forEach((cla) => {
    cla.exibirDetalhes();
    cla.habilidadeEspecial();
    cla.ataqueEspecial();
});