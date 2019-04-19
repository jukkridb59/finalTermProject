import { TestBed } from '@angular/core/testing';

import { LessorService } from './lessor.service';

describe('LessorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LessorService = TestBed.get(LessorService);
    expect(service).toBeTruthy();
  });
});
