import {Observable, of} from "rxjs";
import {Vehiculo} from "../model/vehiculo";

export class VehiculoServiceStub {
  private vehiculos: Vehiculo[] = [ ];

  getVehiculos(): Observable<Vehiculo[]> {
    return of(this.vehiculos);
  }
}
