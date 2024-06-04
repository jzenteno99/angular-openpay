import { DatePipe } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { ConsultaService } from '../../../services/consulta.service';

// @ts-ignore
const $: any = window['$'];

@Component({
  selector: 'app-detail-character',
  standalone: true,
  imports: [],
  templateUrl: './detail-character.component.html',
  styleUrl: './detail-character.component.css'
})
export class DetailCharacterComponent {

  @ViewChild('modal') modal?: ElementRef;

  idCharacter: number = 0;
  valueCharacter: string = "";
  dateCharacter: any = "";
  datePipe: DatePipe = new DatePipe('en-US');

  openModal( id: number){
    
    this.getCharactertById(id);
    $(this.modal?.nativeElement).modal('show');
  }

  constructor(
    //public dialog: MatDialog,
    private consultaService: ConsultaService
  ) { }

  closeModal(){

    $(this.modal?.nativeElement).modal('close');
  }

  getCharactertById(id:number){
    
        this.consultaService.getCharactertById(id).subscribe(data=>{
          console.log(data);
          
          this.idCharacter = data.id;
          this.valueCharacter = data.valor;
          this.dateCharacter = this.datePipe.transform(data.fecha, 'dd/MM/yyyy');
        })
    
  }
}
