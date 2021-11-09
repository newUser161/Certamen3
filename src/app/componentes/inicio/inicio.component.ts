import { Component, OnInit } from '@angular/core';
import {Personas, ListaPersonas} from '../../interfaces/personas';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  active=1;
  listaPersonas = ListaPersonas;

  constructor() { 
  }
  ngOnInit(): void {
  }

  

}
