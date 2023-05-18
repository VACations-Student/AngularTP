export class Lugar{
    id: number;
    nombre: string;
    latitud: number;
    longitud: number;

    constructor(_latitud: string, _longitud: number, _nombre: string, _id: number){
        this.latitud = _longitud;
        this.longitud = _longitud;
        this.nombre = _nombre;
        this.id = _id;
    }
}