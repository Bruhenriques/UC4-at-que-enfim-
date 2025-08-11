/*for (let voltas: number = 0; voltas < 10; voltas++) {
    console.log(`O ciclista deu ${voltas} voltas.`);
}

console.log("Ciclista venceu")*/

/* let voltas:number = 0

while(voltas <=10) {
    console.log(`O ciclista deu ${voltas} voltas.`),
    voltas++
} */

//Posso usar um for para percorrer um array

/*const numeros: number[] = [10, 20, 30, 40, 50];

for (let i: number = 0; i < numeros.length; i++) {
    console.log('numeros:' + numeros[i]);
}

//Para cada item do meu array
//Para cada numero dentro do array numeros
//faça algo

/*r (let numero of numeros){
    console.log("Numero: " + numero)
}

/*const pessoa: { nome: string, idade: number } = {
    nome: 'Leo',
    idade: 30
};

/*for (let chave in pessoa) {
    console.log(`${chave}: ${pessoa[chave as keyof typeof pessoa]}`);
}

//typeof descobre o tipo de algo
//keyoff pega as chaves de um objeto (exemplo: nome, idade)
// keyof typeof pessoa primeiro descobre o tipo de objeto, depois pega as chaves dele.

//forEach

/*const personagens:string[] = ['frodo', 'gandalf', 'legolas']

//o Foreach é usado em arrays
//Não serve para executar uma função para cada item deste array
//essa função é chamada como parâmetro do foreach (callback)
//o primeiro parametro dessa função é o valor do item, e o segundo é o seu indice

/*const personagem: string[] = ["Mario", "Luigi", "Peach"];

personagem.forEach((nome, indice) => {
    console.log(`personagem ${indice}: ${nome}`);
});*/



const sociedade = ['Frodo', 'Sam', 'Gandalf', 'Legolas', 'Gimli', 'Merry', 'Pippin', 'Aragorn', 'Boromir'];

for (let i = 0; i < sociedade.length; i++) {
    const hobbit = sociedade[i];
    if (hobbit === 'Frodo' || hobbit === 'Sam' || hobbit === 'Merry' || hobbit === 'Pippin') {
        console.log(hobbit);
    }
}

/*const personagens = [
    { nome: 'Luke', jedi: true},
     { nome: 'Darth', jedi: false},
      { nome: 'yoda', jedi: true},
       { nome: 'han solo', jedi: false},
        { nome: 'obi-wan', jedi: true}
];

for (const personagem of personagens) {
    if (personagem.jedi) {
        console.log(personagem.nome);
    }
}*/

const narutoClans: { [clan: string]: string[] } = {
    Uchiha: ['Sasuke', 'Itachi', 'Madara'],
    Hyuga: ['Neji', 'Hinata'],
    Uzumaki: ['Naruto', 'Kushina'],
    Nara: ['Shikamaru'],
    Aburame: ['Shino']
};

for (let clan in narutoClans) {
    for (let personagem of narutoClans[clan]) {
        console.log(`${personagem} pertence ao clã ${clan}`);
    }
}

const personagens = [
  { nome: 'Goku', poder: 15000 },
  { nome: 'Vegeta', poder: 14999 },
  { nome: 'Krillin', poder: 7500 },
  { nome: 'Freeza', poder: 20000 },
];

personagens.forEach(personagem => {
  if (personagem.poder > 8000) {
    console.log(`O poder de ${personagem.nome} é de mais de 8000!`);
  }
});

const pokemons = ['Pikachu', 'Charmander', 'Bulbasaur', 'Mewtwo', 'Squirtle'];

let i = 0;

while (i < pokemons.length) {
    const pokemon = pokemons[i];

    if (pokemon === 'Mewtwo') {
        console.log(`Pokémon lendário encontrado: ${pokemon}!`);
        break;
    }

    console.log(`Capturando ${pokemon}`);
    i++; 
}

let passos = 0;
const passosParaMordor = 5;

do {
  passos++;
  console.log(`Dando passo ${passos}`);
} while (passos < passosParaMordor);

console.log("Chegamos em Mordor!");
