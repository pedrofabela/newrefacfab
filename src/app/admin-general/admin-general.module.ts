import { NgModule } from '@angular/core';
import { BasicSharedModule } from '../shared/modules/basic-shared.module';
import { MaterialFormSharedModule } from '../shared/modules/material-form-shared.module';
import { AdminGeneralRoutingModule } from './admin-general-routing.module';
import { ClienteComponent } from './pages/cliente/cliente.component';
import { ProveedorComponent } from './pages/proveedor/proveedor.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { TipoCambioComponent } from './pages/tipo-cambio/tipo-cambio.component';



@NgModule({
  declarations: [ClienteComponent, ProveedorComponent, UsuariosComponent, TipoCambioComponent],
  imports: [
    BasicSharedModule,
    MaterialFormSharedModule,
    AdminGeneralRoutingModule
  ],
  
})
export class AdminGeneralModule { }
