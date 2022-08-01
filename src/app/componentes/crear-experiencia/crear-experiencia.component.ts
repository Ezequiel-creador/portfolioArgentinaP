import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-crear-experiencia',
  templateUrl: './crear-experiencia.component.html',
  styleUrls: ['./crear-experiencia.component.css']
})
export class CrearExperienciaComponent implements OnInit {
  puesto: string = "";
  empresa: string = "";
  descripcion: string = "";
  fecha?:any;
 
  
  constructor(private experienciaService: ExperienciaService, private router: Router) { }

  ngOnInit(): void {
  }

  crearExpe(): void {
    const experiencia = new Experiencia(this.puesto, this.empresa, this.descripcion, this.fecha);
    this.experienciaService.guardarExperiencia(experiencia).subscribe(
      data => {
        alert("Creaste una experiencia");
        this.router.navigate(['']);
      }, err => {
        alert("Falló");
        this.router.navigate(['']);
      }
    )
  }

}
 