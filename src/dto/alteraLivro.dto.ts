import { IsInt, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class alteraFilmeDTO{
    @IsString()
    @IsNotEmpty({message: "nome Não pode ser vazio"})
    @IsOptional()
    titulo:string;

    @IsString()
    @IsOptional()
    autor: string;

    @IsInt()
    @IsOptional()
    anoPublicacao: Number;

    @IsString()
    @IsOptional()
    genero: string;

    @IsString()
    @IsOptional()
    sinopse: string;

}