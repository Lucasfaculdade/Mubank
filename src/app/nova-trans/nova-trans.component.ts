import { TransferenciaService } from './../services/transferencia.service';
import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Transferencia } from '../models/transferencia.model';

@Component({
  selector: 'app-nova-trans',
  templateUrl: './nova-trans.component.html',
  styleUrls: ['./nova-trans.component.scss'],
})
export class NovaTransComponent {

  @Output() aoTransferir = new EventEmitter<any>();

  value!: number;
  conta!: number;

  constructor(private service: TransferenciaService, private router: Router ){

  }

  trans(){
    console.log('Transferencia em andamento');

    const valueEmitir: Transferencia = {
      value: this.value,
      conta: this.conta,
      
    };
    
    this.service.adicionar(valueEmitir).subscribe({
      next: (resultado) => {
        console.log(resultado);
        this.cleanBox();
        this.router.navigateByUrl('extrato');  
      },
      error: (error) => console.error(error)
    });
    
  }

  cleanBox(){
    this.value = 0;
    this.conta = 0
  }
}
