import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangPsAdminComponent } from './chang-ps-admin.component';

describe('ChangPsAdminComponent', () => {
  let component: ChangPsAdminComponent;
  let fixture: ComponentFixture<ChangPsAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangPsAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangPsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
