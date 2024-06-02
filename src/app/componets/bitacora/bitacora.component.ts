import { Component, OnInit } from '@angular/core';
import { ConsultaService } from '../../services/consulta.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-bitacora',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './bitacora.component.html',
  styleUrl: './bitacora.component.css'
})
export class BitacoraComponent implements OnInit{

  bitacoras?: any[] = [];

  constructor(
    private consultaService: ConsultaService
  ) { }

  ngOnInit(): void { 
    this.getAllClients();
  }

  getAllClients(){
    
    this.consultaService.getAllBitacoras().subscribe(data=>{
      this.bitacoras = data;
      console.log('bitacoras', this.bitacoras);
    });
  }
}
