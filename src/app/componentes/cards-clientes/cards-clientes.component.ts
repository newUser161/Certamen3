import { Component, OnInit } from '@angular/core';
import { ListaPersonas } from '../../interfaces/personas';

@Component({
  selector: 'app-cards-clientes',
  templateUrl: './cards-clientes.component.html',
  styleUrls: ['./cards-clientes.component.scss']
})
export class CardsClientesComponent implements OnInit {

  listaPersonas = ListaPersonas;

  constructor() { }

  ngOnInit(): void {
  }

}
