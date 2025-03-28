import { Injectable } from "@nestjs/common";
import { LivroEntity } from "./livro.entity";

@Injectable()
export class LivroArmazenados{
    #livro: LivroEntity[] = [];

    AdicionarLivro(livro: LivroEntity){
        this.#livro.push(livro);
    }

    get Livros(){
        return this.#livro;
    }

}
