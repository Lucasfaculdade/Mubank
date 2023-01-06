import { Injectable } from "@nestjs/common";
import { Conta } from "./conta.entity";

@Injectable()
export class ContasService{
    private contas: Array<Conta> = [{
        id: 1,
        numeroDaConta: 1000,
        nomeDoCliente: 'Jose',
        email: 'jose@gmail.com',
        senhaDoCaixa: 123456,
        dataDeEntrada: new Date()
    }];
    
    async criar(conta: Conta) {
        this.contas.push(conta);
        
        return conta;
    }
    
   async buscarNumeroDaConta(numeroDaConta: number){
      return this.contas.find(conta => conta.numeroDaConta == numeroDaConta);
    }

   async contaExistente(numeroDaConta: number){
    const possivelConta = this.contas.find(
        contas => contas.numeroDaConta === numeroDaConta
    );

    return possivelConta !== undefined;
   }
}

