import { Module } from "@nestjs/common";
import { LivrosController } from "./livros.controller";
import { LivroArmazenados } from "./livro.dm";

@Module({
    imports:[],
    controllers:[LivrosController],
    providers:[LivroArmazenados]

})
export class LivroModule{}
