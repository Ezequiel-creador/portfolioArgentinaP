import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HabilidadesService {
  API_SERVER:string = "https://portfoliobackarpro.herokuapp.com/";
 
  constructor(private httpClient: HttpClient) { }
  
  public buscarHabilidades(): Observable<any>{
    return this.httpClient.get<any>(this.API_SERVER+"buscar/conocimientos/perfil");
  }
  
  public guardarHabilidades (habilidades:any): Observable<any>{
    return this.httpClient.post(this.API_SERVER+"new/conocimientos",habilidades);
  }
  }




