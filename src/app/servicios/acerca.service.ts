import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AcercaService {
  API_SERVER:string = "https://portfoliobackarpro.herokuapp.com/";
  constructor(private httpClient: HttpClient) { }

public buscarAcerca(): Observable<any>{
  return this.httpClient.get<any>(this.API_SERVER+"buscar/acerca/perfil");
}

public guardarAcerca (acerca:any): Observable<any>{
  return this.httpClient.post(this.API_SERVER+"new/acerca",acerca);
}
}