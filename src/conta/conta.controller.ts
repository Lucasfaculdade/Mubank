import { Body, Controller, Get, Param, Post, Res, HttpStatus } from "@nestjs/common";
import { NestRespose } from "../core/http/nest_response";
import { NestResposneBuilder } from "../core/http/nest_response_builder";
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
    public criar(@Body() conta: Conta): NestRespose {
        const contaCriada = this.contasService.criar(conta);
        return new NestResposneBuilder().withStatus(HttpStatus.CREATED).withHeaders({
            'Location': `/contas/${contaCriada.numeroDaConta}`
        }).withBody(contaCriada).build();
        
    }
}