import { ILivro } from "./ILivro";

const Livro1:ILivro = {
 titulo: "O pequeno Principe",
 autor: "Alguem",
 anoPublicacao: 1940
}

function mostrarLivro(livro:ILivro):void {
    console.log(`Titulo ${livro.titulo}
        \nAutor ${livro.autor}
        \n ${livro.anoPublicacao}`)

}

mostrarLivro(Livro1)

import { IFuncionario } from "./IFuncionario";

const funcionario: IFuncionario = {
    nome: "Angelo",
    cargo: "Padeiro",
    salario: 1500
};

function calcularBonus(funcionario: IFuncionario): number {
    return funcionario.salario * 0.10;
}
console.log(`Funcionário: ${funcionario.nome}`);
console.log(`Bônus: R$ ${calcularBonus(funcionario)}`);


import { IQuadrado } from "./IQuadrado";
import { ICirculo } from "./ICirculo";

const quadrado = new IQuadrado(4);
const circulo = new ICirculo(3);

console.log(`Área do quadrado: ${quadrado.calcularArea()}`);
console.log(`Área do círculo: ${circulo.calcularArea().toFixed(2)}`);

import { ISistemaLogin } from "./ISistemaLogin";

const sistema = new ISistemaLogin();

console.log(sistema.autenticar("admin", "1234")); // true
console.log(sistema.autenticar("admin", "senhaerrada")); // false
console.log(sistema.autenticar("usuario", "1234")); // false
