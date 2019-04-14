import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMeLessorComponent } from './about-me-lessor.component';

describe('AboutMeLessorComponent', () => {
  let component: AboutMeLessorComponent;
  let fixture: ComponentFixture<AboutMeLessorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutMeLessorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutMeLessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
