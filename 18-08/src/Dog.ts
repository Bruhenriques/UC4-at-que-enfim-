import { Animal } from "./Animal";
//Usamos a palavra reservada èxtends`para identificar que uma classe é filha da outra
export class Dog extends Animal {
//Dog, como é o filho da classe Animal, já herda os atributos `name`e `weight`

   constructor(name:string, weight:number) {
    //O metodo `super()`chama os construtor da classe pai
    //Assi, reutilizamos ele na classe filho
    super(name, weight)
   }
    bark(): void {
        console.log(`${this.name} is barking`);
    }
}