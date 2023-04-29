import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListVehiculosComponent } from './list-vehiculos/list-vehiculos.component';
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
      ListVehiculosComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class VehiculosModule { }
