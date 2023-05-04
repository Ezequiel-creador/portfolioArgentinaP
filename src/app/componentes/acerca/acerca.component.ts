import { Component, OnInit } from '@angular/core';
import { AcercaService } from 'src/app/servicios/acerca.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ImagenService } from 'src/app/servicios/imagen.service';

@Component({
  
  selector: 'app-acerca',
  templateUrl: './acerca.component.html',
  styleUrls: ['./acerca.component.css']
})

export class AcercaComponent implements OnInit {
  acerca:any;
  acercaForm:FormGroup=this.fb.group({
    id: [''],
    nombreCompleto: ['', Validators.required],
    encabezado: ['',Validators.required],
    infoPersona: ['', Validators.required],
    url: ['', Validators.required],
  });
  
  constructor(
    public acercaService: AcercaService,
    public fb:FormBuilder,
    private router:Router,
    public imagenService:ImagenService
    ) { }

  ngOnInit(): void { 
    this.cargar();{}
  }
   
  cargar():void{this.acercaService.buscarAcerca().subscribe(data=> {
    this.acerca=data;
    console.log(data);
     });
  }
  
  guardar():void{ this.acercaService.guardarAcerca(this.acercaForm.value).subscribe(resp => {
   this.acercaForm.reset();
   this.acerca.push(resp);
   
  },
    error => { console.error(error) }
  )
  }
  editar(acerca:any){ this.acercaForm.setValue({
    
    nombreCompleto: acerca.nombreCompleto ,
    encabezado: acerca.encabezado,
    infoPersona: acerca.infoPersona ,
     url: acerca.url,

  })
  
}
 subirImg($event:any){
  this.imagenService.subirImg($event)
 }






}





  




