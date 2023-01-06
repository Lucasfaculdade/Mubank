import { IsNotEmpty, IsOptional } from "class-validator";
import { contaUnica } from "src/conta/is-conta-unica.validator";

export class atualizarContaDTO {

    @contaUnica({
        message: 'numeroConta precisa ser unico'
    })
    @IsNotEmpty({
        message: 'numeroConta é obrigatorio'
    })
    @IsOptional()
    numeroDaConta: number;
    
    @contaUnica({
        message: 'numeroConta precisa ser unico'
    })
    @IsNotEmpty({
        message: 'numeroConta é obrigatorio'
    })
    @IsOptional()
    email: string;

    @contaUnica({
        message: 'senhaDoCaixa precisa ser unico'
    })
    @IsNotEmpty({
        message: 'senhaDoCaixa deve ser númerica e obrigatoria'
    })
    @IsOptional()
    senhaDoCaixa: number;
}
