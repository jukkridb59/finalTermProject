import { TestBed } from '@angular/core/testing';

import { AuthRentalService } from './auth-rental.service';

describe('AuthRentalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthRentalService = TestBed.get(AuthRentalService);
    expect(service).toBeTruthy();
  });
});
