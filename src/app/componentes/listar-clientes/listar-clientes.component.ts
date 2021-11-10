import { Component, OnInit } from '@angular/core';
import { ListaPersonas } from '../../interfaces/personas';

@Component({
  selector: 'app-listar-clientes',
  templateUrl: './listar-clientes.component.html',
  styleUrls: ['./listar-clientes.component.scss']
})
export class ListarClientesComponent implements OnInit {

  listaPersonas = ListaPersonas;

  constructor() { }

  ngOnInit(): void {
  }

}
