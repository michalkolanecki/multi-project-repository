import { TestBed } from '@angular/core/testing';

import { FingovoApiService } from './fingovo-api.service';

describe('FingovoApiService', () => {
  let service: FingovoApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FingovoApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
