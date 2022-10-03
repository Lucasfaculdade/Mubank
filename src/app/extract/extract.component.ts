import { Component, Input, OnInit } from '@angular/core';
import { Transferencia } from '../models/transferencia.model';
import { TransferenciaService } from '../services/transferencia.service';

@Component({
  selector: 'app-extract',
  templateUrl: './extract.component.html',
  styleUrls: ['./extract.component.scss']
})
export class ExtractComponent implements OnInit {
  transferencias!: any[];

  constructor(private services: TransferenciaService) { }

  ngOnInit() {
    this.services.todas().subscribe((transferencias: Transferencia[])=>{
        console.table(transferencias);
        this.transferencias = transferencias;
    })
  }

}
