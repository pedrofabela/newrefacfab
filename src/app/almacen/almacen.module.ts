import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialFormSharedModule } from '../shared/modules/material-form-shared.module';
import { BasicSharedModule } from '../shared/modules/basic-shared.module';
import { AlmacenRoutingModule } from './almacen-routing.module';



@NgModule({
  declarations: [],
  imports: [
    BasicSharedModule,
    MaterialFormSharedModule,
    AlmacenRoutingModule
  ]
})
export class AlmacenModule { }
