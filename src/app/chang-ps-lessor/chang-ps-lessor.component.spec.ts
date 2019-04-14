import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangPsLessorComponent } from './chang-ps-lessor.component';

describe('ChangPsLessorComponent', () => {
  let component: ChangPsLessorComponent;
  let fixture: ComponentFixture<ChangPsLessorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangPsLessorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangPsLessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
