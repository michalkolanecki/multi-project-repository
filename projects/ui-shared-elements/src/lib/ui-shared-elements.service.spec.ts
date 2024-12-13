import { TestBed } from '@angular/core/testing';

import { UiSharedElementsService } from './ui-shared-elements.service';

describe('UiSharedElementsService', () => {
  let service: UiSharedElementsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UiSharedElementsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
