import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {ReactiveFormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgregarClienteComponent } from './componentes/agregar-cliente/agregar-cliente.component';
import { ListarClientesComponent } from './componentes/listar-clientes/listar-clientes.component'; 




@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    AgregarClienteComponent,
    ListarClientesComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    MatIconModule,
    BrowserAnimationsModule,
    
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
