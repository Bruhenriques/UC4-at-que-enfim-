import { Animal } from "./Animal";

export class Owl extends Animal {

    constructor(name:string, weight:number){
        super(name, weight)
        this.name
        this.weight
    }

    fly():void {
        console.log(`${this.name} is flying`)
    }

    eat():void {
        console.log(`${this.name} is eating`)
    }



}