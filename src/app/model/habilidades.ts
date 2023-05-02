export class Habilidades {
    id?:number;
    porcentajepr:number;
    porcentajesg:number;
    porcentajetr:number;
    porcentaject:number;
    porcentajeqt:number;

    constructor (porcentajepr:number, porcentajesg:number, porcentajetr:number, porcentaject:number, porcentajeqt:number){
    this.porcentajepr =porcentajepr;
    this.porcentajesg =porcentajesg;
    this.porcentajetr =porcentajetr;
    this.porcentaject =porcentaject;
    this.porcentajeqt =porcentajeqt;
    }

}
