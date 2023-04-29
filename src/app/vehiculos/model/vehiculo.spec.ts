import { Vehiculo } from './vehiculo';
import {faker} from "@faker-js/faker";

describe('Vehiculo', () => {
  it('should create an instance', () => {
    expect(new Vehiculo(1,
      faker.vehicle.manufacturer(),
      faker.vehicle.type(),
      faker.vehicle.vehicle(),
      faker.datatype.number({min: 1980, max: new Date().getFullYear()}),
      faker.datatype.number({ min: 0, max: 200000 }),
      faker.vehicle.color(),
      faker.image.transport())).toBeTruthy();
  });
});
