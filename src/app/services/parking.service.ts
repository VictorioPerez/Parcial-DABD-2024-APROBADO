import { Injectable } from '@angular/core';
import { Vehicle } from '../model/Vehicle';

interface ParkingSlot {
  id: number;
  availableSpaces: number;
  vehicles: Vehicle[];
}

@Injectable({
  providedIn: 'root'
})


export class ParkingService {
  private parkingSlots: ParkingSlot[] = [];

  constructor() {
    // Inicializar 30 plazas de estacionamiento
    for (let i = 1; i <= 30; i++) {
      this.parkingSlots.push({ id: i, availableSpaces: 8, vehicles: [] });
    }
  }

  assignParkingSlot(vehicle: Vehicle): boolean {
    let requiredSpaces = this.getRequiredSpaces(vehicle.type);
    
    for (let slot of this.parkingSlots) {
      if (slot.availableSpaces >= requiredSpaces) {
        slot.vehicles.push(vehicle);
        slot.availableSpaces -= requiredSpaces;
        return true;
      }
    }
    return false;
  }

  private getRequiredSpaces(vehicleType: string): number {
    switch (vehicleType) {
      case 'Camioneta': return 8;
      case 'Auto': return 4;
      case 'Moto': return 1;
      default: return 0;
    }
  }

  getParkingStatus(): ParkingSlot[] {
    return this.parkingSlots;
  }
}
