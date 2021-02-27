import { TestBed } from '@angular/core/testing';

import { FarmerService } from './product.service';

describe('FarmerService', () => {
  let service: FarmerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FarmerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
