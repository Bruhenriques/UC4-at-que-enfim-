import Estoque from "./Estoque";
import { Livro } from "./Livro";
import { Roupa } from "./Roupa"

// Estoque de livros
const estoqueLivros = new Estoque<Livro>();
estoqueLivros.adicionar({ titulo: "Harry Potter", autor: "J.K. Rowling" });
estoqueLivros.adicionar({ titulo: "O Hobbit", autor: "Tolkien" });

console.log("📚 Livros no estoque:", estoqueLivros.listar());

// Estoque de roupas
const estoqueRoupas = new Estoque<Roupa>();
estoqueRoupas.adicionar({ tipo: "Camiseta", tamanho: "M" });
estoqueRoupas.adicionar({ tipo: "Calça Jeans", tamanho: "42" });

console.log("👕 Roupas no estoque:", estoqueRoupas.listar());
