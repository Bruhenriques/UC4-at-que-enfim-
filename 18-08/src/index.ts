import { Crocodile } from "./Crocodile";
import { Dog } from "./Dog";

const myDog:Dog = new Dog("Bob", 10)

console.log(myDog.name)
console.log(myDog.weight)

myDog.bark()
myDog.eat()

import { Owl } from "./Owl";

const myOwl:Owl = new Owl("cocoruja", 3);
console.log(myOwl.name)
console.log(myOwl.weight)

myOwl.fly(); 
myOwl.eat();



const myCrocodile: Crocodile = new Crocodile("angelo", 150)
console.log(myCrocodile.name)
console.log(myCrocodile.weight)

myCrocodile.swim();
myCrocodile.eat();
