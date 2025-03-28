export class LivroEntity{
    id: string;
    titulo: string;
    autor: string;
    anoPublicacao: number;
    genero: string;
    sinopse: string;
    constructor(id: string,titulo: string,autor: string,anoPublicacao: number,genero: string,sinopse:string){
    this.id = id;
    this.titulo = titulo;
    this.autor = autor;
    this.anoPublicacao = anoPublicacao;
    this.genero = genero;
    this.sinopse = sinopse;
    }
}