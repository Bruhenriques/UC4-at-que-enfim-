import { IAutenticavel } from "./IAutenticavel";

export class ISistemaLogin implements IAutenticavel {
    autenticar(usuario: string, senha: string): boolean {
        return usuario == "admin" && senha == "1234";
    }
}
