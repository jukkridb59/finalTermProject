import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangPsComponent } from './chang-ps.component';

describe('ChangPsComponent', () => {
  let component: ChangPsComponent;
  let fixture: ComponentFixture<ChangPsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangPsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangPsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
