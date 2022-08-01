import { Component, OnInit } from '@angular/core';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import { TokenService } from 'src/app/servicios/token.service';
import { Experiencia } from 'src/app/model/experiencia';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  experiencia: Experiencia[] = [];

  constructor(
    public experienciaService: ExperienciaService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    /*this.cargarExperiencia();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }*/}

  cargarExperiencia(): void {
    this.experienciaService.listarExperiencia().subscribe(data => { this.experiencia = data; })
  }

  delete(id?: number){
    if(id != undefined){
      this.experienciaService.borrarExperiencia(id).subscribe(
        data => {
          this.cargarExperiencia();
        }, err => {
          alert("No se pudo borrar la experiencia");
        }
      )
    }
  }
}