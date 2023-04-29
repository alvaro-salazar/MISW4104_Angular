import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ListVehiculosComponent} from './list-vehiculos/list-vehiculos.component';
import {HttpClientModule} from "@angular/common/http";
import {HeaderComponent} from "../header/header.component";
import {FooterComponent} from "../footer/footer.component";
import {VehiculosService} from "./service/vehiculos.service";


@NgModule({
  declarations: [
    ListVehiculosComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [VehiculosService],
})
export class VehiculosModule {
}
