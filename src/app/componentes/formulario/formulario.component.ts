import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

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


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  guardar(){
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }
    console.log(this.miFormulario);
  }

  cancelar(){
    this.miFormulario.reset();
  }

}
