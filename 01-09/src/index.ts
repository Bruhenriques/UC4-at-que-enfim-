import { Funcionario } from "./Funcionario";
import { FuncionarioCLT } from "./FuncionarioCLT";
import { FuncionarioPJ } from "./FuncionarioPJ";

const clt = new FuncionarioCLT("angelo", 5000);
const pj = new FuncionarioPJ("gregori", 100, 160);

console.log(`Funcionário CLT: ${clt.calcularSalario()}`); // 5000
console.log(`Funcionário PJ: ${pj.calcularSalario()}`);   // 16000

import { Forma } from "./Forma";
import { Retangulo } from "./Retangulo"
import { Triangulo } from "./Triangulo"

const formas: Forma[] = [ new Retangulo(20, 8), new Triangulo(2, 3), new Retangulo(6, 7), new Triangulo(10, 8)];

formas.forEach((forma, index) => {
    console.log(`Área da forma ${index + 1}: ${forma.calcularArea()}`);
});

import { Cla } from "./Cla";
import { ClaUchiha } from "./ClaUchiha";
import { ClaHyuuga } from "./ClaHyuuga";
import { ClaNara } from "./ClaNara";
import { ClaAkimichi } from "./ClaAkimichi";


const clans: Cla[] = [new ClaUchiha(), new ClaHyuuga(), new ClaNara(), new ClaAkimichi(),
    
];

clans.forEach((cla)=>{
    cla.exibirDetalhes();
    cla.habilidadeEspecial();
    cla.ataqueEspecial();
});