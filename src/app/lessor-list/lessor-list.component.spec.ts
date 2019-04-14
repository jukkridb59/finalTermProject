import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LessorListComponent } from './lessor-list.component';

describe('LessorListComponent', () => {
  let component: LessorListComponent;
  let fixture: ComponentFixture<LessorListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LessorListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LessorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
