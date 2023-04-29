import { TestBed, ComponentFixture, waitForAsync } from '@angular/core/testing';
import { ListVehiculosComponent } from './list-vehiculos.component';
import { Vehiculo } from '../model/vehiculo';
import { faker } from '@faker-js/faker';
import {VehiculoServiceStub} from "../service/vehiculo-service-stub";
import {VehiculosService} from "../service/vehiculos.service";

describe('ListVehiculosComponent', () => {
  let component: ListVehiculosComponent;
  let fixture: ComponentFixture<ListVehiculosComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListVehiculosComponent ],
      providers: [{ provide: VehiculosService, useClass: VehiculoServiceStub }],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListVehiculosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create a table with 3 rows plus header', () => {
    // Create an array of 3 vehiculos
    const vehiculos: Vehiculo[] = [
      new Vehiculo(1,
        faker.vehicle.manufacturer(),
        faker.vehicle.type(),
        faker.vehicle.vehicle(),
        faker.datatype.number({min: 1980, max: new Date().getFullYear()}),
        faker.datatype.number({ min: 0, max: 200000 }),
        faker.vehicle.color(),
        faker.image.transport()),
      new Vehiculo(2,
        faker.vehicle.manufacturer(),
        faker.vehicle.type(),
        faker.vehicle.vehicle(),
        faker.datatype.number({min: 1980, max: new Date().getFullYear()}),
        faker.datatype.number({ min: 0, max: 200000 }),
        faker.vehicle.color(),
        faker.image.transport()),
      new Vehiculo(2,
        faker.vehicle.manufacturer(),
        faker.vehicle.type(),
        faker.vehicle.vehicle(),
        faker.datatype.number({min: 1980, max: new Date().getFullYear()}),
        faker.datatype.number({ min: 0, max: 200000 }),
        faker.vehicle.color(),
        faker.image.transport()),
    ];

    // Set the vehiculos property of the component to the array we just created
    component.vehiculos = vehiculos;

    // Trigger change detection
    fixture.detectChanges();

    // Get the table element from the component's template
    const table: HTMLElement = fixture.nativeElement.querySelector('table');

    // Verify that the table exists
    expect(table).toBeTruthy();

    // Get the header row from the table
    const headerRow: HTMLElement = table.querySelector('thead tr')!;

    // Verify that the header row exists and contains the expected columns
    expect(headerRow).toBeTruthy();
    expect(headerRow.textContent).toContain('Marca');
    expect(headerRow.textContent).toContain('Linea');
    expect(headerRow.textContent).toContain('Modelo');

    // Get the data rows from the table
    const dataRows: NodeListOf<HTMLElement> = table.querySelectorAll('tbody tr');

    // Verify that there are 3 data rows
    expect(dataRows.length).toBe(3);

    // Verify that each data row contains the expected data
    for (let i = 0; i < vehiculos.length; i++) {
      const dataRow = dataRows[i];
      const vehiculo = vehiculos[i];
      expect(dataRow.textContent).toContain(vehiculo.id.toString());
      expect(dataRow.textContent).toContain(vehiculo.marca);
      expect(dataRow.textContent).toContain(vehiculo.linea);
      expect(dataRow.textContent).toContain(vehiculo.modelo.toString());
    }
  });
});

