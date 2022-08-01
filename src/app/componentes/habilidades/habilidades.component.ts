import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HabilidadesService } from 'src/app/servicios/habilidades.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {

  habilidad:any;
  habilidadForm:FormGroup=this.fb.group({
    id: [''],
    porcentajepr: ['', Validators.required],
    porcentajesg: ['', Validators.required],
    porcentajetr: ['', Validators.required],
    porcentaject: ['', Validators.required],
    porcentajeqt: ['', Validators.required],
  });
  
  constructor(
    public habilidadesService: HabilidadesService,
    public fb:FormBuilder) { }

  ngOnInit(): void { 
   
    this.habilidadesService.buscarHabilidades().subscribe(data=> {
    this.habilidad=data;
    console.log(data);
     });
  }
  
  guardar():void{ this.habilidadesService.guardarHabilidades(this.habilidadForm.value).subscribe(resp => {
   this.habilidadForm.reset();
   this.habilidad.push(resp);
   
  },
    error => { console.error(error) }
  )
  }
  cambiar(habilidad:any){ this.habilidadForm.setValue({
    id:habilidad.id,
    porcentajepr: habilidad.porcentajepr ,
    porcentajesg: habilidad.porcentajesg ,
    porcentajetr: habilidad.porcentajetr ,
    porcentaject: habilidad.porcentaject ,
    porcentajeqt: habilidad.porcentajeqt ,
   

  })
  
}
}