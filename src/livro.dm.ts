import { Injectable } from "@nestjs/common";
import { LivroEntity } from "./livro.entity";
import { alteraLivroDTO } from "./dto/alteraLivro.dto";

@Injectable()
export class LivroArmazenados{
    atualizaLivro(id: string, novosDados: alteraLivroDTO) {
        throw new Error("Method not implemented.");
    }
    removeLivro(id: string) {
        throw new Error("Method not implemented.");
    }
    #livro: LivroEntity[] = [];

    AdicionarLivro(livro: LivroEntity){
        this.#livro.push(livro);
    }

    get Livros(){
        return this.#livro;
    }

}
