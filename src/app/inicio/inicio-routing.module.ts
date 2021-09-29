import { AdminGeneralModule } from './../admin-general/admin-general.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from '../admin-general/pages/cliente/cliente.component';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [
  {
    path:'admin',
    loadChildren:()=>import('../admin-general/admin-general.module').then(m=>m.AdminGeneralModule)
  },
  {
    path:'',
    component:InicioComponent
  },
  {
    path:'**',
    redirectTo:''
  }
  
  
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InicioRoutingModule { }
