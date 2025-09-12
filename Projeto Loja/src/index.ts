import readlineSync from "readline-sync";


import { Livro } from "./Livro";
import { Roupa } from "./Roupa";
import { Brinquedo } from "./Brinquedo"
import { Eletronico } from "./Eletronico";
import { Estoque } from "./Estoque";


function contarItens<T>(estoque: Estoque<T>): number {
  return estoque.listar().length;
}

function filtrarPorPreco<T extends { preco: number }>(
  estoque: Estoque<T>,
  maxPreco: number
): T[] {
  return estoque.buscar((item) => item.preco <= maxPreco);
}

function obterPrimeiroItem<T>(estoque: Estoque<T>): T | undefined {
  return estoque.listar()[0];
}


const estoqueLivros = new Estoque<Livro>();
const estoqueRoupas = new Estoque<Roupa>();
const estoqueBrinquedos = new Estoque<Brinquedo>();
const estoqueEletronicos = new Estoque<Eletronico>();

function menuPrincipal() {
  while (true) {
    console.log("\n=== Sistema de Estoque ===");
    console.log("1. Add produto");
    console.log("2. Cadastrados");
    console.log("3. apagar produto");
    console.log("4. Buscar");
    console.log("5. Contar estoque");
    console.log("6. primeiro item");
    console.log("0. Sair");

    const opcao = readlineSync.question("Escolha uma opcao: ");

    switch (opcao) {
      case "1":
        adicionarProduto();
        break;
      case "2":
        listarProdutos();
        break;
      case "3":
        removerProduto();
        break;
      case "4":
        buscarPorPreco();
        break;
      case "5":
        contarItensEstoque();
        break;
      case "6":
        mostrarPrimeiroItem();
        break;
      case "0":
        console.log("Saindo...");
        return;
      default:
        console.log("Opcao invalida!");
    }
  }
}

function escolherTipoProduto(): string {
  console.log("\nTipos de produtos:");
  console.log("1. Livro");
  console.log("2. Roupa");
  console.log("3. Brinquedo");
  console.log("4. Eletrônico");

  return readlineSync.question("Escolha o tipo: ");
}

function adicionarProduto() {
  const tipo = escolherTipoProduto();

  switch (tipo) {
    case "1":
      const titulo = readlineSync.question("Titulo: ");
      const autor = readlineSync.question("Autor: ");
      const precoLivro = Number(readlineSync.question("Preco: "));
      estoqueLivros.adicionar(new Livro(titulo, autor, precoLivro));
      break;
    case "2":
      const descricao = readlineSync.question("Descricao: ");
      const tamanho = readlineSync.question("Tamanho: ");
      const precoRoupa = Number(readlineSync.question("Preco: "));
      estoqueRoupas.adicionar(new Roupa(descricao, tamanho, precoRoupa));
      break;
    case "3":
      const nome = readlineSync.question("Nome: ");
      const idadeMinima = Number(readlineSync.question("Idade minima: "));
      const precoBrinquedo = Number(readlineSync.question("Preco: "));
      estoqueBrinquedos.adicionar(
        new Brinquedo(nome, idadeMinima, precoBrinquedo)
      );
      break;
    case "4":
      const modelo = readlineSync.question("Modelo: ");
      const marca = readlineSync.question("Marca: ");
      const precoEletronico = Number(readlineSync.question("Preco: "));
      estoqueEletronicos.adicionar(
        new Eletronico(modelo, marca, precoEletronico)
      );
      break;
    default:
      console.log("Tipo invalido!");
  }
}

function listarProdutos() {
  console.log("\n--- Livros ---");
  console.log(estoqueLivros.listar());

  console.log("\n--- Roupas ---");
  console.log(estoqueRoupas.listar());

  console.log("\n--- Brinquedos ---");
  console.log(estoqueBrinquedos.listar());

  console.log("\n--- Eletrônicos ---");
  console.log(estoqueEletronicos.listar());
}

function removerProduto() {
  const tipo = escolherTipoProduto();
  const indice = Number(readlineSync.question("Indice do produto a remover: "));

  switch (tipo) {
    case "1":
      estoqueLivros.remover(indice);
      break;
    case "2":
      estoqueRoupas.remover(indice);
      break;
    case "3":
      estoqueBrinquedos.remover(indice);
      break;
    case "4":
      estoqueEletronicos.remover(indice);
      break;
    default:
      console.log("Tipo invalido!");
  }
}

function buscarPorPreco() {
  const maxPreco = Number(readlineSync.question("Preco maximo: "));

  console.log("Livros:", filtrarPorPreco(estoqueLivros, maxPreco));
  console.log("Roupas:", filtrarPorPreco(estoqueRoupas, maxPreco));
  console.log("Brinquedos:", filtrarPorPreco(estoqueBrinquedos, maxPreco));
  console.log("Eletrônicos:", filtrarPorPreco(estoqueEletronicos, maxPreco));
}

function contarItensEstoque() {
  console.log("Livros:", contarItens(estoqueLivros));
  console.log("Roupas:", contarItens(estoqueRoupas));
  console.log("Brinquedos:", contarItens(estoqueBrinquedos));
  console.log("Eletrônicos:", contarItens(estoqueEletronicos));
}

function mostrarPrimeiroItem() {
  console.log("Primeiro livro:", obterPrimeiroItem(estoqueLivros));
  console.log("Primeira roupa:", obterPrimeiroItem(estoqueRoupas));
  console.log("Primeiro brinquedo:", obterPrimeiroItem(estoqueBrinquedos));
  console.log("Primeiro eletrônico:", obterPrimeiroItem(estoqueEletronicos));
}


menuPrincipal();