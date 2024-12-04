import { TestBed } from '@angular/core/testing';

import { DataClientApiService } from './data-client-api.service';

describe('DataClientApiService', () => {
  let service: DataClientApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataClientApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
