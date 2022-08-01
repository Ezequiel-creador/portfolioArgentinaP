import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia} from '../model/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

API_SERVE:string = "http://localhost:8080/";

constructor(
  private httpClient: HttpClient) { }

public listarExperiencia(): Observable<Experiencia[]>{
  return this.httpClient.get<Experiencia[]>(this.API_SERVE + 'ver/experiencias');
}

public buscarExperiencia(id: number): Observable<Experiencia>{
  return this.httpClient.get<Experiencia>(this.API_SERVE +"buscar/experiencia/${id}");
} 

public guardarExperiencia(experiencia: Experiencia): Observable<any>{
  return this.httpClient.post<any>(this.API_SERVE + 'new/experiencia', experiencia);
}

public editarExperiencia(id: number, experiencias: Experiencia): Observable<any>{
  return this.httpClient.put<any>(this.API_SERVE + `new/experiencia/${id}`, experiencias);
}

public borrarExperiencia(id: number): Observable<any>{
  return this.httpClient.delete<any>(this.API_SERVE + `borrar/experiencia/${id}`);
}
}
