import { Body, Controller, Get, Param, Post, Res, HttpStatus } from "@nestjs/common";
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
    public criar(@Body() conta: Conta, @Res() res): Conta{
        
        const contaCriada = this.contasService.criar(conta);
        res.status(HttpStatus.CREATED).location(`/contas/${contaCriada.numeroDaConta}`).json(contaCriada);
        return contaCriada;
    }
}