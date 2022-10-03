import { TransferenciaService } from './../services/transferencia.service';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-nova-trans',
  templateUrl: './nova-trans.component.html',
  styleUrls: ['./nova-trans.component.scss'],
})
export class NovaTransComponent {

  @Output() aoTransferir = new EventEmitter<any>();

  value!: number;
  conta!: number;

  constructor(private service: TransferenciaService){

  }

  trans(){
    console.log('Transferencia em andamento');
    console.log('................................................');
    console.log(`Transferencia Efetuado para conta ${this.conta}`);
    const valueEmit = {value: this.value, conta: this.conta}
    this.aoTransferir.emit(valueEmit);
    this.cleanBox();
  }

  cleanBox(){
    this.value = 0;
    this.conta = 0
  }
}
