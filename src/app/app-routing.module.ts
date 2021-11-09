import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InicioComponent} from '../app/componentes/inicio/inicio.component';
import { AddPersonaComponent } from './componentes/agenda/add-persona/add-persona.component';
import { ListPersonasComponent } from './componentes/agenda/list-personas/list-personas.component';

const routes: Routes = [
  {path:"", component:InicioComponent},
  {path:'add-cliente', component:AddPersonaComponent},
  {path: 'list-personas', component:ListPersonasComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
