import { Injectable } from '@angular/core';
import { Personas } from '../interfaces/personas';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  private _listPersonas: Personas[];


  constructor() {
    this._listPersonas = [];
  }

  get listPersonas(): Personas[] {
    return this._listPersonas;
  }

  addPersona(persona: Personas) {
    this._listPersonas.push(persona);
  }
}
