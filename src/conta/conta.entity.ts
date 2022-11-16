import { Exclude, Expose } from "class-transformer";
import { IsEmail, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { IsContaUnica } from "./is-conta-unica.validator";



export class Conta {
    id: number;
    
    @Expose({
        name: 'account'
    })
    @IsContaUnica({
        message: 'numeroConta precisa ser unico'
    })
    @IsNotEmpty({
        message: 'numeroConta é obrigatorio'
    })
    @IsNumber()
    numeroDaConta: number;
    
    @Expose({
        name: 'fullName'
    })
    @IsContaUnica({
        message: 'nomeDoCliente precisa ser unico'
    })
    @IsNotEmpty({
        message: 'nomeDoCliente é obrigatorio'
    })
    @IsString({
        message: 'nomeDoCliente precisa ser uma string'
    })
    nomeDoCliente: string;

    @Expose({
        name: 'email'
    })
    @IsEmail({}, {
        message: 'email precisa conter um endereço valido'
    })
    email: string;
    
    @Expose({
        name: 'password'
    })
    @IsContaUnica({
        message: 'senhaDoCaixa precisa ser unico'
    })
    @IsNotEmpty({
        message: 'senhaDoCaixa deve ser númerica e obrigatoria'
    })
    @Exclude({
        toPlainOnly: true
    })
    @IsNumber()
    senhaDoCaixa: number;

    @Expose({
        name: 'joinDate'
    })
    dataDeEntrada: Date;
}