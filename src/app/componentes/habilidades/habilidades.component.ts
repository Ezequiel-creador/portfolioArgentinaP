import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NumberValueAccessor, Validators } from '@angular/forms';
import { HabilidadesService } from 'src/app/servicios/habilidades.service';
import { Habilidades } from 'src/app/model/habilidades';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {

  habilidades!:Habilidades;
  constructor(
    public habilidadesService: HabilidadesService,
    public fb:FormBuilder,
    private activatedRouter: ActivatedRoute,
    private router: Router) 
    { }
  /*selectHabilidad:Habilidades=new Habilidades();*/
  ngOnInit():void { 
  this.cargar();{}
 /* addOrEdit(){
    this.selectHabilidad.id=this.habilidades.length+1;
    this.habilidades.push(this.selectHabilidad);
    this.selectHabilidad=new Habilidades();
  }*/}
  cargar():void{this.habilidadesService.buscarHabilidades().subscribe(data=> {
    this.habilidades=data;
    console.log(data);
     });
  }

onUpdate():void{
 
  this.habilidadesService.guardarHabilidades(this.habilidades).subscribe(
    data=> {
      this.habilidades=data;
  
    }, err => {
      alert("Error al modificar habilidades");
      this.router.navigate(['']);
    }
  )
}

}
 