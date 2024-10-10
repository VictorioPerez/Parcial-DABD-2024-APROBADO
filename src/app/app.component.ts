import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ParkingSlotRequestComponent } from "./parking-slot-form.component/parking-slot-form.component";
import { AvaliablePlacesComponent } from './disponibilidad-places/avaliable-places.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ParkingSlotRequestComponent,AvaliablePlacesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'parking-lot';


  isFormVisible = true;
  isMapVisible = false;

  showForm() {
    this.isFormVisible = true;
    this.isMapVisible = false;
  }

  showMap() {
    this.isFormVisible = false;
    this.isMapVisible = true;
  }

}
