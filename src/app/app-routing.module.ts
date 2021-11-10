import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InicioComponent} from '../app/componentes/inicio/inicio.component';
import { AgregarClienteComponent } from './componentes/agregar-cliente/agregar-cliente.component';
import { ListarClientesComponent } from './componentes/listar-clientes/listar-clientes.component';

const routes: Routes = [
  {path:"", component:InicioComponent},
  {path:"agregarCliente", component: AgregarClienteComponent},
  {path:"listarClientes", component: ListarClientesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
