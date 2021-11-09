import { Component, OnInit } from '@angular/core';
import { Personas } from '../../../interfaces/personas';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PersonaService } from '../../../services/persona.service';

@Component({
  selector: 'app-add-persona',
  templateUrl: './add-persona.component.html',
  styleUrls: ['./add-persona.component.scss']
})
export class AddPersonaComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    nombres: ['', [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z ]*')]],
    apellidos: ['', [Validators.required, Validators.minLength(2), Validators.pattern('[a-zA-Z ]*')]],
    genero: ['', Validators.required],
    ciudad: ['', [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z ]*')]],
    })

  campoEsValido (field:string) {
    return this.miFormulario.get(field).invalid && this.miFormulario.get(field).touched;
  }

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

  // validar si se ingresan como minimo 1 apellido y maximo 2
  validarApellidos() {
    let apellidos = this.miFormulario.get('apellidos').value;
    let palabras = apellidos.split(' ');
    if (palabras.length > 0 && palabras.length <= 2) {
      return true;
    } else {
      return false;
    }
  }



  constructor(
    private personaService: PersonaService,
    private route: Router,
    private fb: FormBuilder) { 
    this.cliente = {
      'id': 0,
      'nombre': '',
      'apellido': '',
      'genero': 'Hombre',
      'pais': 'Argentina',
      'ciudad': ''
    };
  }


  public cliente: Personas;
  

  ngOnInit(): void {
  }

  guardar(){
    console.log(this.miFormulario);
    this.personaService.addPersona(this.miFormulario.value);
    this.route.navigate(['/list-personas']);

  }
  cancelar(){
    this.miFormulario.reset();
  }
}
