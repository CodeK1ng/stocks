import { TestBed } from '@angular/core/testing';

import { StepsServiceService } from './steps-service.service';

describe('StepsServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StepsServiceService = TestBed.get(StepsServiceService);
    expect(service).toBeTruthy();
  });
});
