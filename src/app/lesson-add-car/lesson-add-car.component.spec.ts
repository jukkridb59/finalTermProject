import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonAddCarComponent } from './lesson-add-car.component';

describe('LessonAddCarComponent', () => {
  let component: LessonAddCarComponent;
  let fixture: ComponentFixture<LessonAddCarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LessonAddCarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonAddCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
