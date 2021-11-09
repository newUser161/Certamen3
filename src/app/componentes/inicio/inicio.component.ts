import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  activeId=1;
  estado:boolean=false;
  fotos=[
    {"id":1,"nombre":"imagen1","ruta":"1.png"},
    {"id":2,"nombre":"imagen2","ruta":"2.png"},
    {"id":3,"nombre":"imagen3","ruta":"3.png"},
    {"id":4,"nombre":"imagen4","ruta":"4.png"}, 
    {"id":5,"nombre":"imagen5","ruta":"5.png"}, 
  ];
  
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
