/*let nomeTurma:string = "25-1N"
let numeroAlunos:Number = 20

let nome:string[] = ["fulano", "beltrano"]

function mensagem():void {
    console.log("olá")
}

function calcula(num1:number, num2:number):number {
    return num1 + num2
}

console.log(calcula(10, 20))*/

/* QUESTÃO 1

function exibirDadosAluno(nomeAluno: string, idadeAluno: number, estaMatriculado: boolean): void {
  console.log(`Aluno ${nomeAluno}, ${idadeAluno} anos, está matriculado: ${estaMatriculado}`);
}


exibirDadosAluno("João", 16, true); 

*/



let alunos: string[] = ["Ana", "Bruno", "Carlos", "Diana", "Eduardo"];

function listarAlunos(lista: string[]): string {
  return "Alunos:\n" + lista.join("\n");
}

let resultado = listarAlunos(alunos);
console.log(resultado);



/* QUESTÃO 4

function calcularMedia(nota1: number, nota2: number, nota3: number): number {
  let media = (nota1 + nota2 + nota3) / 3;
  return media;
}

let mediaFinal = calcularMedia(8, 7.5, 9);
console.log("Média final:", mediaFinal);

*/


/* QUESTÃO 5

function contarAlunos(alunos: string[]): void {
  console.log("Quantidade de alunos:", alunos.length);
}

let listaDeAlunos = ["Ana", "Bruno", "Carlos", "Diana", "Eduardo"];
contarAlunos(listaDeAlunos);

*/

/*function saudacao(nome: string): void {
  console.log("Olá, " + nome + "! Seja bem-vindo(a) à aula.");
}

saudacao("Wiktoria");*/
