import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ConsultaService {

  protected ServerGetAll: string  = 'http://localhost:8080/v1/public/characters';
  protected ServerGetById: string = 'http://localhost:8080/v1/public/characters/';
  protected ServerGetAllBitacoras: string = 'http://localhost:8080/v1/public/dataBitacora';

  constructor(private httpClient: HttpClient) { }

  getAllCharacters() {
    return this.httpClient.get<any[]>(this.ServerGetAll);
  }

  getCharactertById(idClient:any){
    return this.httpClient.get<any>(this.ServerGetById+idClient);
  }

  getAllBitacoras() {
    return this.httpClient.get<any[]>(this.ServerGetAllBitacoras);
  }
  
}
