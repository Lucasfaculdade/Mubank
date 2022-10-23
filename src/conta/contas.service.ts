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
    
    public criar(conta: Conta): Conta{
        this.contas.push(conta);
        
        return conta;
    }
    
    public buscarNumeroDaConta(numeroDaConta: number): Conta{
      return this.contas.find(conta => conta.numeroDaConta == numeroDaConta);
    }
}

