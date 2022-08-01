import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';

import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-editar-experiencia',
  templateUrl: './editar-experiencia.component.html',
  styleUrls: ['./editar-experiencia.component.css']
})
export class EditarExperienciaComponent implements OnInit {

  exper!:Experiencia;

  constructor(
    private experienciaService: ExperienciaService, 
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.experienciaService.buscarExperiencia(id).subscribe(
      data =>{
        this.exper = data;
      }, err =>{
        alert("Error al modificar experiencia");
        this.router.navigate(['']);
      }
    )
  }

  edicion(): void{
    const id = this.activatedRoute.snapshot.params['id'];
    this.experienciaService.editarExperiencia(id, this.exper).subscribe(
      data => {
        this.router.navigate(['']);
      }, err =>{
         alert("Error al modificar experiencia");
         this.router.navigate(['']);
      }
    )
  }

}
