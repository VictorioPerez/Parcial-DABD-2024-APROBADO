import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkingSlotRequestComponent } from './parking-slot-request.component';

describe('ParkingSlotRequestComponent', () => {
  let component: ParkingSlotRequestComponent;
  let fixture: ComponentFixture<ParkingSlotRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParkingSlotRequestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParkingSlotRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
