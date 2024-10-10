export class Vehicle {
    brand: string = '';
    model?: string = ''; 
    domain: string = '';
    type: string = '';
    isNewDomain: boolean = false;
    checkInTime: string = new Date().toLocaleTimeString();
  }
  