import { Lugar } from './lugar';

 export class ReporteDeIncendioPorFecha{    
    id: number;
    fecha: Date;
    estado: string;
    lugar: Lugar;

    constructor(_fecha: Date, _estado: string, _lugar: Lugar, _id: number){
        this.fecha = _fecha;
        this.estado = _estado;
        this.lugar = _lugar;
        this.id = _id;
    }

}


