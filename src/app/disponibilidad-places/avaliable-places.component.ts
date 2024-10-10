import { CommonModule, NgSwitch, NgSwitchDefault } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ParkingService } from '../services/parking.service';
import { Vehicle } from '../model/Vehicle';

interface ParkingSlot {
  id: number;
  availableSpaces: number;
  vehicles: Vehicle[];
}
@Component({
  selector: 'app-disponibilidad-places',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './avaliable-places.component.html',
  styleUrl: './avaliable-places.component.css',
})
export class AvaliablePlacesComponent implements OnInit {
  parkingSlots: ParkingSlot[] = [];
  constructor(private parkingService: ParkingService) {}

  ngOnInit(): void {
    this.updateParkingStatus();
  }

  updateParkingStatus() {
    this.parkingSlots = this.parkingService.getParkingStatus();
    console.log(this.parkingSlots);
    
  }

  getSlotStatus(slot: ParkingSlot): string {
    if (slot.availableSpaces === 8) return 'available';
    if (slot.availableSpaces === 0) return 'full';
    return 'partial';
  }

  getSlotIcon(slot: ParkingSlot): string {
    if (slot.vehicles.length === 0) return 'bi-p-square';
    let lastVehicle = slot.vehicles[slot.vehicles.length - 1];
    switch (lastVehicle.type) {
      case 'Auto': return 'bi-car-front-fill';
      case 'Camioneta': return 'bi-truck';
      case 'Moto': return 'bi-motorcycle';
      default: return 'bi-question-square';
    }
  }
}
