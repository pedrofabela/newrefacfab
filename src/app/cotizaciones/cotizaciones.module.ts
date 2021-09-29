import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicSharedModule } from '../shared/modules/basic-shared.module';
import { MaterialFormSharedModule } from '../shared/modules/material-form-shared.module';
import { CotizacionesRoutingModule } from './cotizaciones-routing.module';



@NgModule({
  declarations: [],
  imports: [
    BasicSharedModule,
    MaterialFormSharedModule,
    CotizacionesRoutingModule
  ]
})
export class CotizacionesModule { }
