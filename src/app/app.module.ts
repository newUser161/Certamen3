// Angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

// bootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Module
import { AppRoutingModule } from './app-routing.module';

// components
import { AppComponent } from './app.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
//import { FormularioComponent } from './componentes/formulario/formulario.component';
import { AgendaComponent } from './componentes/agenda/agenda.component';
import { AddPersonaComponent } from './componentes/agenda/add-persona/add-persona.component';
import { ListPersonasComponent } from './componentes/agenda/list-personas/list-personas.component';




@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
//   FormularioComponent,
    AgendaComponent,
    AddPersonaComponent,
    ListPersonasComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    MatIconModule,
    BrowserAnimationsModule,
    FormsModule
    
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
