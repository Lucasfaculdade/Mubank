import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { Conta } from "./conta.entity";
import { ContasService } from "./contas.service";

@Controller('contas')
export class ContaController{
    
    constructor(private contasService: ContasService){}

    @Get(':numeroDaConta')
    public buscarNumeroDaConta(@Param('numeroDaConta') numeroDaConta: number){
        const contaEncontada = this.contasService.buscarNumeroDaConta(numeroDaConta);

        return contaEncontada;
    }
    
    @Post()
    public criar(@Body() conta: Conta): Conta{
        const contaCriada = this.contasService.criar(conta);

        return contaCriada;
    }
}