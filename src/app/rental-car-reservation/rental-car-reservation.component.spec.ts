import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalCarReservationComponent } from './rental-car-reservation.component';

describe('RentalCarReservationComponent', () => {
  let component: RentalCarReservationComponent;
  let fixture: ComponentFixture<RentalCarReservationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentalCarReservationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentalCarReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
