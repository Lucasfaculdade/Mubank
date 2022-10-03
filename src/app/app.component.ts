import { Component } from '@angular/core';
import { TransferenciaService } from '../app/services/transferencia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mubank';
  transferencias: any[] = [];
   
  constructor(private services: TransferenciaService) {

  }

  transferir($event: any){
    this.services.adicionar($event);
  }
}
