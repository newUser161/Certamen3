import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Personas, ListaPersonas } from '../../interfaces/personas';
import {ServicioFormularioService} from '../../servicios/servicio-formulario.service';

@Component({
  selector: 'app-agregar-cliente',
  templateUrl: './agregar-cliente.component.html',
  styleUrls: ['./agregar-cliente.component.scss']
})
export class AgregarClienteComponent implements OnInit {

  miFormulario: FormGroup;
  nuevaPersona: Personas;  
 

  // VALIDACIONES EXTRA

  // validar que se ingrese por lo menos un nombre
  validarNombres() {
    let nombres = this.miFormulario.get('nombres').value;
    let palabras = nombres.split(' ');
    if (palabras.length > 0) {
      return true;
    } else {
      return false;
    }
  }

  // validar si se ingresan como minimo y maximo dos apellidos
  validarApellidos() {
    let apellidos = this.miFormulario.get('apellidos').value;
    let palabras = apellidos.split(' ');
    if (palabras.length == 2) {
      return true;
    } else {
      return false;
    }
  }


  constructor(public fb: FormBuilder, public servicio:ServicioFormularioService) {
    this.miFormulario = this.fb.group({
      nombres: ['', [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z ]*')]],
      apellidos: ['', [Validators.required, Validators.minLength(2), Validators.pattern('[a-zA-Z ]*')]],
      genero: ['', Validators.required],
      pais: ['', Validators.required],
      ciudad: ['', [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z ]*')]],
      });
  }

  ngOnInit(): void {
  }

  guardar(){
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }
    this.nuevaPersona = {
      id: ListaPersonas.length + 1,
      nombre: this.miFormulario.get("nombres").value,
      apellido: this.miFormulario.get("apellidos").value,
      genero: this.miFormulario.get("genero").value,
      pais: this.miFormulario.get("pais").value,
      ciudad: this.miFormulario.get("ciudad").value
    }
    console.log(this.nuevaPersona);
    this.servicio.enviarDatos(this.nuevaPersona);
    alert('Persona agregada exitosamente!');
  }

  cancelar(){
    this.miFormulario.reset();
  }

}
