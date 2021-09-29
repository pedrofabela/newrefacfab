import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './pages/cliente/cliente.component';
import { InicioComponent } from '../inicio/inicio/inicio.component';

const routes: Routes = [
{
  path:'',
  component:InicioComponent,
  children:[
    {
      path:'cliente',
      component:ClienteComponent
    }
  ]
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminGeneralRoutingModule { }
