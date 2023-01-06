import { Get } from "@nestjs/common";

export class ContaRepository{
    atualiza(id: string, dadosConta: any) {
        throw new Error("Method not implemented.");
    }
    private contas = [];
    
    @Get()
    async listarContas(){
        return this.contas;
    }
}