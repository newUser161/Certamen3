import { Injectable } from '@angular/core';
import {Personas,ListaPersonas} from '../interfaces/personas';

@Injectable({
  providedIn: 'root'
})
export class ServicioFormularioService {

  constructor() { }
  enviarDatos(dato:Personas){     
    ListaPersonas.push(dato);
  }


}
