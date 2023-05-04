import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NumberValueAccessor, Validators } from '@angular/forms';
import { HabilidadesService } from 'src/app/servicios/habilidades.service';
import { Habilidades } from 'src/app/model/habilidades';
import { ActivatedRoute, Router } from '@angular/router';
import { TokenService } from 'src/app/servicios/token.service';

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
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private tokenService: TokenService
    ) 
    { }
  isLogged=false;

  ngOnInit():void { 
  this.cargar();
  if(this.tokenService.getToken()){
    this.isLogged = true;
  } else {
    this.isLogged = false;
  }}
  cargar(): void{
    this.habilidadesService.buscarHabilidades().subscribe(
      data => {
        this.habilidades = data;
      }
    )
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
onCreate(): void{
  const habilidades = new Habilidades(this.habilidades.porcentajepr, this.habilidades.porcentajesg,this.habilidades.porcentajetr,this.habilidades.porcentaject,this.habilidades.porcentajeqt);
  this.habilidadesService.guardarHabilidades(habilidades).subscribe(
    data => {
      alert("Skill creada correctamente");
      this.router.navigate(['']);
    }, err =>{
      alert("Fallo al añadir la skill");
      this.router.navigate(['']);
    }
  )
}
}
 