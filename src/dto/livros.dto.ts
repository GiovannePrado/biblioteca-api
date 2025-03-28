import { IsNotEmpty, IsString} from "class-validator";

export class criaLivroDTO{
    @IsString()
    @IsNotEmpty({message: "nome Não pode ser vazio"})
    titulo:string;
    
    @IsString()
    autor: string;

    @IsString()
    anoPublicacao: number;

    @IsString()
    genero: string;

    @IsString()
    sinopse: string;

}
