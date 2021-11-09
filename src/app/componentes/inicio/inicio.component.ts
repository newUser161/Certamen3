import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Personas, ListaPersonas} from '../../interfaces/personas';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  active=1;
  listaPersonas = ListaPersonas;

  
  formulario:FormGroup;

  constructor(public Form:FormBuilder) {
    this.formulario=this.Form.group({
       nombre:['',[Validators.required, Validators.maxLength(10)]],
       asunto:['',[Validators.required, Validators.maxLength(10)]],
       comentarios:['',Validators.required]
    });
  }
  ngOnInit(): void {
  }

  validacion(){
    console.log(this.formulario.get("nombre")?.value);
  }

}
