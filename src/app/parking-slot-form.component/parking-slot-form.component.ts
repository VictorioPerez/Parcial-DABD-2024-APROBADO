import { Component, OnInit } from '@angular/core';
import { MiscellaneousService } from '../services/data/miscellaneous.service';
import { FormsModule } from '@angular/forms';
import { Vehicle } from '../model/Vehicle';
import { ParkingService } from '../services/parking.service';


@Component({
  selector: 'app-parking-slot-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './parking-slot-form.component.html',
  styleUrl: './parking-slot-form.component.css',
})
export class ParkingSlotRequestComponent implements OnInit {
  vehicle:Vehicle = new Vehicle();
  brands:any[] = [];
  vehicleTypes: string[] = ['Moto', 'Auto', 'Camioneta'];

  constructor(private miscService: MiscellaneousService, private parkingService:ParkingService) {}

  ngOnInit(): void {
    this.brands = this.miscService.getBrands();
  }

  onSubmit() {
    if (this.vehicle.type && this.vehicle.brand && this.vehicle.domain) {
      let assigned = this.parkingService.assignParkingSlot(this.vehicle);
      if (assigned) {
        console.log('Vehículo asignado:', this.vehicle);
        this.vehicle = new Vehicle();
      } else {
        console.log('No hay espacios disponibles para este vehículo');
      }
    } else {
      console.log('Por favor, complete todos los campos');
    }
  }

  onCancel() {
    this.vehicle = new Vehicle(); 
  }


}
