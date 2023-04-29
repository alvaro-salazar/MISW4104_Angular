import { TestBed } from '@angular/core/testing';

import { VehiculosService } from './vehiculos.service';
import {ListVehiculosComponent} from "../list-vehiculos/list-vehiculos.component";
import {VehiculoServiceStub} from "./vehiculo-service-stub";

describe('VehiculosService', () => {
  let service: VehiculosService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ ListVehiculosComponent ],
      providers: [{ provide: VehiculosService, useClass: VehiculoServiceStub }],
    });
    service = TestBed.inject(VehiculosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
