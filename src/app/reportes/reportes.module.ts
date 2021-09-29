import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialFormSharedModule } from '../shared/modules/material-form-shared.module';
import { BasicSharedModule } from '../shared/modules/basic-shared.module';
import { ReportesRoutingModule } from './reportes-routing.module';



@NgModule({
  declarations: [],
  imports: [
    BasicSharedModule,
    MaterialFormSharedModule,
    ReportesRoutingModule
  ]
})
export class ReportesModule { }
