import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialFormSharedModule } from '../shared/modules/material-form-shared.module';
import { BasicSharedModule } from '../shared/modules/basic-shared.module';
import { PedidosRoutingModule } from './pedidos-routing.module';



@NgModule({
  declarations: [],
  imports: [
    BasicSharedModule,
    MaterialFormSharedModule,
    PedidosRoutingModule
  ]
})
export class PedidosModule { }
