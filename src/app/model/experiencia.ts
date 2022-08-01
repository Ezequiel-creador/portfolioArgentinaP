export class Experiencia {
    id?:number; 
    puesto:string;
    empresa:string;
    descripcion:string;
    fecha?:number;
    

    constructor(puesto:string, empresa:string, descripcion:string, fecha:number ){
        this.puesto = puesto;
        this.empresa = empresa;
        this.descripcion = descripcion;
        this.fecha = fecha;
        
    }
}
