import { Body, Controller, Get, Param, Post, Res, HttpStatus, NotFoundException, Put } from "@nestjs/common";
import { NestRespose } from "../core/http/nest_response";
import { NestResposneBuilder } from "../core/http/nest_response_builder";
import { atualizarContaDTO } from "./common/dto/atualizarConta.dto";
import { ListaUserDTO } from "./common/dto/listaContas.dto";
import { ContaEntity } from "./conta.entity";
import { ContaRepository } from "./conta.repository";
import { ContasService } from "./contas.service";

@Controller('contas')
export class ContaController{
    
    private contaRepository = new ContaRepository;

    constructor(private contasService: ContasService){}

    @Get(':numeroDaConta')
    public buscarNumeroDaConta(@Param('numeroDaConta') numeroDaConta: number){
        const contaEncontada = this.contasService.buscarNumeroDaConta(numeroDaConta);
        
        if(!contaEncontada){
            throw new NotFoundException({
                statusCode: HttpStatus.NOT_FOUND,
                message: 'Account not found.'
            });
        }
        return contaEncontada;
    }
    
    @Post()
    public async criar(@Body() conta: ContaEntity): Promise<NestRespose> {
        const contaCriada = this.contasService.criar(conta); 
        return new NestResposneBuilder().withStatus(HttpStatus.CREATED).withHeaders({
            'Location': `/contas/${(await contaCriada).numeroDaConta}`
        }).withBody(contaCriada).build();
        
    }

    @Get()
    async listaConta(){
        const contaCriada = await this.contaRepository.listarContas();
        const listaConta = contaCriada.map(
            conta => new ListaUserDTO(
                conta.id,
                conta.numeroDaConta
            )
        );
        return listaConta;
    }

    @Put('/:id')
    async atualizarConta (@Param() id: string, @Body() dadosConta: atualizarContaDTO){
        const atualizarConta = this.contaRepository.atualiza(id, dadosConta);

        return {
            conta: atualizarConta,
            messagem:'Conta atualizada com sucesso',
        }
    }
}