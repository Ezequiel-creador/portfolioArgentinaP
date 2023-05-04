import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImagenService {

  constructor() { }
  public subirImg($event:any){
    const file=$event.target.files[0]
    console.log(file);
  }
}
