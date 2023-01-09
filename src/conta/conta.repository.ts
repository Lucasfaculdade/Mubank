import { Get } from "@nestjs/common";
import { ContaEntity } from "./conta.entity";

export class ContaRepository{
    atualiza(id: string, dadosConta: any) {
        throw new Error("Method not implemented.");
    }
    private contas = [];
    
    @Get()
    async listarContas(){
        return this.contas;
    }

    async atualizar(id:string, dadosDeAtualizacao: Partial<ContaEntity>){
        const possivelConta = this.contas.find(
            contaSalva => contaSalva.id === id
        );

        if(!possivelConta){
            throw new Error('Conta não encontrada');
        }

        Object.entries(dadosDeAtualizacao).forEach(([key, value]) =>{
           if(key === 'id'){
              return 
           }
           possivelConta[key] = value;
        });

        return possivelConta;
    }
}