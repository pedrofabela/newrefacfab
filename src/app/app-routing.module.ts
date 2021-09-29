import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGeneralModule } from './admin-general/admin-general.module';

const routes: Routes = [
 {
  path:'inicio',
  loadChildren:()=>import('./inicio/inicio.module').then(m=>m.InicioModule)
},
{
  path:'auth',
  loadChildren:()=>import('./auth/auth.module').then(m=>m.AuthModule)
  
},
{
  path:'**',
  redirectTo:'auth'
}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
