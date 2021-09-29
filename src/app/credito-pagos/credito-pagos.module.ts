import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialFormSharedModule } from '../shared/modules/material-form-shared.module';
import { BasicSharedModule } from '../shared/modules/basic-shared.module';
import { CreditoPagosRoutingModule } from './credito-pagos-routing.module';



@NgModule({
  declarations: [],
  imports: [
    BasicSharedModule,
    MaterialFormSharedModule,
    CreditoPagosRoutingModule
  ]
})
export class CreditoPagosModule { }
