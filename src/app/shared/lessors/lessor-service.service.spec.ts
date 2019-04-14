import { TestBed } from '@angular/core/testing';

import { LessorServiceService } from './lessor-service.service';

describe('LessorServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LessorServiceService = TestBed.get(LessorServiceService);
    expect(service).toBeTruthy();
  });
});
