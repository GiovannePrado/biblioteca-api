import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { LivroEntity } from "./livro.entity";

import { criaLivroDTO } from "./dto/livros.dto";

import {v4 as uuid} from 'uuid';
import { LivroArmazenados } from "./livro.dm";
import { listaLivroDTO } from "./dto/consultaLivro.dto";
import { alteraLivroDTO } from "./dto/alteraLivro.dto";

@Controller('/livros')
export class LivrosController{
    constructor(private clsLivrosArmazenados: LivroArmazenados){

    }

    @Post()
    async criaLivros(@Body() dadosLivro: criaLivroDTO){
 
        var novoLivro = new LivroEntity(uuid(), dadosLivro.titulo, dadosLivro.autor,
                                            dadosLivro.anoPublicacao, dadosLivro.genero,
                                            dadosLivro.sinopse)
        this.clsLivrosArmazenados.AdicionarLivro(novoLivro);

        var livro = {
            dadosLivro : dadosLivro,
        status: "Livro cadastrado"
        }
        return livro;

    }
    @Get()
    async listaLivros(){
        return this.clsLivrosArmazenados.Livros;

        const livrosListados = this.clsLivrosArmazenados.Livros;
        const listaRetorno = livrosListados.map(
            livro => new listaLivroDTO(
                livro.id,
                livro.titulo,
                livro.autor,
            )
        ) 
        
        return listaRetorno;
    }

    @Put('/:id')
    async atualizaLivro(@Param('id') id: string, @Body() novosDados: alteraLivroDTO){
        const livroAtualizado = await this.clsLivrosArmazenados.atualizaLivro(id, novosDados)

        return{
            livro: livroAtualizado,
            message: 'livro atualizado'
        }
    }

    @Delete('/:id')
    async removeFilme(@Param('id') id: string){
        const livroRemovido = await this.clsLivrosArmazenados.removeLivro(id)

        return{
            livro: livroRemovido,
            message: 'livro removido'
        }
    }
}