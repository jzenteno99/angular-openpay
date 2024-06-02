import { Component, OnInit, ViewChild } from '@angular/core';
import { ConsultaService } from '../../services/consulta.service';
import { DetailCharacterComponent } from '../modal/detail-character/detail-character.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [DetailCharacterComponent,RouterLink],
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.css'
})
export class CharactersComponent implements OnInit{

  @ViewChild(DetailCharacterComponent) modal?: DetailCharacterComponent; 

  arrResultDB?: any[];
  dataInfo?: any[];
  dataInfoTmp?: any[];
  page = 1;
  pageSize = 10;
  sizeDataInfo: number = 0;
  srcFolio: string = '';
  headerOrigen: string = '';
  tamanio: number = 0;
  characters?: any[];
  filterId?:string;

    
  constructor(
      private consultaService: ConsultaService
    ) { }

  ngOnInit(): void { 
    this.filterId= '';
    this.getAllClients();
  }

  getAllClients(){
    
    this.consultaService.getAllCharacters().subscribe(data=>{
      this.characters = data;
      console.log('Characters', this.characters);
    });
  
  }
  
  getClientById(id:any){
    console.log('getClientById-', id);
    /*
        this.clientService.getClientById(id).subscribe(data=>{
          this.clientes?.push(data);
          console.log(data);
        })
    */
  }

  openDialogDetalle(charSelected:any){

    this.modal?.openModal(charSelected.id);
  }

  onKeyAP(event:any) {
    const inputValue = event.target.value;
    this.filterId = inputValue;
    this.characters = [];
    this.getClientById(inputValue);
  }

  createClient(){
    /*
    try {
      var dialogRef = this.dialog.open(DetailCharacterComponent, {
        width: '40%', height: 'auto', position: { top: '5%', right: '30%'},
        data: null
      });

      dialogRef.beforeClosed().subscribe(observer => {
        this.getAllClients();
      });
    } catch (error) {
      if (error == false) {
        this.dialog.closeAll();
      } else {
        //this.openDialogError(error);
      }
    }
    */
  }

}

