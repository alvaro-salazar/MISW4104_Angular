import {Component, OnInit} from '@angular/core';
import {Vehiculo} from "../model/vehiculo";
import {VehiculosService} from "../service/vehiculos.service";
import {SumaVehiculosPorMarca} from "./suma-vehiculos-por-marca";

@Component({
  selector: 'app-list-vehiculos',
  templateUrl: './list-vehiculos.component.html',
  styleUrls: ['./list-vehiculos.component.css']
})
export class ListVehiculosComponent implements OnInit {
  public vehiculos: Array<Vehiculo> = [];
  public sumaVehiculosPorMarca: SumaVehiculosPorMarca = {};
  public arregloVehiculos!: string[];

  constructor(private vehiculosService: VehiculosService) {
  }

  getVehiculos() {
    this.vehiculosService.getVehiculos().subscribe(
      (vehiculos: Array<Vehiculo>) => {
        this.vehiculos = vehiculos;
        this.vehiculos.forEach((vehiculo) => {
          if (!this.sumaVehiculosPorMarca[vehiculo.marca]) {
            this.sumaVehiculosPorMarca[vehiculo.marca] = 1;
          } else {
            this.sumaVehiculosPorMarca[vehiculo.marca]++;
          }
        });
        this.arregloVehiculos =Object.keys(this.sumaVehiculosPorMarca);
      }
    );
  }

  ngOnInit(): void {
    this.getVehiculos();
  }
}
