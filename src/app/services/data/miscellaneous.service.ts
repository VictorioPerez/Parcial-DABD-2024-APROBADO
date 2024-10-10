import { Injectable } from '@angular/core';

@Injectable()
export class MiscellaneousService {
  private readonly BRANDS = [
    {
      id: 1,
      name: 'BMW'
    },
    {
      id: 2,
      name: 'Chevrolet'
    },
    {
      id: 3,
      name: 'Fiat'
    },
    {
      id: 4,
      name: 'Ford'
    },
    {
      id: 5,
      name: 'Mercedes Benz'
    },
    {
      id: 6,
      name: 'Nissan'
    },
    {
      id: 7,
      name: 'Renault'
    }
  ];

  constructor() { }

  getBrands() {
    return this.BRANDS;
  }
}
