import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvaliablePlacesComponent } from './avaliable-places.component';

describe('DisponibilidadPlacesComponent', () => {
  let component: AvaliablePlacesComponent;
  let fixture: ComponentFixture<AvaliablePlacesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvaliablePlacesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvaliablePlacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
