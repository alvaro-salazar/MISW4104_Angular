import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ListVehiculosComponent} from "./vehiculos/list-vehiculos/list-vehiculos.component";


const routes: Routes = [
  {
    path: '',
    component: ListVehiculosComponent,
  }
];

@NgModule({
  declarations: [],
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
