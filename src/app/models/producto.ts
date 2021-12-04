import { createTokenForExternalReference } from "@angular/compiler/src/identifiers";


export class producto {
    _id?: number;
    nombre: string;
    cedula: number;
    correo: string;
    pass: string;

    constructor(nombre: string, cedula: number, correo: string, pass: string) {
        this.nombre = nombre;
        this.cedula = cedula;
        this.correo = correo;
        this.pass = pass;
    }
}
